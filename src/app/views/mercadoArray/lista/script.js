var carregar;
function loadImagem( img )
{
    carregar = new Image();
    carregar.src = img;
    document.getElementById("sua_div").innerHTML = "Carregando...";
    setTimeout( "verificaCarregamento()", 1 );
}
 
function verificaCarregamento()
{
    if( carregar.complete )
    {
        document.getElementById("sua_div").innerHTML = `<img src=""
                + carregar.src + ".png " width=35 />`;
    }
    else
    {
        setTimeout( "verificaCarregamento()", 1 );
    }
}