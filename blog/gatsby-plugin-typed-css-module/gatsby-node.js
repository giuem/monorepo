// @ts-check
const CSS_PATTERN = /\.css$/;
const CSS_MODULE_PATTERN = /\.module\.css$/;

const isCssRules = (rule) =>
  rule.test &&
  (rule.test.toString() === CSS_PATTERN.toString() ||
    rule.test.toString() === CSS_MODULE_PATTERN.toString());

const findCssRules = (config) =>
  config.module.rules.find(
    (rule) => Array.isArray(rule.oneOf) && rule.oneOf.every(isCssRules)
  );

exports.onCreateWebpackConfig = (
  /** @type {import('gatsby').CreateWebpackConfigArgs} */ {
    stage,
    plugins,
    actions,
    getConfig,
  }
) => {
  if (stage !== 'develop') {
    return;
  }

  const config = getConfig();

  const cssRules = findCssRules(config);

  if (cssRules) {
    cssRules.oneOf.forEach((statement) => {
      statement.use = statement.use
        .map((item) => {
          if (
            item.loader.match(/css-loader/) &&
            (item.options.modules === true ||
              typeof item.options.modules === 'object')
          ) {
            return [
              {
                loader: require.resolve(
                  '@teamsupercell/typings-for-css-modules-loader'
                ),
              },
              item,
            ];
          }
          return item;
        })
        .flat();
    });

    config.plugins.push(plugins.watchIgnore({ paths: [/css\.d\.ts$/] }));
  }

  actions.replaceWebpackConfig(config);
};
