
const express = require('express');
const path = require('path');
const app = express();

// Serve the index.html page at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Handle all other requests to generate images
app.get(/.+/, (req, res) => {
  const { path } = req;
  const params = path.substring(1).split('/');

  // Parse parameters
  let [size, bgColor = 'CCCCCC', textColor = '444444'] = params;
  let [width, height] = size.split('x').map(Number);
  
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    width = 200;
    height = 200;
  }

  const text = req.query.text ? decodeURIComponent(req.query.text) : `${width}x${height}`;

  // Generate SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#${bgColor}" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" fill="#${textColor}" text-anchor="middle" dy=".3em">
        ${text}
      </text>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
