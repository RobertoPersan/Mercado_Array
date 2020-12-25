class ProDao {
    constructor(conexao){
        this._conexao = conexao
    }

    lista(){ // o metodo lista ira pegar todos os elementos

        return new Promise( (resolver, rejeitar) =>{

            const sql =  'SELECT * FROM produtos'

            this._conexao.query(sql, (msgErro, resultados) => {
                    if(msgErro){ 
                        return rejeitar('Não foi possivel listar os produtos')
                    } else {    
                        return resolver(resultados)
                    }        
            })
        }) 
    };

    adiciona(prod){
        return new Promise( (resolver, rejeitar) =>{
            const sql = `INSERT INTO produtos(nome, tipo,preco) values (?,?,?)`

            this._conexao.query(sql,[prod.nome,prod.tipo,prod.preco],
                function(msgErro){
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel adicionar o produto');
                    } else {
                        resolver();
                    }
                })

        })
    };


    remover(id){
        return new Promise( (resolver, rejeitar) =>{
            const sql = `DELETE FROM produtos WHERE id=?`

            this._conexao.query(sql,
                id,
                function(msgErro){
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel remover o produto');
                    } else {
                        resolver();
                    }
                })

        })
    };

    buscaPorId(id){
        return new Promise((resolver, rejeitar) => {
            const sql = `SELECT * FROM produtos WHERE id=?`

            this._conexao.query(sql,
                id,
                function(msgErro, resultados){
                    const produto = resultados[0]
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel recuperar o produto');
                    } else {
                        resolver(produto);
                    }
            })
        })
    };

    altera(prod){
        return new Promise( (resolver, rejeitar) =>{
            const id = prod.id;
            const sql = `UPDATE produtos SET ? WHERE id=?` ;

            this._conexao.query(sql,[prod,id],
                function(msgErro){
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('Não foi possivel alterar o produto');
                    } else {
                        return resolver();
                    }
                })

        })
    }
};



module.exports = ProDao