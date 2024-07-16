'use strict';

/**
 * event-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-blog.event-blog');
