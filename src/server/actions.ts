"use server";
import { db } from "@/server/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getUser() {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch users:", error.message);
      return { error: "Unable to fetch users: " + error.message };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  }
}

export async function getTask() {
  try {
    const user = await currentUser();
    const tasks = await db.task.findMany({
      where: { clerkId: user?.id },
    });
    return tasks;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch tasks:", error.message);
      return { error: "Unable to fetch tasks: " + error.message };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  }
}

export async function createTask(task: string) {
  try {
    const user = await currentUser();
    await db.task.create({
      data: {
        title: task,
        clerkId: user?.id ? user.id : "user",
        status: "todo",
      },
    });
    revalidatePath("/dashboard");
    return { message: "Task created successfully" };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to create task:", error.message);
      return { error: "Unable to create task: " + error.message };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  }
}
// complete task
export async function completeTask(taskId: string) {
  try {
    await db.task.update({
      where: { id: taskId },
      data: { status: "done" },
    });
    revalidatePath("/dashboard");
    return { message: "Task completed successfully" };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to complete task:", error.message);
      return { error: "Unable to complete task: " + error.message };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  }
}
// delete task
export async function deleteTask(taskId: string) {
  try {
    await db.task.delete({
      where: { id: taskId },
    });
    revalidatePath("/dashboard");
    return { message: "Task deleted successfully" };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to delete task:", error.message);
      return { error: "Unable to delete task: " + error.message };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  }
}
// update task
export async function updateTask(taskId: string, status?: string) {
  try {
    await db.task.update({
      where: { id: taskId },
      data: { status: status },
    });
    revalidatePath("/dashboard");
    return { message: "Task updated successfully" };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to update task:", error.message);
      return { error: "Unable to update task: " + error.message };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  }
}
