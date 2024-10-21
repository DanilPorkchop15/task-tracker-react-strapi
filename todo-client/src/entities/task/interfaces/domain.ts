import {User} from "../../user/@x";

export type Task = {
  id: number;
  documentId: string;
  title: string;
  completed: boolean;
  user: User;
};
