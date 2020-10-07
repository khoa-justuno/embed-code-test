const { addBeforeLoader, loaderByName } = require("@craco/craco");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const rawLoader = { test: /\.md$/, use: ["raw-loader"] };
      addBeforeLoader(webpackConfig, loaderByName("file-loader"), rawLoader);
      return webpackConfig;
    },
  },
};
