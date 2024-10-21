import { tasksService } from "entities/task";

import { NewTaskButtonStyled } from "./CreateTaskStyled";

interface CreateTaskProps {
  title: string;
  user: number;
  disabled?: boolean;
  onSuccess: () => void;
}

export const CreateTaskFeature = ({ disabled, title, user, onSuccess }: CreateTaskProps) => {
  const handleAdd = async () => {
    if (title && user) {
      await tasksService.createTask({
        title,
        user,
        completed: false,
      });
      onSuccess()
    } else {
      alert("Введите текст и автора заметки!");
    }
  };

  return (
    <NewTaskButtonStyled disabled={disabled} onClick={handleAdd}>
      Add task
    </NewTaskButtonStyled>
  );
};
