import { NextRequest } from "next/server";

interface RateLimitConfig {
  windowMs: number;
  maxHits: number;
  blockMs: number;
}

interface RateLimitEntry {
  hits: number;
  windowStartedAt: number;
  blockedUntil: number;
}

interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
  remainingHits: number;
}

type RateLimitStore = Map<string, RateLimitEntry>;

const GLOBAL_STORE_KEY = "__ai_home_design_rate_limit_store__";

const getStore = (namespace: string): RateLimitStore => {
  const globalObject = globalThis as typeof globalThis & {
    [GLOBAL_STORE_KEY]?: Map<string, RateLimitStore>;
  };

  if (!globalObject[GLOBAL_STORE_KEY]) {
    globalObject[GLOBAL_STORE_KEY] = new Map<string, RateLimitStore>();
  }

  const rootStore = globalObject[GLOBAL_STORE_KEY]!;

  if (!rootStore.has(namespace)) {
    rootStore.set(namespace, new Map<string, RateLimitEntry>());
  }

  return rootStore.get(namespace)!;
};

const normalizeIp = (rawValue: string | null) => {
  if (!rawValue) {
    return "unknown";
  }

  const firstForwarded = rawValue.split(",")[0]?.trim();
  return firstForwarded || "unknown";
};

export const getClientIp = (request: NextRequest) =>
  normalizeIp(request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"));

export const createMemoryRateLimiter = (namespace: string, config: RateLimitConfig) => {
  const store = getStore(namespace);

  const cleanupEntry = (key: string, now: number) => {
    const entry = store.get(key);

    if (!entry) {
      return null;
    }

    const isWindowExpired = now - entry.windowStartedAt >= config.windowMs;
    const isBlockExpired = entry.blockedUntil <= now;

    if (isWindowExpired && isBlockExpired) {
      store.delete(key);
      return null;
    }

    if (isWindowExpired && entry.blockedUntil <= now) {
      entry.hits = 0;
      entry.windowStartedAt = now;
    }

    if (entry.blockedUntil <= now && entry.blockedUntil !== 0) {
      entry.blockedUntil = 0;
    }

    return entry;
  };

  const buildResult = (entry: RateLimitEntry | null, now: number): RateLimitResult => {
    if (!entry) {
      return {
        allowed: true,
        retryAfterSeconds: 0,
        remainingHits: config.maxHits,
      };
    }

    const isBlocked = entry.blockedUntil > now;
    const retryAfterSeconds = isBlocked ? Math.max(1, Math.ceil((entry.blockedUntil - now) / 1000)) : 0;

    return {
      allowed: !isBlocked,
      retryAfterSeconds,
      remainingHits: Math.max(0, config.maxHits - entry.hits),
    };
  };

  return {
    check(key: string): RateLimitResult {
      const now = Date.now();
      const entry = cleanupEntry(key, now);
      return buildResult(entry, now);
    },

    hit(key: string): RateLimitResult {
      const now = Date.now();
      const activeEntry =
        cleanupEntry(key, now) ??
        ({
          hits: 0,
          windowStartedAt: now,
          blockedUntil: 0,
        } satisfies RateLimitEntry);

      if (!store.has(key)) {
        store.set(key, activeEntry);
      }

      activeEntry.hits += 1;

      if (activeEntry.hits >= config.maxHits) {
        activeEntry.blockedUntil = now + config.blockMs;
      }

      return buildResult(activeEntry, now);
    },

    reset(key: string) {
      store.delete(key);
    },
  };
};
