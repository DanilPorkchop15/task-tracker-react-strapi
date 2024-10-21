import { TaskApi, tasksLoaderService, TasksService, type UpdateTaskDto } from "entities/task";

export class TasksUpdaterService extends TasksService {
  public async updateTask(id: string, task: UpdateTaskDto): Promise<void> {
    const res = await TaskApi.updateTask(id, task);
    tasksLoaderService.tasks?.set(
      this._sortTasks(res.data),
    );
  }
}

export const tasksUpdaterService = new TasksUpdaterService();
