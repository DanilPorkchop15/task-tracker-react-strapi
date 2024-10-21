import { UsersPermissionsUsersRolesOpenApi } from "api";

import { applyDecoder } from "shared/lib";

import type { User } from "../interfaces";

import { userDecoder, usersDecoder } from "./decoders";

export class UserApi {
  public static async getUsers(): Promise<User[]> {
    return UsersPermissionsUsersRolesOpenApi.getUsers().then(applyDecoder(usersDecoder));
  }

  public static async getUser(id: number): Promise<User> {
    return UsersPermissionsUsersRolesOpenApi.getUsers1({ id: String(id) }).then(applyDecoder(userDecoder));
  }
}
