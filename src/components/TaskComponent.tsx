"use client";
import { completeTask, deleteTask } from "@/server/actions";
import { useTransition } from "react";
import type { Task } from "@/lib/types";

const TaskComponent = ({ task }: { task: Task }) => {
  const [isPending, startTransition] = useTransition();
  const handleCompleteTask = async (taskId: string) => {
    try {
      await completeTask(taskId);
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };
  return (
    <div>
      <div
        className={`cursor-pointer border border-black/25 px-8 py-2 ${
          task.completed ? "text-black/30 line-through" : ""
        }`}
        onClick={() => startTransition(() => handleCompleteTask(task.id))}
      >
        {task.title}
      </div>
      {/* //delete task */}
      <button
        onClick={() => {
          startTransition(async () => {
            await deleteTask(task.id);
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskComponent;
