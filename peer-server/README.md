# Ligma signaling server (5-minute setup, free)

Live sharing is peer to peer, but two browsers can only find each other through a small
"signaling" server. The free public one (`0.peerjs.com`) is unreliable, so run your own.
Designs never go through this server; it only introduces the designer and the viewer.

## Deploy on Render (free)

1. Push this `peer-server/` folder to a GitHub repo (it can live inside `ligma-design`).
2. On https://render.com choose **New > Web Service** and pick that repo.
3. Settings:
   - **Root Directory:** `peer-server` (leave empty if the folder is its own repo)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance type:** Free
4. When it is live, open `https://YOUR-APP.onrender.com/`. You should see a small JSON
   message that says "PeerJS Server". If you do, it works.
5. In `index.html`, uncomment the first line of `SIGNALING_SERVERS` and set your host:

   ```js
   const SIGNALING_SERVERS = [
     { host: 'YOUR-APP.onrender.com', port: 443, path: '/', secure: true },
     { host: '0.peerjs.com', port: 443, path: '/', secure: true },   // fallback
   ];
   ```
6. Commit and push `index.html` so GitHub Pages serves the new version, then reopen the
   studio and click **Share** again (old links point at the old server).

Notes:
- Render's free plan sleeps after ~15 minutes idle. The first connection after that can
  take 30-60 seconds while it wakes up. The viewer page keeps retrying and says so. To avoid
  the wait, ping the URL every 10 minutes with a free monitor such as UptimeRobot.
- Fly.io, Railway or any small VPS work the same way: `npm install && npm start`, with HTTPS in front.

## If a viewer still cannot connect (strict networks)

Some mobile and office networks block direct peer to peer links. Those need a TURN relay.
Add one to `ICE_SERVERS` in `index.html` (for example from Metered, Twilio or Cloudflare):

```js
{ urls: 'turn:YOUR-TURN-HOST:443?transport=tcp', username: 'USER', credential: 'PASS' },
```
