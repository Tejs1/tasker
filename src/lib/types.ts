export type User = {
  id: string;
  email: string;
  name: string | null;
};

export type Task = {
  id: string;
  title: string;
  status: Status;
  clerkId: string;
};
export type Status = "Todo" | "Pending" | "Done" | "Backlog" | "Canceled";
