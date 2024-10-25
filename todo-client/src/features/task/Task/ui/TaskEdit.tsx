import { FC, FormEvent, useEffect, useRef, useState } from "react";

import type { Task } from "entities/task";

import { Button } from "shared/ui";

import { tasksUpdaterService } from "../../services";

import { TaskEditFormStyled, TaskEditInputStyled, TaskLabelStyled, TaskUserSelectStyled } from "./TaskEditStyled";

interface TaskEditProps {
  task: Task;
  username: string | null;
}

const TaskEdit: FC<TaskEditProps> = ({ task }) => {
  const [userId, setUserId] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = task.title;
    }
  }, []); // eslint-disable-line

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    if (!inputElement) {
      return;
    }
    const newTitle = inputElement.value;
    await tasksUpdaterService.updateTask(task.documentId, { title: newTitle, user: userId, completed: task.completed });
  };

  const handleSelect = (id: number) => {
    setUserId(id);
  };

  return (
    <TaskEditFormStyled onSubmit={handleEdit}>
      <TaskLabelStyled htmlFor="newTitle">
        New title
        <TaskEditInputStyled ref={inputRef} name="newTitle" placeholder="Enter new task..." type="text" />
      </TaskLabelStyled>
      <TaskLabelStyled>
        Author
        <TaskUserSelectStyled defaultValue={task.user.id} onSelect={handleSelect} />
      </TaskLabelStyled>
      <Button type="submit">Edit</Button>
    </TaskEditFormStyled>
  );
};

export default TaskEdit;
