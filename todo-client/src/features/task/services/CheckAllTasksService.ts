import { TaskApi, tasksLoaderService, TasksService, type UpdateTaskDto } from "../../../entities/task";

export class TasksCheckerService extends TasksService {
  public async markAll(value: boolean): Promise<void> {
    const promises: Promise<unknown>[] = [];

    tasksLoaderService.tasks?.state.map((task) => {
      const newTask: UpdateTaskDto = {
        title: task.title,
        completed: value,
        user: task.user.id,
      };
      promises.push(TaskApi.updateTask(task.documentId, newTask));
    });

    await Promise.all(promises);
    tasksLoaderService.tasks?.set(
      this._sortTasks(tasksLoaderService.tasks.state.map((task) => ({ ...task, completed: value }))),
    );
  }
}

export const tasksCheckerService = new TasksCheckerService();
