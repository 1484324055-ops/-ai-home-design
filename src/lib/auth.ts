import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const secret = new TextEncoder().encode(SECRET_KEY);

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export const createToken = async (userId: number, username: string): Promise<string> => {
  return new SignJWT({ userId, username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);
};

export const verifyToken = async (token: string): Promise<{ userId: number; username: string } | null> => {
  try {
    const { payload } = await jwtVerify(token, secret, { clockTolerance: 60 });
    return { userId: payload.userId as number, username: payload.username as string };
  } catch {
    return null;
  }
};
