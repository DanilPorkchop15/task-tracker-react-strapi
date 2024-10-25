import type { User } from "entities/user";

export class UserSelectService {
  private readonly users: User[];
  private readonly _onSelect: (userId: number) => void;

  constructor(users: User[], onSelect: (userId: number) => void) {
    this.users = users;
    this._onSelect = onSelect;
  }

  public selectUser(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (user) {
      this._onSelect(user.id);
    }
  }
}
