import {TasksModel} from "./model";
import {TaskApi} from "../../api";
import {CreateTaskDto, Task, UpdateTaskDto} from "../../interfaces";

export class TasksService {
  private _tasksModel: TasksModel | null = null;

  public get tasks(): TasksModel | null {
    return this._tasksModel;
  }

  public async loadTasks(): Promise<void> {
    const tasks = await TaskApi.getTasks();
    this._tasksModel = new TasksModel(tasks.data);
  }

  public async deleteTask(id: string): Promise<void> {
    await TaskApi.deleteTask(id);
    this._tasksModel?.set(TasksService._sortTasks([...this._tasksModel.state.filter(task => task.documentId !== id)]));
  }

  public async createTask(task: CreateTaskDto): Promise<void> {
    const taskCreatedId = await TaskApi.createTask(task);
    this._tasksModel?.set(TasksService._sortTasks(taskCreatedId.data));
  }

  public async updateTask(id: string, task: UpdateTaskDto): Promise<void> {
    const taskUpdated = await TaskApi.updateTask(id, task);
    this._tasksModel?.set(TasksService._sortTasks([...this._tasksModel.state.filter(task => task.documentId !== id), taskUpdated.data[0]]));
  }

  public getTaskFromList(id: string): Task | null {
    return this._tasksModel?.state.find(task => task.documentId === id) || null;
  }

  public async markAll(value: boolean): Promise<void> {
    const promises: Promise<unknown>[] = []

    this._tasksModel?.state.map(task => {
      const newTask: UpdateTaskDto = {
        title: task.title,
        completed: value,
        user: task.user.id
      }
      promises.push(TaskApi.updateTask(task.documentId, newTask));
    });

    await Promise.all(promises);
    this._tasksModel?.set(TasksService._sortTasks(this._tasksModel.state.map(task => ({...task, completed: value}))));
  }

  private static _sortTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.id - b.id)
  }
}

export const tasksService = new TasksService()