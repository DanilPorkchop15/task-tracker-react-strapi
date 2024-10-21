/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Users_Permissions_PermissionsTree = {
    type: 'dictionary',
    contains: {
        description: `every api`,
        properties: {
            controllers: {
                type: 'dictionary',
                contains: {
                    type: 'dictionary',
                    contains: {
                        description: `every action of every controller`,
                        properties: {
                            enabled: {
                                type: 'boolean',
                            },
                            policy: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
    },
} as const;
