import { NextRequest } from "next/server";
import { verifyToken } from "./auth";

export const getAuthenticatedUser = async (request: NextRequest) => {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
};
