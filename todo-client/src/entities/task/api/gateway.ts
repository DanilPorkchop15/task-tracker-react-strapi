import {applyResponseDecoder} from "../../../shared/lib";
import {CreateTaskDto, Task, UpdateTaskDto} from "../interfaces";
import {ResponseBody} from "../../../shared/model";
import {taskDecoder} from "./decoders";
import {TodoOpenApi} from "../../../api";

export class TaskApi {
  public static async getTasks(): Promise<ResponseBody<Task>> {
    return await TodoOpenApi.getTodos({}).then(applyResponseDecoder(taskDecoder))
  }

  public static async getTask(id: string): Promise<ResponseBody<Task>> {
    return await TodoOpenApi.getTodosId({id}).then(applyResponseDecoder(taskDecoder))
  }

  public static async deleteTask(id: string): Promise<void> {
    await TodoOpenApi.deleteTodosId({id})
  }

  public static async createTask(task: CreateTaskDto): Promise<ResponseBody<Task>> {
    return await TodoOpenApi.postTodos({requestBody: {data: task}}).then(applyResponseDecoder(taskDecoder))
  }

  public static async updateTask(id: string, task: UpdateTaskDto): Promise<ResponseBody<Task>> {
    return await TodoOpenApi.putTodosId({id, requestBody: {data: task}}).then(applyResponseDecoder(taskDecoder))
  }
}