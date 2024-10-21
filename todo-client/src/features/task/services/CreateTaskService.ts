import { type CreateTaskDto, TaskApi, tasksLoaderService, TasksService } from "entities/task";

export class TasksCreatorService extends TasksService {
  public async createTask(task: CreateTaskDto): Promise<void> {
    const res = await TaskApi.createTask(task);
    tasksLoaderService.tasks?.set(this._sortTasks(res.data.length !== 0 ? res.data : tasksLoaderService.tasks.state));
  }
}

export const tasksCreatorService = new TasksCreatorService();
