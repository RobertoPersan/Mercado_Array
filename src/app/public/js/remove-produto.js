let tabelaPro = document.querySelector("#produtos")

tabelaPro.addEventListener('click', (evento) =>{
    let elementoClicado = evento.target;

    if(elementoClicado.dataset.type == 'remocao'){
        let produtoId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3002/listaPro/${produtoId}`, {method: 'DELETE'})
            .then(res => {
                //Função para remover linha da tabela
                let tr = elementoClicado.closest(`#produto_${produtoId}`)
                tr.remove()
            })
            .catch(msgErro => {
                //alert('NÃO FOI POSSIVEL REMOVER O PRODUTO')
                console.log(msgErro)
            })
    }
})