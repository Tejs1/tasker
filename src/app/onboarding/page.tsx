"use server";

import { db } from "@/server/db";
import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

const createNewUser = async (name: string) => {
  // const searchParams = request.nextUrl.searchParams
  // const name = searchParams.get("name")
  console.log(name);

  const user = await currentUser();
  // timeoout
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  if (user) {
    try {
      const match = await db.user.findUnique({
        where: {
          clerkId: user.id,
        },
      });

      if (!match) {
        await db.user.create({
          data: {
            clerkId: user.id,
            email: user.emailAddresses[0]?.emailAddress ?? "nomail@email.com",
            name: name ? decodeURI(name) : "User2",
          },
        });
        console.log("user created");
      }
    } catch (error) {
      console.error(error);
    }

    redirect("/");
  } else {
    redirect("/");
  }
};

const NewUser = async ({
  searchParams,
}: {
  searchParams: { name: string };
}) => {
  await createNewUser(searchParams.name || "User");
  return <div>...loading</div>;
};

export default NewUser;
