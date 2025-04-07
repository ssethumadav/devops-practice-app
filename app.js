const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from DevOps App\n');
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
