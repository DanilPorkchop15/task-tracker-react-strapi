import { ChangeEvent, FC, useState } from "react";

import { CheckAllTasksFeature, CreateTaskFeature } from "features/task";

import { useUsers } from "entities/user";

import {
  NewTaskInputStyled,
  TaskOptionsBlockStyled,
  TaskOptionsStyled,
  TaskOptionsUserSelectStyled,
} from "./TaskOptionsStyled";

export const TaskOptions: FC = () => {
  const [value, setValue] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null);
  const user = useUsers().state[0];

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (id: number) => {
    setUserId(id);
  };

  return (
    <TaskOptionsStyled>
      <TaskOptionsBlockStyled>
        <NewTaskInputStyled placeholder="Enter new task..." type="text" value={value} onChange={handleChange} />
        <TaskOptionsUserSelectStyled defaultValue={user.id} onSelect={handleSelect} />
        <CreateTaskFeature
          disabled={!userId || value.length === 0}
          title={value}
          user={userId ?? user.id}
          onSuccess={() => setValue("")}
        />
      </TaskOptionsBlockStyled>

      <TaskOptionsBlockStyled>
        <CheckAllTasksFeature />
        <CheckAllTasksFeature uncheck />
      </TaskOptionsBlockStyled>
    </TaskOptionsStyled>
  );
};
