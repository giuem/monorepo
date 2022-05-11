import fs from 'fs';
import { resolve } from 'path';

import type { GatsbyNode, Actions, Page } from 'gatsby';

type VercelRedirect = {
  source: string;
  destination: string;
  permanent?: boolean;
};

type VercelHeaders = {
  source: string;
  headers: {
    key: string;
    value: string;
  }[];
};

type GatsbyRedirect = Parameters<Actions['createRedirect']>[0];

type GatsbyState = {
  redirects: GatsbyRedirect[];
  pages: Map<string, Page>;
  program: { directory: string };
};

type PluginOptions = {
  cleanUrls?: boolean;
  headers: VercelHeaders[];
};

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) =>
  Joi.object<PluginOptions>({
    cleanUrls: Joi.boolean().default(false),
    headers: Joi.array().items(
      Joi.object({
        source: Joi.string().required(),
        headers: Joi.array()
          .items(
            Joi.object({
              key: Joi.string().required(),
              value: Joi.string().required(),
            })
          )
          .required(),
      })
    ),
  });

export const onPostBuild: GatsbyNode['onPostBuild'] = async (
  { store, reporter },
  pluginOptions
) => {
  console.log(pluginOptions);
  const { cleanUrls, headers } = pluginOptions as unknown as PluginOptions;
  const { redirects, program }: GatsbyState = store.getState();

  const publicDir = resolve(program.directory, 'public');
  const vercelJsonPath = resolve(publicDir, 'vercel.json');
  throw 1;

  const vercelRedirects: VercelRedirect[] = [];
  redirects.forEach((redirect) => {
    vercelRedirects.push({
      source: redirect.fromPath,
      destination: redirect.toPath,
      permanent: redirect.isPermanent,
    });
  });

  if (redirects.length > 1024) {
    reporter.panicOnBuild(
      `Vercel supports redirects up to 1024, but got ${redirects.length}`
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const vercelJson = {
    cleanUrls,
    headers,
    // @todo get from config
    trailingSlash: false,
    redirects: vercelRedirects,
  };

  return fs.promises.writeFile(
    vercelJsonPath,
    JSON.stringify(vercelJson, null, 2),
    'utf-8'
  );
};
