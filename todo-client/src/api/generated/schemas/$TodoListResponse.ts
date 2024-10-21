/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TodoListResponse = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'Todo',
            },
        },
        meta: {
            properties: {
                pagination: {
                    properties: {
                        page: {
                            type: 'number',
                        },
                        pageSize: {
                            type: 'number',
                            minimum: 25,
                        },
                        pageCount: {
                            type: 'number',
                            maximum: 1,
                        },
                        total: {
                            type: 'number',
                        },
                    },
                },
            },
        },
    },
} as const;