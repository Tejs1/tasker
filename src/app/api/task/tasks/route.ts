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
//     console.log("tasks", tasks);
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
