"use server";
import { db } from "./db";
import { type User } from "@/lib/types";
import { revalidatePath } from "next/cache";

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

export const newTask = async (data: FormData) => {
  const newTask = data.get("task") as string;

  if (newTask) {
    await db.task.create({
      data: {
        title: newTask,
        authorId: "6671867fd293ba6e574831b3",
        slug: newTask.toLowerCase().replace(" ", "-"),
      },
    });
    revalidatePath("/dashboard");
  }
};

export const getAllTasks = async (userId: string) => {
  const tasks = await db.task.findMany({
    where: {
      authorId: userId,
    },
  });

  return tasks;
};

export const completeTask = async (id: string) => {
  await db.task.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};
