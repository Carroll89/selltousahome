import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..', 'out');
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';

const contentTypes = new Map([
  ['.avif', 'image/avif'],
  ['.css', 'text/css; charset=utf-8'],
  ['.gif', 'image/gif'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.map', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
  ['.xml', 'application/xml; charset=utf-8'],
]);

function safeJoin(pathname) {
  const decoded = decodeURIComponent(pathname.split('?')[0]);
  const clean = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const fullPath = resolve(root, `.${sep}${clean}`);

  if (!fullPath.startsWith(root + sep) && fullPath !== root) {
    return null;
  }

  return fullPath;
}

function findFile(pathname) {
  const base = safeJoin(pathname);
  if (!base) return null;

  const candidates = [];
  if (existsSync(base) && statSync(base).isFile()) candidates.push(base);
  if (!extname(base)) candidates.push(`${base}.html`);
  candidates.push(join(base, 'index.html'));

  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile()) || null;
}

function sendFile(res, filePath) {
  res.writeHead(200, {
    'Content-Type': contentTypes.get(extname(filePath)) || 'application/octet-stream',
    'Cache-Control': filePath.includes(`${sep}_next${sep}static${sep}`)
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate',
  });
  createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const filePath = findFile(url.pathname);

  if (filePath) {
    sendFile(res, filePath);
    return;
  }

  const notFound = findFile('/404');
  if (notFound) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    createReadStream(notFound).pipe(res);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(port, host, () => {
  console.log(`Serving static export from ${root} on http://${host}:${port}`);
});
