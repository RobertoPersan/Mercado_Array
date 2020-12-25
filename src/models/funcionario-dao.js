class FunDao {
    constructor(conexao){
        this._conexao = conexao
    }

    lista(){

        return new Promise( (resolver, rejeitar) =>{// Promise é criar um promesa de que o codigo a baixo sera executado

            const sql =  'SELECT * FROM funcionarios'

            this._conexao.query(sql, (msgErro, resultados) => {
                    if(msgErro){ 
                        return rejeitar('Não foi possivel listar os funcionarios')
                    } else {    
                        return resolver(resultados)
                    }        
            })
        }) 
    }

    adiciona(funci){
        return new Promise( (resolver, rejeitar) =>{
            const sql = `INSERT INTO FUNCIONARIOS(nome, sobrenome, funcao, admissao, salario, sexo) values (?,?,?,?,?,?)`

            this._conexao.query(sql,[funci.nome,funci.sobrenome,funci.funcao,funci.admissao,funci.salario,funci.sexo],
                function(msgErro){
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel adicionar o funconario');
                    } else {
                        resolver();
                    }
                })

        })
    }

    remover(id){
        return new Promise( (resolver, rejeitar) =>{
            const sql = `DELETE FROM funcionarios WHERE id=?`

            this._conexao.query(sql,
                id,
                function(msgErro){
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel remover o funcionario');
                    } else {
                        resolver();
                    }
                })

        })
    }

    buscaFunId(id){
        return new Promise((resolver, rejeitar) => {
            const sql = `SELECT * FROM funcionarios WHERE id=?`

            this._conexao.query(sql,
                id,
                function(msgErro, resultados){
                    const funcionario = resultados[0]
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel recuperar o funcionario');
                    } else {
                        resolver(funcionario);
                    }
            })
        })
    }


    altera(funci){
        return new Promise( (resolver, rejeitar) =>{
            const id = funci.id;
            const sql = `UPDATE funcionarios SET ? WHERE id=?`;

            this._conexao.query(sql, [funci,id],
                function(msgErro){
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel alterar o funcionario');
                    } else {
                        return resolver();
                    }
                })

        })
    }
}

module.exports = FunDao