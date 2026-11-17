// Minimal PeerJS signaling server for Ligma Design.
// It only introduces two browsers to each other. Your designs never pass through it.
const { PeerServer } = require('peer');

const port = Number(process.env.PORT) || 9000;

PeerServer({
  port,
  path: '/',                  // must match `path` in SIGNALING_SERVERS in index.html
  proxied: true,              // we sit behind Render/Fly/Railway's HTTPS proxy
  allow_discovery: false,     // don't let anyone list connected peer IDs
  corsOptions: { origin: true }, // GitHub Pages (and any other origin) may connect
  alive_timeout: 60000,
});

console.log('Ligma PeerJS signaling server listening on port ' + port);
