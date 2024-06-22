"use client";
import { useState } from "react";
import { createTask } from "@/server/actions";

const NewTaskForm: React.FC = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTask(task);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="border border-black"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
