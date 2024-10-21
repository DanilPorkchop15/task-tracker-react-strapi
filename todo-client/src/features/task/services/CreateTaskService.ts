import { type CreateTaskDto, TaskApi, tasksLoaderService, TasksService } from "entities/task";

export class TasksCreatorService extends TasksService {
  public async createTask(task: CreateTaskDto): Promise<void> {
    const taskCreatedId = await TaskApi.createTask(task);
    tasksLoaderService.tasks?.set(this._sortTasks([...tasksLoaderService.tasks.state, taskCreatedId.data[0]]));
  }
}

export const tasksCreatorService = new TasksCreatorService();
