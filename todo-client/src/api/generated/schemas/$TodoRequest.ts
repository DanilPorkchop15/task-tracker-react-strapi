/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TodoRequest = {
    properties: {
        data: {
            properties: {
                title: {
                    type: 'string',
                    isRequired: true,
                },
                completed: {
                    type: 'boolean',
                    isRequired: true,
                },
                user: {
                    type: 'one-of',
                    contains: [{
                        type: 'number',
                    }, {
                        type: 'string',
                    }],
                },
                locale: {
                    type: 'string',
                },
                localizations: {
                    type: 'array',
                    contains: {
                        type: 'one-of',
                        contains: [{
                            type: 'number',
                        }, {
                            type: 'string',
                        }],
                    },
                },
            },
            isRequired: true,
        },
    },
} as const;
