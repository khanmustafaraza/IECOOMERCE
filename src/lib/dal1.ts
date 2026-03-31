import "server-only";
import { redirect } from "next/navigation";
import { getDatabaseSession } from "@/lib/session-db";

export async function verifyUserSession() {
  const session = await getDatabaseSession();

  if (!session?.userId) {
    redirect("/login");
  }

  return session;
}

export async function verifyAdminSession() {
  const session = await getDatabaseSession();

  if (!session?.userId) {
    redirect("/login");
  }

  const user = session.userId as any;

  if (user.role !== "admin") {
    redirect("/dashboard");
  }

  return session;
}
