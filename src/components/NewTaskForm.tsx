"use client";
import { type SetStateAction, useState } from "react";
import { createTask } from "@/server/actions";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewTaskForm: React.FC = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTask(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-4 flex w-full max-w-screen-sm flex-row items-center justify-center"
    >
      <div className="flex w-full flex-row items-center space-x-2">
        <Input
          type="text"
          name="task"
          className="w-full border  border-black"
          value={task}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setTask(e.target.value)
          }
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default NewTaskForm;
