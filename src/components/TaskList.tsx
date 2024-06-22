import { type Task } from "@prisma/client";
import TaskComponent from "./TaskComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
const TodoList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <Table className="m-auto max-w-screen-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="hidden xl:table-column">Name</TableHead>
          {/* <TableHead className="hidden xl:table-column">Status</TableHead> */}
          <TableHead className="hidden xl:table-column">Delete</TableHead>
        </TableRow>
      </TableHeader>
      {tasks.map((task) => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </Table>
  );
};

export default TodoList;
