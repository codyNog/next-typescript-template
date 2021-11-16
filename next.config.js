module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }
    return config;
  }
};
