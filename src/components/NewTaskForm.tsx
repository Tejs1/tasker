"use server";
import { newTask } from "@/server/queries";

const NewTaskForm: React.FC = () => {
  return (
    <div>
      <form action={newTask}>
        <input type="text" name="task" className="border border-black" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
