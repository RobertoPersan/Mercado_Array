// Fazendo a conexão com o banco
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'projeto_web_banco'
})

// Exportando o codigo paras er usado em outros arquivos
module.exports = conexao;