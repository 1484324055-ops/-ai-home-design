import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { createMemoryRateLimiter, getClientIp } from "@/lib/rate-limit";

const registerLimiter = createMemoryRateLimiter("register-attempts", {
  windowMs: 30 * 60 * 1000,
  maxHits: 4,
  blockMs: 30 * 60 * 1000,
});

const buildRateLimitResponse = (retryAfterSeconds: number) => {
  const response = NextResponse.json(
    { error: `注册操作太频繁了，请 ${retryAfterSeconds} 秒后再试。` },
    { status: 429 }
  );

  response.headers.set("Retry-After", String(retryAfterSeconds));
  return response;
};

export async function POST(request: NextRequest) {
  try {
    const ipAddress = getClientIp(request);
    const limitResult = registerLimiter.hit(ipAddress);

    if (!limitResult.allowed) {
      return buildRateLimitResponse(limitResult.retryAfterSeconds);
    }

    const body = await request.json();
    const username = typeof body.username === "string" ? body.username.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!username || !password) {
      return NextResponse.json({ error: "用户名和密码不能为空。" }, { status: 400 });
    }

    if (username.length < 3 || username.length > 20) {
      return NextResponse.json({ error: "用户名长度需要在 3 到 20 个字符之间。" }, { status: 400 });
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      return NextResponse.json(
        { error: "用户名只能包含字母、数字、下划线或短横线。" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "密码长度至少需要 6 位。" }, { status: 400 });
    }

    if (password.length > 128) {
      return NextResponse.json({ error: "密码长度不能超过 128 位。" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json({ error: "这个用户名已经被注册了。" }, { status: 409 });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "注册成功，正在带你去登录。", userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "注册失败，请稍后重试。" }, { status: 500 });
  }
}
