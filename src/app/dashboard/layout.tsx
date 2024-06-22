import NewTaskForm from "@/components/NewTaskForm";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
