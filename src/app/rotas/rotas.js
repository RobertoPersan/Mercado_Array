const conexao = require('../../infra/conexao');
const FunDao = require('../../models/funcionario-dao');
const ProDao = require('../../models/produto-dao'); 

// O module.exports vai receber a função, que para ser executada precisa receber uma variavel app
module.exports = (app) => { // arrow function


    app.get('/', function(req, res){ // Esse é o codigo que chama o html do lista.marko
        res.marko(
            require('../views/mercadoArray/lista/index.marko')
        )
    }),



    app.get('/listaFun', function(req, res){ // Esse é o codigo que importa o html de funcionarios 
            const funDao = new FunDao(conexao)

            funDao.lista().then(resultados => {
                    res.marko(
                        require('../views/mercadoArray/funcionarios/listaFun/listaFun.marko'),
                        {funcionarios: resultados} // Chave que da acesso aou resultado
                    ).catch (msgErro => console.log(msgErro))
                
            })
        }    
    ),

    app.get('/funcionarios/form', function(req, res){// Codigo que importa o formulario de funcionarios
        res.marko(require('../views/mercadoArray/funcionarios/form/form.marko'), {funcionario: {}})
    })


    app.get('/funcionarios/form/:id', function(reque, res){// Codigo que edita o formulario de funcionario
        const id = reque.params.id;
        const funDao = new FunDao(conexao)// buscando o funcionario de id (nº x) no banco de dados
        funDao.buscaFunId(id)
            .then(funcionario => 
                res.marko(require('../views/mercadoArray/funcionarios/form/form.marko'),
                {funcionario: funcionario}
            ))
            .catch(msgErro => console.log(msgErro))
       
    })


    app.delete("/funcionarios/:id", (req, resp) =>{
        const id = req.params.id;
        const funDao = new FunDao(conexao);

        funDao.remove(id)
            .then( () => resp.status(200).end())
            .catch( msgErro => console.log(msgErro))

    });


    app.post('/funcionarios', function(req, res){
        //console.log(req.body) // Middleware, um software que fica no middle

        const funDao = new FunDao(conexao);
        funDao.adiciona(req.body).then(res.redirect('/listaFun')).catch(erro => console.log(erro))
    })

    app.put('/funcionarios', function(req, res){
       // console.log(req.body) // Middleware, um software que fica no middle

        const funDao = new FunDao(conexao);
        funDao.altera(req.body)
            .then(res.redirect('/listaFun'))
            .catch(erro => console.log(erro))
    })



    app.get('/listaPro', function(req, res){ // Esse é o codigo que importa o html de produtos
            const proDao = new ProDao(conexao)

            proDao.lista().then(resultados =>
                res.marko(
                    require('../views/mercadoArray/produtos/listaPro/listaPro.marko'),
                    {produtos: resultados}
                ).catch (msgErro => console.log(msgErro))
            )
        }
    )

    app.get('/produtos/form', function(req, res){// Codigo que importa o formulario de produtos
        res.marko(require('../views/mercadoArray/produtos/form/form.marko'), {produto: {}})
    })

    
    app.get('/produtos/form/:id', function(reque, res){// Codigo que edita o formulario de produtos
        const id = reque.params.id;
        const proDao = new ProDao(conexao) // buscando o produto de id (nº x) no banco de dados
        proDao.buscaPorId(id)
            .then(produto => 
                res.marko(require('../views/mercadoArray/produtos/form/form.marko'),
                {produto: produto}
            ))
            .catch(msgErro => console.log(msgErro))
       
    })

    app.post('/produtos', function(req, res){
        //console.log(req.body)
        const proDao = new ProDao(conexao);
        proDao.adiciona(req.body).then(res.redirect('/listaPro')).catch(erro => console.log(erro))
    })

    app.put('/produtos', function(req, res){
        //console.log(req.body)
        const proDao = new ProDao(conexao);
        proDao.altera(req.body)
            .then(res.redirect('/listaPro'))
            .catch(erro => console.log(erro))
    })


    app.delete("/produtos/:id", (req, resp) =>{
        const id = req.params.id;
        const proDao = new ProDao(conexao);

        proDao.remove(id)
            .then( () => resp.status(200).end())
            .catch( msgErro => console.log(msgErro))

    });
    
}
