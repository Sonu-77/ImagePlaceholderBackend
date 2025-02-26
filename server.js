const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or fallback to 3000

// Endpoint for dynamic SVG image generation
app.get("/:width/:height/:bg/:color/:text", (req, res) => {
  const { width, height, bg, color, text } = req.params;

  // Generate the SVG string
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#${bg}" />
      <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="20" font-weight="bold" fill="#${color}">
        ${text}
      </text>
    </svg>
  `;

  // Set the response type as SVG
  res.setHeader("Content-Type", "image/svg+xml");
  
  // Send the SVG image as the response
  res.send(svg);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
