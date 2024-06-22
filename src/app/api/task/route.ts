// import { db } from "@/server/db";
// import { type NextRequest, NextResponse } from "next/server";
// import { z } from "zod";
// import { revalidatePath } from "next/cache";

// export async function GET(request: NextRequest) {
//   const userId = request.headers.get("user-id") ?? ""; // Assume user-id is passed in headers

//   try {
//     const tasks = await db.task.findMany({
//       where: { clerkId: userId },
//     });
//     return NextResponse.json(tasks);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Failed to fetch tasks:", error.message);
//       return NextResponse.json(
//         { error: "Unable to fetch tasks: " + error.message },
//         { status: 500 },
//       );
//     } else {
//       console.error("Unexpected error:", error);
//       return NextResponse.json(
//         { error: "An unexpected error occurred" },
//         { status: 500 },
//       );
//     }
//   }
// }

// export async function POST(request: NextRequest) {
//   const userId = request.headers.get("user-id") ?? "user"; // Assume user-id is passed in headers
//   const data = await request.formData();
//   const newTask = data.get("task") as string;

//   try {
//     await db.task.create({
//       data: {
//         title: newTask,
//         clerkId: userId,
//       },
//     });
//     revalidatePath("/dashboard");
//     return NextResponse.json(
//       { message: "Task created successfully" },
//       { status: 201 },
//     );
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Failed to create task: 125", error.message);
//       return NextResponse.json(
//         { error: "Unable to create task: " + error.message },
//         { status: 500 },
//       );
//     } else {
//       console.error("Unexpected error:", error);
//       return NextResponse.json(
//         { error: "An unexpected error occurred" },
//         { status: 500 },
//       );
//     }
//   }
// }
