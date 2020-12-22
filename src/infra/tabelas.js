// Codigo padrão para criar tabelas
class Tabelas{

    inicializa(conexao){ // A classe tabela recebe uma conexão
        this.conexao = conexao // Armazena essa conexão
        this.criarTabelaFun() // Depois chama e função tabela livros que executa o codigo abaixo
        this.criarTabelaProd()
    }

    // Criando tabela no servidor
    criarTabelaFun(){// Metodo é uma função dentro de uma classe

        const sql = 'CREATE TABLE IF NOT EXISTS funcionarios (id int NOT NULL AUTO_INCREMENT, nome varchar(50), sobrenome varchar(50), funcao varchar(50), admicao varchar(25), salario REAL, sexo varchar(10), PRIMARY KEY(id))'

        this.conexao.query(sql, msgErro => {
            if(msgErro){
                console.log(msgErro)
            } else {
                console.log('Tabela de funcionarios criada com sucesso')
            }
        })

    };

    criarTabelaProd(){// Metodo é uma função dentro de uma classe

        const sql = 'CREATE TABLE IF NOT EXISTS produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(50), tipo varchar(50), preco REAL, PRIMARY KEY(id))'

        this.conexao.query(sql, msgErro => {
            if(msgErro){
                console.log(msgErro)
            } else {
                console.log('Tabela de produtos criada com sucesso')
            }
        })

    }
}

module.exports = new Tabelas;