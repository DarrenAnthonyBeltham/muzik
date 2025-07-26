const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/search',
    createProxyMiddleware({
      target: 'https://api.genius.com',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('>>> [Muzik App Proxy] Sending these headers to Genius:', proxyReq.getHeaders());
      },
    })
  );
};
