import React, { FC, useEffect, useState } from "react";

import { User, usersService } from "entities/user";

import { SelectStyled } from "./TaskUserSelectStyled";

interface UserSelectProps {
  onSelect: (userId: number) => void;
  defaultValue?: string | null;
  className?: string | null;
}

export const UserSelect: FC<UserSelectProps> = ({ onSelect, defaultValue, className }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const defaultValueUser = usersService.users?.state.find((user) => user.username === defaultValue);
    if (defaultValueUser) {
      setSelectedUser(defaultValueUser);
      onSelect(defaultValueUser.id);
    }
  }, []); // eslint-disable-line

  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const u = usersService.users?.state.find((user) => user.id === +e.target.value);
    setSelectedUser(u ?? null);
    onSelect(+e.target.value);
  };

  return (
    <SelectStyled
      className={className ? className : ""}
      name="selectUser"
      value={selectedUser?.id ?? "default"}
      onChange={handleSelect}
    >
      <option disabled value="default">
        Select user
      </option>
      {usersService.users ? (
        usersService.users.state.map((user) => (
          <option key={user.id} value={user.id}>
            User: {user.username}
          </option>
        ))
      ) : (
        <option value="loading">loading...</option>
      )}
    </SelectStyled>
  );
};
