import type { Actions, Page } from 'gatsby';

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
    has?: {
      type: 'header' | 'cookie' | 'host' | 'query';
      key: string;
      value?: string;
    };
  }[];
};

type GatsbyRedirect = Parameters<Actions['createRedirect']>[0];

export type GatsbyState = {
  redirects: GatsbyRedirect[];
  pages: Map<string, Page>;
  program: { directory: string };
};

export type VercelConfig = {
  cleanUrls?: boolean;
  trailingSlash?: boolean;
  redirects: VercelRedirect[];
  headers: VercelHeaders[];
};

export type PluginOptions = Pick<
  VercelConfig,
  'cleanUrls' | 'trailingSlash' | 'headers'
>;
