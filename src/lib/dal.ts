import "server-only";
import { redirect } from "next/navigation";
import { getSession } from "./session-token-auth";

export async function verifyUserSession() {
  const session = await getSession();

  if (!session?.userId) {
    redirect("/login");
  }

  return session;
}

export async function verifyAdminSession() {
  const session = await getSession();

  if (!session?.userId) {
    redirect("/login");
  }

  if (session.role !== "admin") {
    redirect("/admin");
  }

  return session;
}
