"use client";
import { deleteTask, updateTask } from "@/server/actions";
// import { useTransition } from "react";
import type { Task } from "@/lib/types";
import { Trash2 } from "lucide-react";
import { TableCell, TableRow } from "./ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaskComponent = ({ task }: { task: Task }) => {
  const handleChange = async (value: string) => {
    await updateTask(task.id, value);
  };
  const handleClick = async () => {
    await deleteTask(task.id);
  };
  // const [startTransition] = useTransition();
  // const handleCompleteTask = async (taskId: string) => {
  //   try {
  //     await completeTask(taskId);
  //   } catch (error) {
  //     console.error("Error completing task:", error);
  //   }
  // };
  return (
    <TableRow className="grid  grid-cols-[1fr_0.25fr_40px]">
      <TableCell
        className={`cursor-pointer  border border-black/25 px-8 py-2 align-middle  text-lg ${
          task.status === "Done" ? "text-black/30 line-through" : ""
        }`}
      >
        {task.title}
      </TableCell>
      <TableCell>
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={task.status} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="Todo">Todo</SelectItem>
              <SelectItem value="Backlog">Backlog</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
              <SelectItem value="Canceled">Canceled</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell>
        <Trash2
          className="cursor-pointer"
          onClick={async () => {
            await handleClick();
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskComponent;
