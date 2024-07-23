import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const API_SERVICE_URL = 'http://api.sportmonks.com';

// Proxy endpoint
app.use('/api', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    // Add custom headers if needed
    proxyReq.setHeader('Authorization', 'BDdRql6xol73Lih9y8TJJNj3AD0EKDJPCHSH20JCayWD15YGD8cDgiZBNDt7');
  },
  onProxyRes: (proxyRes, req, res) => {
    // Add CORS headers to the response
    proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  }
}));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
