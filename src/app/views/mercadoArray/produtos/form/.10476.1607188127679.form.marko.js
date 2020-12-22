// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mercado-arry$1.0.0/src/app/views/mercadoArray/produtos/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=resetar.css><link rel=stylesheet href=style.css><title>Mercado Array nos preços</title></head><body><header><h1>Mercado Array de Preços<img src=# alt=\"logo do Mercado\"></h1><h2>Cadastro de Produto</h2><nav><ul><li><a href=/  target=_self>Home</a></li><li><a href=/listaFun target=_self>funcionários</a></li><li><a href=/listaPro target=_self>produtos</a></li><li><a href=/funcionarios/form target=_self>Cadastrar funcionario</a></li></ul></nav></header><main><section><form action=/produtos method=post><input type=hidden id=id name=id><section><label for=nome>Nome:</label><input type=text id=nome name=nome placeholder=\"digite o Nome do produto\"></section><section><label for=tipo>Tipo:</label><input type=text id=tipo name=tipo placeholder=\"digite o Tipo do produto\"></section><section><label for=preco>Preço:</label><input type=number id=preco name=preco placeholder=\"digite o Preço do produto\"></section><input type=submit value=Salvar></form> </section></main> <footer><hr> &copy;Mercado-Array de Preços. <br> Desde 1071</footer> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

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
