// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mercado-arry$1.0.0/src/app/views/mercadoArray/funcionarios/listaFun/listaFun.marko",
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

  out.w("<html lang=pt-BR><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Mercado Array nos preços</title><link rel=stylesheet href=../estatico/css/style.css><link rel=stylesheet href=style.css><link rel=stylesheet href=https://www.w3schools.com/w3css/4/w3.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css><script language=javascript src=script.js></script></head><body class=container-responsive-sm><header><section><h1><img src=./estatico/imagens/array.png width=1000 height=212 class=img-fluid alt=\"Imagem responsiva\"></h1></section><nav class=\"navbar navbar-expand-lg  navbar-light bg\"><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavDropdown aria-controls=navbarNavDropdown aria-expanded=false aria-label=\"Toggle navigation\"><section class=navbar-toggler-icon></section></button><section class=\"collapse navbar-collapse nav nav-tabs\" id=navbarNavDropdown><ul class=\"navbar-nav \"><li class=nav-item><a class=\"nav-link text-white\" href=/  target=_self>Home</a></li><li class=\"nav-item active\"><a class=\"nav-link text-white\" href=/listaFun target=_self>Funcionários</a></li><li class=\"nav-item \"><a class=\"nav-link text-white\" href=/funcionarios/form target=_self>Cadastrar funcionários</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/listaPro target=_self>Produtos</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/produtos/form target=_self>Cadastrar produtos</a></li></ul></section></nav></header><main><p class=\"text-center text-uppercase font-weight-bold bg\">Lista de Funcionários</p><section class=container> <table id class=\"table table-striped thead-dark mt-2 table-hover table-responsive-sm\"><tr><th scope=col>ID</th><th scope=col>Nome</th><th scope=col>Sobrenome</th><th scope=col>Função</th> <th scope=col>Admissão</th><th scope=col>Salario</th><th scope=col>Sexo</th><th scope=col>Editar</th><th scope=col>Remover</th></tr>");

  var $for$0 = 0;

  marko_forOf(data.funcionarios, function(itemFun) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td scope=row>" +
      marko_escapeXml(itemFun.id) +
      "</td><td scope=row>" +
      marko_escapeXml(itemFun.nome) +
      "</td><td scope=row>" +
      marko_escapeXml(itemFun.sobrenome) +
      "</td><td scope=row>" +
      marko_escapeXml(itemFun.funcao) +
      "</td> <td scope=row>" +
      marko_escapeXml(itemFun.admicao) +
      "</td><td scope=row>" +
      marko_escapeXml(itemFun.salario) +
      "</td><td scope=row>" +
      marko_escapeXml(itemFun.sexo) +
      "</td> <td><a" +
      marko_attr("href", "/funcionarios/form/" + itemFun.id) +
      " data-type=editar>Editar</a></td><td><a href=#" +
      marko_attr("data-ref", "" + itemFun.id) +
      " data-type=remocao>Remover</a></td> </tr>");
  });

  out.w("</table> </section></main><script src=./estatico/js/remove-funcionario.js></script><footer class=\"page-footer font-small bg\"><section class=\"footer-copyright text-center py-3 text-white\"> © 2020 Copyright: Mercado-Array de Preços <br> Equipe: | Jose Roberto | Leonardo | </section></footer><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js integrity=sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js integrity=sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q crossorigin=anonymous></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js integrity=sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "59");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mercado-arry$1.0.0/src/app/views/mercadoArray/funcionarios/listaFun/listaFun.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
