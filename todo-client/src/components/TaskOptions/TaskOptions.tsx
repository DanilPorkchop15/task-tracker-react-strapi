import { ChangeEvent, FC, useState } from "react";

import { tasksService } from "../../entities/task";

import {
  MarkAllButtonStyled,
  NewTaskButtonStyled,
  NewTaskInputStyled,
  TaskOptionsBlockStyled,
  TaskOptionsStyled,
  TaskOptionsUserSelectStyled,
  UnmarkAllButtonStyled,
} from "./TaskOptionsStyled";

const TaskOptions: FC = () => {
  const [value, setValue] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null);

  const handleAdd = async () => {
    if (value.length > 0 && userId) {
      await tasksService.createTask({
        title: value,
        user: userId,
        completed: false,
      });
      setValue("");
    } else {
      alert("Введите текст и автора заметки!");
    }
  };

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setValue(e.target.value);
  };

  const handleSelect: (userId: number) => void = (userId) => {
    setUserId(userId);
  };

  return (
    <TaskOptionsStyled>
      <TaskOptionsBlockStyled>
        <NewTaskInputStyled placeholder="Enter new task..." type="text" value={value} onChange={handleChange} />
        <TaskOptionsUserSelectStyled onSelect={handleSelect} />
        <NewTaskButtonStyled disabled={!userId || value.length === 0} onClick={handleAdd}>
          Add task
        </NewTaskButtonStyled>
      </TaskOptionsBlockStyled>

      <TaskOptionsBlockStyled>
        <MarkAllButtonStyled $success onClick={async () => tasksService.markAll(true)}>
          Check all
        </MarkAllButtonStyled>
        <UnmarkAllButtonStyled $danger onClick={async () => tasksService.markAll(false)}>
          Uncheck all
        </UnmarkAllButtonStyled>
      </TaskOptionsBlockStyled>
    </TaskOptionsStyled>
  );
};

export default TaskOptions;
