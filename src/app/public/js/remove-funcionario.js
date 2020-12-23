let tabelaFun = document.querySelector("#funcionarios")

tabelaFun.addEventListener('click', (evento) =>{
    let elementoClicado = evento.target;

    if(elementoClicado.dataset.type == 'remocao'){
        let funcionarioId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3002/listaFun/${funcionarioId}`, {method: 'DELETE'})
            .then(res => {
                //Função para remover linha da tabela
                let tr = elementoClicado.closest(`#funcionario_${funcionarioId}`)
                tr.remove()
            })
            .catch(msgErro => {
                console.log(msgErro)
            })
    }
})