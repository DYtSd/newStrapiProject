'use strict';

/**
 * apply-volunteer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::apply-volunteer.apply-volunteer');
