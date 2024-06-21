import NewTaskForm from "@/components/NewTaskForm";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <div>
        <NewTaskForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
