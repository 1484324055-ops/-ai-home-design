import { NextRequest } from "next/server";
import { getAuthenticatedUser } from "./session";

const normalize = (value: string | null | undefined) => value?.trim().toLowerCase() || "";

export const isAdminUsername = (username: string | null | undefined) => {
  const configuredAdmin = normalize(process.env.ADMIN_USERNAME);

  if (!configuredAdmin) {
    return false;
  }

  return normalize(username) === configuredAdmin;
};

export const getAdminUserFromRequest = async (request: NextRequest) => {
  const authUser = await getAuthenticatedUser(request);

  if (!authUser || !isAdminUsername(authUser.username)) {
    return null;
  }

  return authUser;
};
