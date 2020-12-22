// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mercado-arry$1.0.0/src/app/views/mercadoArray/produtos/listaPro/listaPro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-BR><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Mercado Array nos preços</title><link rel=stylesheet href=./estatico/css/style.css><link rel=stylesheet href=style.css><link rel=stylesheet href=https://www.w3schools.com/w3css/4/w3.css><link rel=stylesheet href=resetar.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css></head><body class=container-responsive-sm><header><section><h1><img src=./estatico/imagens/array.png width=1000 height=212 class=img-fluid alt=\"Imagem responsiva\"></h1></section><nav class=\"navbar navbar-expand-lg  navbar-light bg\"><button class=\"navbar-toggler navbar-toggler-right\" type=button data-toggle=collapse data-target=#navb><section class=navbar-toggler-icon></section></button><section class=\"navbar-collapse collapse nav nav-tabs\" id=navb><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=\"nav-link text-white\" href=/  target=_self>Home</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/listaFun target=_self>Funcionários</a></li><li class=\"nav-item \"><a class=\"nav-link text-white\" href=/funcionarios/form target=_self>Cadastrar funcionários</a></li><li class=\"nav-item active\"><a class=\"nav-link text-white\" href=/listaPro target=_self>Produtos</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/produtos/form target=_self>Cadastrar produtos</a></li> <li class=nav-item><a class=\"nav-link disabled\" href=#></a></li></ul></section></nav></header><main><p class=\"text-center text-uppercase font-weight-bold bg\">Produtos Cadastrados</p><section class=container> <table id=produtos class=\"table table-striped thead-dark mt-2 table-hover table-responsive-sm\"><tr><th scope=col>ID</th><th scope=col>Nome</th><th scope=col>Tipo</th><th scope=col>Preco</th><th scope=col>Editar</th><th scope=col>Remover</th></tr>");

  var $for$0 = 0;

  marko_forOf(data.produtos, function(itemPro) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "produto_" + itemPro.id) +
      "><td scope=row>" +
      marko_escapeXml(itemPro.id) +
      "</td><td scope=row>" +
      marko_escapeXml(itemPro.nome) +
      "</td><td scope=row>" +
      marko_escapeXml(itemPro.tipo) +
      "</td><td scope=row>R$: " +
      marko_escapeXml(itemPro.preco) +
      "</td><td><a" +
      marko_attr("href", "/produtos/form/" + itemPro.id) +
      " data-type=editar>Editar</a></td><td><a href=#" +
      marko_attr("data-ref", "" + itemPro.id) +
      " data-type=remocao>Remover</a></td></tr>");
  });

  out.w("</table> </section></main><script src=./estatico/js/remove-produto.js></script><footer class=\"page-footer font-small bg\"><section class=\"footer-copyright text-center py-3 text-white\"> © 2020 Copyright: Mercado-Array de Preços <br> Equipe: | José Roberto | Leonardo | </section></footer><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js integrity=sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js integrity=sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q crossorigin=anonymous></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js integrity=sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "56");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mercado-arry$1.0.0/src/app/views/mercadoArray/produtos/listaPro/listaPro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
