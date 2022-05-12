// @ts-check
const fs = require('fs');
const { resolve } = require('path');

/**
 * @type {import('gatsby').GatsbyNode['onPostBuild']}
 */
exports.onPostBuild = async ({ store }, pluginOptions) => {
  /**
   * @type {import('./type').GatsbyState}
   */
  const { redirects, program } = store.getState();
  const projectRoot = program.directory;

  /** @type {import('./type').PluginOptions} */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore ignore type error
  const { cleanUrls, trailingSlash, headers } = pluginOptions;

  /**
   * @type {import('./type').VercelConfig}
   */
  const vercelConfig = {
    cleanUrls,
    trailingSlash,
    headers,

    redirects: [],
  };

  redirects.forEach((redirect) => {
    vercelConfig.redirects.push({
      source: redirect.fromPath,
      destination: redirect.toPath,
      permanent: redirect.isPermanent,
    });
  });

  await fs.promises.writeFile(
    resolve(projectRoot, 'vercel.json'),
    JSON.stringify(vercelConfig, null, 2),
    'utf-8'
  );
};

/**
 * @type {import('gatsby').GatsbyNode['pluginOptionsSchema']}
 */
exports.pluginOptionsSchema = ({ Joi }) =>
  Joi.object({
    cleanUrls: Joi.boolean(),
    trailingSlash: Joi.boolean(),
    headers: Joi.array().items(
      Joi.object({
        source: Joi.string().required(),
        headers: Joi.array().items(
          Joi.object({
            key: Joi.string().required(),
            value: Joi.string().required(),
            has: Joi.object({
              type: Joi.string()
                .valid('header', 'cookie', 'host', 'query')
                .required(),
              key: Joi.string().required(),
              value: Joi.string(),
            }),
          })
        ),
      })
    ),
  });
