export type User = {
  id: string;
  email: string;
  name: string | null;
};

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  clerkId: string;
};
