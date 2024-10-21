import { isNil } from "ramda";

import type { TasksModel } from "./model";
import { tasksLoaderService } from "./service";

export function useTasks(): TasksModel {
  const tasks = tasksLoaderService.tasks;

  if (isNil(tasks)) throw new Error("tasks not found");

  return tasks;
}
