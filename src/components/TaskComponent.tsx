"use client";
import { completeTask } from "@/server/queries";
import { useTransition } from "react";
import type { Task } from "@/lib/types";

const TaskComponent = ({ task }: { task: Task }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`cursor-pointer border border-black/25 px-8 py-2 ${
        task.completed ? "text-black/30 line-through" : ""
      }`}
      onClick={() => startTransition(() => completeTask(task.id))}
    >
      {task.title}
    </div>
  );
};

export default TaskComponent;
