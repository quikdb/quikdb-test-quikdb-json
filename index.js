const http = require('http');
const port = parseInt(process.env.PORT || '3000');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/health') {
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.end(JSON.stringify({ app: 'quikdb-test-quikdb-json', status: 'ok', configSource: 'quikdb.json' }));
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Server listening on :${port}`));
