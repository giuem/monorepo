import fs from 'fs';
import { resolve } from 'path';

import type { GatsbyNode, Actions } from 'gatsby';

type VercelRedirect = {
  source: string;
  destination: string;
  permanent?: boolean;
};

type GatsbyRedirect = Parameters<Actions['createRedirect']>[0];

type GatsbyState = {
  redirects: GatsbyRedirect[];
  // pages: Map<string, Page>;
  // program: { directory: string };
};

export const onPostBuild: GatsbyNode['onPostBuild'] = async ({ store }) => {
  const { redirects }: GatsbyState = store.getState();

  const vercelRedirects: VercelRedirect[] = [];
  redirects.forEach((redirect) => {
    vercelRedirects.push({
      source: redirect.fromPath,
      destination: redirect.toPath,
      permanent: redirect.isPermanent,
    });
  });

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const vercelJson = require('./vercel.json');
  vercelJson.redirects = vercelRedirects;
  await fs.promises.writeFile(
    resolve('vercel.json'),
    JSON.stringify(vercelJson, null, 2),
    'utf-8'
  );
};
