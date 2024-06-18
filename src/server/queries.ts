import "server-only";
import { db } from "./db";
import { type User } from "@/lib/types";

export async function getAllUsers(): Promise<User[]> {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch users:", error.message);
      throw new Error("Unable to fetch users: " + error.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}
