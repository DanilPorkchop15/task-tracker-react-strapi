/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TodoListResponse } from "../models/TodoListResponse";
import type { TodoRequest } from "../models/TodoRequest";
import type { TodoResponse } from "../models/TodoResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class TodoOpenApi {
  /**
   * @returns TodoListResponse OK
   * @throws ApiError
   */
  public static getTodos({
    sort,
    paginationWithCount,
    paginationPage,
    paginationPageSize,
    paginationStart,
    paginationLimit,
    fields,
    populate,
    filters,
    locale,
  }: {
    /**
     * Sort by attributes ascending (asc) or descending (desc)
     */
    sort?: string;
    /**
     * Return page/pageSize (default: true)
     */
    paginationWithCount?: boolean;
    /**
     * Page number (default: 0)
     */
    paginationPage?: number;
    /**
     * Page size (default: 25)
     */
    paginationPageSize?: number;
    /**
     * Offset value (default: 0)
     */
    paginationStart?: number;
    /**
     * Number of entities to return (default: 25)
     */
    paginationLimit?: number;
    /**
     * Fields to return (ex: title,author)
     */
    fields?: string;
    /**
     * Relations to return
     */
    populate?: string;
    /**
     * Filters to apply
     */
    filters?: Record<string, any>;
    /**
     * Locale to apply
     */
    locale?: string;
  }): CancelablePromise<TodoListResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/todos",
      query: {
        sort: sort,
        "pagination[withCount]": paginationWithCount,
        "pagination[page]": paginationPage,
        "pagination[pageSize]": paginationPageSize,
        "pagination[start]": paginationStart,
        "pagination[limit]": paginationLimit,
        fields: fields,
        populate: populate,
        filters: filters,
        locale: locale,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns TodoResponse OK
   * @throws ApiError
   */
  public static postTodos({ requestBody }: { requestBody: TodoRequest }): CancelablePromise<TodoResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/todos",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns TodoResponse OK
   * @throws ApiError
   */
  public static getTodosId({ id }: { id: string }): CancelablePromise<TodoResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/todos/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns TodoResponse OK
   * @throws ApiError
   */
  public static putTodosId({
    id,
    requestBody,
  }: {
    id: string;
    requestBody: TodoRequest;
  }): CancelablePromise<TodoResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/todos/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns number OK
   * @throws ApiError
   */
  public static deleteTodosId({ id }: { id: string }): CancelablePromise<number> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/todos/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    });
  }
}
