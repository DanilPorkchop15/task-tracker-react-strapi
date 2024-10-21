/**
 * todo controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::todo.todo', ({ strapi }) => ({
  async find(ctx) {
    // Call the default core action
    const { data, meta } = await super.find(ctx);

    // Optionally customize the response or extend the population
    const entries = await strapi.entityService.findMany('api::todo.todo', {
      populate: {
        user: {
          populate: ["createdBy"],
        },
      },
    });

    return { data: entries, meta };
  },

  async create(ctx) {
    // Call the default core action
    const { data, meta } = await super.create(ctx);

    // Optionally customize the response or extend the population
    const entries = await strapi.entityService.findMany('api::todo.todo', {
      populate: {
        user: {
          populate: ["createdBy"],
        },
      },
    });

    return { data: entries, meta };
  },

  async update(ctx) {
    // Call the default core action
    const result = await super.update(ctx);

    if (!result) {
      return result;
    }

    const { data, meta } = result;

    // Optionally customize the response or extend the population
    const entries = await strapi.entityService.findMany('api::todo.todo', {
      populate: {
        user: {
          populate: ["createdBy"],
        },
      },
    });

    return { data: entries, meta };
  }
}));