import { tasksCreatorService } from "../../services";

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
      await tasksCreatorService.createTask({
        title,
        user,
        completed: false,
      });
      onSuccess();
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
