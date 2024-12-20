/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from "../models/Error";
import type { Users_Permissions_PermissionsTree } from "../models/Users_Permissions_PermissionsTree";
import type { Users_Permissions_Role } from "../models/Users_Permissions_Role";
import type { Users_Permissions_User } from "../models/Users_Permissions_User";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class UsersPermissionsUsersRolesOpenApi {
  /**
   * Get default generated permissions
   * @returns any Returns the permissions tree
   * @returns Error Error
   * @throws ApiError
   */
  public static getUsersPermissionsPermissions(): CancelablePromise<
    | {
        permissions?: Users_Permissions_PermissionsTree;
      }
    | Error
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users-permissions/permissions",
    });
  }
  /**
   * List roles
   * @returns any Returns list of roles
   * @returns Error Error
   * @throws ApiError
   */
  public static getUsersPermissionsRoles(): CancelablePromise<
    | {
        roles?: Array<
          Users_Permissions_Role & {
            nb_users?: number;
          }
        >;
      }
    | Error
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users-permissions/roles",
    });
  }
  /**
   * Create a role
   * @returns any Returns ok if the role was create
   * @returns Error Error
   * @throws ApiError
   */
  public static postUsersPermissionsRoles({
    requestBody,
  }: {
    requestBody: {
      name?: string;
      description?: string;
      type?: string;
      permissions?: Users_Permissions_PermissionsTree;
    };
  }): CancelablePromise<
    | {
        ok?: string;
      }
    | Error
  > {
    return __request(OpenAPI, {
      method: "POST",
      url: "/users-permissions/roles",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * Get a role
   * @returns any Returns the role
   * @returns Error Error
   * @throws ApiError
   */
  public static getUsersPermissionsRoles1({
    id,
  }: {
    /**
     * role Id
     */
    id: string;
  }): CancelablePromise<
    | {
        role?: Users_Permissions_Role;
      }
    | Error
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users-permissions/roles/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * Update a role
   * @returns any Returns ok if the role was udpated
   * @returns Error Error
   * @throws ApiError
   */
  public static putUsersPermissionsRoles({
    role,
    requestBody,
  }: {
    /**
     * role Id
     */
    role: string;
    requestBody: {
      name?: string;
      description?: string;
      type?: string;
      permissions?: Users_Permissions_PermissionsTree;
    };
  }): CancelablePromise<
    | {
        ok?: string;
      }
    | Error
  > {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/users-permissions/roles/{role}",
      path: {
        role: role,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * Delete a role
   * @returns any Returns ok if the role was delete
   * @returns Error Error
   * @throws ApiError
   */
  public static deleteUsersPermissionsRoles({
    role,
  }: {
    /**
     * role Id
     */
    role: string;
  }): CancelablePromise<
    | {
        ok?: string;
      }
    | Error
  > {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/users-permissions/roles/{role}",
      path: {
        role: role,
      },
    });
  }
  /**
   * Get list of users
   * @returns Users_Permissions_User Returns an array of users
   * @returns Error Error
   * @throws ApiError
   */
  public static getUsers(): CancelablePromise<Array<Users_Permissions_User> | Error> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users",
    });
  }
  /**
   * Create a user
   * @returns Error Error
   * @returns any Returns created user info
   * @throws ApiError
   */
  public static postUsers({
    requestBody,
  }: {
    requestBody: {
      email: string;
      username: string;
      password: string;
    };
  }): CancelablePromise<
    | Error
    | (Users_Permissions_User & {
        role?: Users_Permissions_Role;
      })
  > {
    return __request(OpenAPI, {
      method: "POST",
      url: "/users",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * Get a user
   * @returns Users_Permissions_User Returns a user
   * @returns Error Error
   * @throws ApiError
   */
  public static getUsers1({
    id,
  }: {
    /**
     * user Id
     */
    id: string;
  }): CancelablePromise<Users_Permissions_User | Error> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * Update a user
   * @returns any Returns updated user info
   * @returns Error Error
   * @throws ApiError
   */
  public static putUsers({
    id,
    requestBody,
  }: {
    /**
     * user Id
     */
    id: string;
    requestBody: {
      email: string;
      username: string;
      password: string;
    };
  }): CancelablePromise<
    | (Users_Permissions_User & {
        role?: Users_Permissions_Role;
      })
    | Error
  > {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/users/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * Delete a user
   * @returns any Returns deleted user info
   * @returns Error Error
   * @throws ApiError
   */
  public static deleteUsers({
    id,
  }: {
    /**
     * user Id
     */
    id: string;
  }): CancelablePromise<Users_Permissions_User | Error> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/users/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * Get authenticated user info
   * @returns Users_Permissions_User Returns user info
   * @returns Error Error
   * @throws ApiError
   */
  public static getUsersMe(): CancelablePromise<Users_Permissions_User | Error> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users/me",
    });
  }
  /**
   * Get user count
   * @returns number Returns a number
   * @returns Error Error
   * @throws ApiError
   */
  public static getUsersCount(): CancelablePromise<number | Error> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/users/count",
    });
  }
}
