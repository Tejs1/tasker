import { type Task } from "@prisma/client";
import TaskComponent from "./TaskComponent";

const TodoList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
