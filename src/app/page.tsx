import Link from "next/link";
import { fetchAllUsers } from "@/lib/api";

export default async function HomePage() {
  const users = await fetchAllUsers();
  console.log(users, "users");
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
