// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mercado-arry$1.0.0/src/app/views/mercadoArray/produtos/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-BR><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Mercado Array nos preços</title><link rel=stylesheet href=../estatico/css/style.css><link rel=stylesheet href=style.css><link rel=stylesheet href=https://www.w3schools.com/w3css/4/w3.css><link rel=stylesheet href=resetar.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css><script language=javascript src=script.js></script></head><body class=container-responsive-sm><header><section><h1><img src=../estatico/imagens/array.png width=1000 height=212 class=img-fluid alt=\"Imagem responsiva\"></h1></section><nav class=\"navbar navbar-expand-lg  navbar-light bg\"><button class=\"navbar-toggler navbar-toggler-right\" type=button data-toggle=collapse data-target=#navb><section class=navbar-toggler-icon></section></button><section class=\"navbar-collapse collapse nav nav-tabs\" id=navb><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=\"nav-link text-white\" href=/  target=_self>Home</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/listaFun target=_self>Funcionários</a></li><li class=\"nav-item \"><a class=\"nav-link text-white\" href=/funcionarios/form target=_self>Cadastrar funcionários</a></li><li class=\"nav-item active\"><a class=\"nav-link text-white\" href=/listaPro target=_self>Produtos</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/produtos/form target=_self>Cadastrar produtos</a></li> <li class=nav-item><a class=\"nav-link disabled\" href=#></a></li></ul></section></nav></header><main><p class=\"text-center text-uppercase font-weight-bold bg\"> Cadastro de Produto </p><section class=form-row><form class=\"col-md-4 mb-3\" action=/produtos method=post>");

  if (data.produto.id) {
    out.w("<section><input type=hidden name=_method value=put></section>");
  }

  out.w("<input type=hidden id=id name=id" +
    marko_attr("value", "" + data.produto.id) +
    "><section class=\"col-md-9 mb-3\"><label for=nome>Nome:</label><input class=form-control type=text id=nome name=nome" +
    marko_attr("value", "" + data.produto.nome) +
    " placeholder=\"digite o Nome do produto\"></section><section class=\"col-md-9 mb-3\"><label for=tipo>Tipo:</label><input class=form-control type=text id=tipo name=tipo" +
    marko_attr("value", "" + data.produto.tipo) +
    " placeholder=\"digite o Tipo do produto\"></section><section class=\"col-md-9 mb-3\"><label for=preco>Preço:</label><input class=form-control type=number id=preco name=preco" +
    marko_attr("value", "" + data.produto.preco) +
    " placeholder=\"digite o Preço do produto\"></section><input class=\"col-md-9 mb-3 form-control btn btn-success\" type=submit value=Salvar></form> </section></main> <footer class=\"page-footer font-small bg \"><section class=\"footer-copyright text-center py-3 text-white\"> © 2020 Copyright: Mercado-Array de Preços <br> Equipe: | José Roberto | Leonardo | </section></footer><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js integrity=sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js integrity=sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q crossorigin=anonymous></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js integrity=sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "53");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mercado-arry$1.0.0/src/app/views/mercadoArray/produtos/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
