const express = require('express');
const database  = require('./src/database/config');
const requireDir = require('require-dir');
const app = express();

requireDir('./src/models');

app.use(express.json());
app.use('/api',require('./src/routes'))

app.listen(3001, function(){
       console.log('Rodando na porta 3001');
});