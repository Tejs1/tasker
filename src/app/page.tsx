import Link from "next/link";
import { getAllUsers } from "@/server/queries";

export default async function HomePage() {
  const users = await getAllUsers();
  return (
    // cretae a new page
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
