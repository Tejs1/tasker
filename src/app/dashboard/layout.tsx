import NewTaskForm from "@/components/NewTaskForm";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  w-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1>Tasks</h1>
      </div>
      <NewTaskForm />
      {children}
    </div>
  );
};

export default DashboardLayout;
