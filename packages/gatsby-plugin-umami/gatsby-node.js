// @ts-check
// import type { GatsbyNode } from 'gatsby';

// import { PluginOptions } from './plugin';

/**
 * @type {import('gatsby').GatsbyNode['pluginOptionsSchema']}
 */
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    src: Joi.string().required(),
    websiteId: Joi.string().required(),

    hostUrl: Joi.string(),
    autoTrack: Joi.boolean().default(true),
    respectDNT: Joi.boolean().default(true),
    cache: Joi.boolean().default(false),
    domains: Joi.array().items(Joi.string()),

    enableInDev: Joi.boolean().default(false),
    enablePreload: Joi.boolean().default(false),
  });
};
