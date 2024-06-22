"use client";
import { completeTask, deleteTask } from "@/server/actions";
import { useTransition } from "react";
import type { Task } from "@/lib/types";
import { Trash2 } from "lucide-react";
import { TableCell, TableRow } from "./ui/table";

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
      {/* //delete task */}

      <TableRow className="grid  grid-cols-[1fr_40px]">
        <TableCell className="">
          <div className="font-medium">
            <div
              className={`cursor-pointer border border-black/25 px-8 py-2 ${
                task.completed ? "text-black/30 line-through" : ""
              }`}
              onClick={() => startTransition(() => handleCompleteTask(task.id))}
            >
              {task.title}
            </div>
          </div>
        </TableCell>

        <TableCell className="text-right">
          <Trash2
            onClick={() => {
              startTransition(async () => {
                await deleteTask(task.id);
              });
            }}
          />
        </TableCell>
      </TableRow>
    </div>
  );
};

export default TaskComponent;
