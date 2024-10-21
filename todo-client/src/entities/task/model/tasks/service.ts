import { TaskApi } from "../../api";
import type { Task } from "../../interfaces";

import { TasksModel } from "./model";

export abstract class TasksService {
  protected _sortTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.id - b.id);
  }
}

export class TasksLoaderService extends TasksService {
  protected _tasksModel: TasksModel | null = null;

  public get tasks(): TasksModel | null {
    return this._tasksModel;
  }
  public async loadTasks(): Promise<void> {
    const tasks = await TaskApi.getTasks();
    this._tasksModel = new TasksModel(tasks.data);
  }
}

export const tasksLoaderService = new TasksLoaderService();
