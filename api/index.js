const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'API funcionando ✅',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.listen(port, () => {
  console.log(`API escuchando en puerto ${port}`);
});
