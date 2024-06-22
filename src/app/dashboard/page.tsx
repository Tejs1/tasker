import TaskList from "@/components/TaskList";
import { getTask } from "@/server/actions";

const tasksPage = async () => {
  const tasks = await getTask();
  if (Array.isArray(tasks)) {
    console.log(tasks);
    return (
      <div>
        <TaskList tasks={tasks} />
      </div>
    );
  } else {
    console.error(tasks.error);
    return <div>{tasks.error}</div>;
  }
};

export default tasksPage;
