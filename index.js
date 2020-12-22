const app = require('./src/config/custom-express'); // Importado os codigos do "custom-express"
const conexao = require('./src/infra/conexao');
const Tabelas = require('./src/infra/tabelas');

conexao.connect(msgErro => {
    if(msgErro){
        console.log(msgErro)
    } else {
        console.log("Conectado com sucesso")
        Tabelas.inicializa(conexao)
        // Eviando uma função para ser usada quando um evendo acontecer
        // Callback
        app.listen(3002, function(){ // Levantando o servidor
            console.log('Servidor rodando na porta 3002');
        });
    }

});