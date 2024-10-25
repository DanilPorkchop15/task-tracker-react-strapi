import type { Request } from "shared/model";

import type { CreateTaskDto, UpdateTaskDto } from "./request.dto";

export type CreateTaskRequest = Request<{ body: CreateTaskDto }>;
export type UpdateTaskRequest = Request<{ body: UpdateTaskDto }>;
