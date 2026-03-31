import "server-only";
import { redirect } from "next/navigation";
import { getTokenSession } from "@/lib/session-token";

export async function verifyUserSession() {
  const session = await getTokenSession();

  if (!session?.userId) {
    redirect("/login");
  }

  return session;
}

export async function verifyAdminSession() {
  const session = await getTokenSession();

  if (!session?.userId) {
    redirect("/login");
  }

  if (session.role !== "admin") {
    redirect("/dashboard");
  }

  return session;
}
