export type PluginOptions = {
  src: string;
  websiteId: string;

  hostUrl?: string;

  /**
   * @default true
   */
  autoTrack?: boolean;
  /**
   * @default true
   */
  respectDNT?: boolean;

  cache?: boolean;

  domains?: string[];

  enableInDev?: boolean;

  enablePreload?: boolean;
};
