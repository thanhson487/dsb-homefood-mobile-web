const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'http://10.26.53.12:8386/api',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/api/": "/",
      },
      logLevel: "debug",
    })
  );
};
