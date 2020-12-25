const bodyParser = require('body-parser');
const express = require('express'); // Inportando o pacote de arquivos express

require('marko/node-require').install(); // Essa linha de codigo ira instalar o marko no nosso projeto
require('marko/express'); //

const app = express(); // Instanciando o express / Criando um objeto atravez do contrutor interno dele
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ // Middleware/ Responsavel por transformar o codigo url em um codigo usavel em javascript
    extended:true
}));


app.use('/estatico', express.static('src/app/public'));


app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body){
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}))


const rotas = require('../app/rotas/rotas.js');// Fazendo busca do arquivo em rotas

rotas(app);// Acionando rotas como uma função e passando a variavel app para dentro dela
// O arqivo rotas ira modificar o app para ele responder as conexões do usuarios

module.exports = app; // Exportando o objeto que esta em "app"