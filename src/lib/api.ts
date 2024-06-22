// import { revalidatePath } from "next/cache";
// export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
// const createURL = (path: string) => BASE_URL + path;
// export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// import { currentUser } from "@clerk/nextjs/server";

// export async function fetchAllUsers() {
//   try {
//     const response = await fetch(
//       new Request(createURL("/api/user"), {
//         method: "GET",
//       }),
//     );
//     if (!response.ok) {
//       throw new Error(`Error fetching users: ${response.statusText}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Failed to fetch users:", error);
//     throw error;
//   }
// }

// export async function fetchAllTasks(userId: string) {
//   try {
//     const user = await currentUser();
//     console.log("userrr2", user?.id);
//     const response = await fetch(`${BASE_URL}/task/tasks`, {
//       headers: { "user-id": user?.id ?? "" },
//     });
//     if (!response.ok) {
//       // if (response.status === 404) return [];
//       throw new Error(
//         `Error fetching tasks: ${(response.statusText, response.status)}`,
//       );
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Failed to fetch tasks:", error);
//     throw error;
//   }
// }

// export async function createNewTask(task: string) {
//   // const newTask = formData.get("task") as string;
//   const formData = new FormData();
//   formData.append("task", task);
//   console.log("formData1", formData);
//   try {
//     const user = await currentUser();
//     console.log("user1", user?.id);
//     const response = await fetch(`${BASE_URL}/task`, {
//       method: "POST",
//       headers: { "user-id": user?.id ?? "" },
//       body: formData,
//     });
//     if (!response.ok) {
//       throw new Error(
//         `Error creating task: ${(response.statusText, response.status)}`,
//       );
//     }
//     revalidatePath("/dashboard");
//     return response.json();
//   } catch (error) {
//     console.error("Failed to create task: 12", error);
//     throw error;
//   }
// }

// export async function markTaskAsComplete(taskId: string) {
//   try {
//     const response = await fetch(`${BASE_URL}/task?id=${taskId}`, {
//       method: "PUT",
//     });
//     if (!response.ok) {
//       throw new Error(`Error completing task: ${response.statusText}`);
//     }
//     revalidatePath("/todos");
//     return response.json();
//   } catch (error) {
//     console.error("Failed to complete task:", error);
//     throw error;
//   }
// }
