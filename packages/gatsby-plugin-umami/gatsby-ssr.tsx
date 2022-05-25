import type { GatsbySSR } from 'gatsby';
import { Script } from 'gatsby';

import type { PluginOptions } from './plugin';

export const onRenderBody: GatsbySSR['onRenderBody'] = (
  { setPostBodyComponents, setHeadComponents },
  pluginOptions
) => {
  const {
    enableInDev = false,
    src,
    websiteId,
    hostUrl,
    autoTrack = true,
    respectDNT = true,
    cache,
    domains,
    enablePreload,
  } = pluginOptions as unknown as PluginOptions;

  const isEnabled = enableInDev || process.env.NODE_ENV === 'production';

  if (!isEnabled) {
    return;
  }

  if (enablePreload) {
    const url = new URL(src);
    const href = url.origin;

    setHeadComponents([
      <link key="preconnect-umain-script" rel="preconnect" href={href} />,
      <link key="dns-prefetch-umain-script" rel="preconnect" href={href} />,
    ]);
  }

  setPostBodyComponents([
    <Script
      key="umami-script"
      async
      defer
      src={src}
      data-website-id={websiteId}
      data-auto-track={autoTrack}
      data-do-not-track={respectDNT}
      data-cache={cache}
      data-host-url={hostUrl}
      data-domains={domains ? domains.join(',') : undefined}
    />,
  ]);
};
