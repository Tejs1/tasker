import NewTaskForm from "@/components/NewTaskForm";
import TaskPage from "@/components/TaskPage";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function HomePage() {
  return (
    <div className="flex  w-screen flex-col items-center justify-center">
      <SignedIn>
        <div className="flex flex-col items-center justify-center">
          <h1>Tasks</h1>
        </div>
        <NewTaskForm />
        <TaskPage />
      </SignedIn>
      <SignedOut>
        <div>
          <h1>Sign In to Continue</h1>
        </div>
      </SignedOut>
    </div>
  );
}
