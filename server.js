const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

const candidates = [
  'dist/app/browser',
  'dist/app'
];

function pickDist() {
  for (const p of candidates) {
    const full = path.join(__dirname, p);
    if (fs.existsSync(path.join(full, 'index.html'))) {
      console.log('[server] Serving from:', full);
      return full;
    }
  }
  console.error('[server] No index.html found in candidates:', candidates);
  process.exit(1);
}

const root = pickDist();
app.use(express.static(root));
app.get('*', (_, res) => res.sendFile(path.join(root, 'index.html')));

app.listen(PORT, () => console.log(`[server] Listening on ${PORT}`));
