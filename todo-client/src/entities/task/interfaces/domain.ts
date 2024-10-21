import type { User } from "entities/user/@x";

export interface Task {
  id: number;
  documentId: string;
  title: string;
  completed: boolean;
  user: User;
}
