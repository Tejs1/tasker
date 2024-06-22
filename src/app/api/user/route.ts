// "use server";
// import { db } from "@/server/db";
// import { type User } from "@/lib/types";
// import { type NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest): Promise<NextResponse> {
//   try {
//     const users: User[] = await db.user.findMany();
//     return NextResponse.json(users);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Failed to fetch users:", error.message);
//       return NextResponse.json(
//         { error: "Unable to fetch users: " + error.message },
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
// //
