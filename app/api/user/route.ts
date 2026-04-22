import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { isAdminUsername } from "@/lib/admin";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "未登录。" }, { status: 401 });
    }

    const payload = await verifyToken(token);

    if (!payload) {
      return NextResponse.json({ error: "登录已过期，请重新登录。" }, { status: 401 });
    }

    return NextResponse.json(
      { username: payload.username, isAdmin: isAdminUsername(payload.username) },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json({ error: "获取用户信息失败。" }, { status: 500 });
  }
}
