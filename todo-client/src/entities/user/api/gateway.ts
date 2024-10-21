import {applyDecoder} from "../../../shared/lib";
import {userDecoder, usersDecoder} from "./decoders";
import {User} from "../interfaces";
import {UsersPermissionsUsersRolesOpenApi} from "../../../api";

export class UserApi {

  public static async getUsers(): Promise<User[]> {
    return await UsersPermissionsUsersRolesOpenApi.getUsers().then(applyDecoder(usersDecoder))
  }

  public static async getUser(id: number): Promise<User> {
    return await UsersPermissionsUsersRolesOpenApi.getUsers1({id: String(id)}).then(applyDecoder(userDecoder))
  }
}