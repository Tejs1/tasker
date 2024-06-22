import TaskList from "@/components/TaskList";
import { type Task, type Status } from "@/lib/types";
import { getTask } from "@/server/actions";

const TaskPage = async () => {
  const tasks:
    | { id: string; title: string; status: string; clerkId: string }[]
    | { error: string } = await getTask();

  if (Array.isArray(tasks)) {
    const typedTasks: Task[] = tasks.map((task) => ({
      ...task,
      status: task.status as Status,
    }));

    return <TaskList tasks={typedTasks} />;
  } else {
    console.error(tasks.error);
    return <div>{tasks.error}</div>;
  }
};

export default TaskPage;
