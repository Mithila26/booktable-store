const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Change this to match your API endpoint
    createProxyMiddleware({
      target: 'https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store/', // Change this to match your server address
      changeOrigin: true,
    })
  );
};