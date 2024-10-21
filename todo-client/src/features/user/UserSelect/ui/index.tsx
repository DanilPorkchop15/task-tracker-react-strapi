import React, { FC, useEffect } from "react";

import { useUsers } from "entities/user";

import { UserSelectService } from "../../services";

import { SelectStyled } from "./TaskUserSelectStyled";

interface UserSelectProps {
  onSelect: (userId: number) => void;
  defaultValue?: string | null;
  className?: string | null;
}

export const UserSelect: FC<UserSelectProps> = ({ onSelect, defaultValue, className }) => {
  const users = useUsers();
  const service = new UserSelectService(users.state, onSelect);

  useEffect(() => {
    service.selectUser(defaultValue ?? "");
  }, []); // eslint-disable-line

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    service.selectUser(e.target.value);
  };

  return (
    <SelectStyled className={className ? className : ""} name="selectUser" onChange={handleSelect}>
      <option disabled value="default">
        Select user
      </option>
      {users.state.map((user) => (
        <option key={user.id} value={user.id}>
          User: {user.username}
        </option>
      ))}
    </SelectStyled>
  );
};
