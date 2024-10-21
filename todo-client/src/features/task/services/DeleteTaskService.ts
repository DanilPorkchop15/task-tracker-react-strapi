import { TaskApi, tasksLoaderService, TasksService } from "entities/task";

export class TasksDeleterService extends TasksService {
  public async deleteTask(id: string): Promise<void> {
    await TaskApi.deleteTask(id);
    tasksLoaderService.tasks?.set(
      this._sortTasks([...tasksLoaderService.tasks.state.filter((task) => task.documentId !== id)]),
    );
  }
}

export const tasksDeleterService = new TasksDeleterService();
