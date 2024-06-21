import TaskList from "@/components/TaskList";
import { db } from "@/server/db";

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const tasks = await db.task.findMany();

  return tasks;
};

const tasksPage = async () => {
  const tasks = await getData();
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default tasksPage;
