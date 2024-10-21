import { isNil } from "ramda";

import { TaskApi, tasksLoaderService, TasksService, type UpdateTaskDto } from "entities/task";

export class TasksUpdaterService extends TasksService {
  public async updateTask(id: string, task: UpdateTaskDto): Promise<void> {
    const res = await TaskApi.updateTask(id, task);

    const taskUpdated = res.data.find((t) => t.documentId === id);

    if (isNil(taskUpdated)) {
      return;
    }

    tasksLoaderService.tasks?.set(
      this._sortTasks([...tasksLoaderService.tasks.state.filter((t) => t.documentId !== id), taskUpdated]),
    );
  }
}

export const tasksUpdaterService = new TasksUpdaterService();
