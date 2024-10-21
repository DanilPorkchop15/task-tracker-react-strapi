export interface CreateTaskDto {
  title: string;
  completed: boolean;
  user: number
}

export interface UpdateTaskDto extends CreateTaskDto {}