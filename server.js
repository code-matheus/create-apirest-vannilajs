const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Middleware para analisar JSON
app.use(bodyParser.json());

// Roteamento da API
app.use('/api', userRoutes);

// Rota para servir o arquivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
