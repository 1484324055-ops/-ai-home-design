import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, createToken } from "@/lib/auth";
import { createMemoryRateLimiter, getClientIp } from "@/lib/rate-limit";

const loginFailureLimiter = createMemoryRateLimiter("login-failure", {
  windowMs: 10 * 60 * 1000,
  maxHits: 5,
  blockMs: 15 * 60 * 1000,
});

const buildRateLimitResponse = (retryAfterSeconds: number) => {
  const response = NextResponse.json(
    { error: `登录失败次数过多，请 ${retryAfterSeconds} 秒后再试。` },
    { status: 429 }
  );

  response.headers.set("Retry-After", String(retryAfterSeconds));
  return response;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const username = typeof body.username === "string" ? body.username.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const ipAddress = getClientIp(request);
    const loginKey = `${ipAddress}:${username.toLowerCase() || "anonymous"}`;

    const currentLimit = loginFailureLimiter.check(loginKey);

    if (!currentLimit.allowed) {
      return buildRateLimitResponse(currentLimit.retryAfterSeconds);
    }

    if (!username || !password) {
      return NextResponse.json({ error: "用户名和密码不能为空。" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      const limitResult = loginFailureLimiter.hit(loginKey);
      if (!limitResult.allowed) {
        return buildRateLimitResponse(limitResult.retryAfterSeconds);
      }
      return NextResponse.json({ error: "用户名或密码错误。" }, { status: 401 });
    }

    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      const limitResult = loginFailureLimiter.hit(loginKey);
      if (!limitResult.allowed) {
        return buildRateLimitResponse(limitResult.retryAfterSeconds);
      }
      return NextResponse.json({ error: "用户名或密码错误。" }, { status: 401 });
    }

    loginFailureLimiter.reset(loginKey);

    const token = await createToken(user.id, user.username);

    const response = NextResponse.json(
      { message: "登录成功。", username: user.username },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "登录失败，请稍后重试。" }, { status: 500 });
  }
}
