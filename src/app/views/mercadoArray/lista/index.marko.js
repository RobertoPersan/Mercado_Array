// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mercado-arry$1.0.0/src/app/views/mercadoArray/lista/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-BR><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Mercado Array nos preços</title><link rel=stylesheet href=../estatico/css/style.css><link rel=stylesheet href=style.css><link rel=stylesheet href=https://www.w3schools.com/w3css/4/w3.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css><script language=javascript src=script.js></script></head><body class=container-responsive-sm><header><section><h1><img src=../estatico/imagens/array.png width=1000 height=212 class=img-fluid alt=\"Imagem responsiva\"></h1></section><nav class=\"navbar navbar-expand-lg  navbar-light bg\"><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavDropdown aria-controls=navbarNavDropdown aria-expanded=false aria-label=\"Toggle navigation\"><section class=navbar-toggler-icon></section></button><section class=\"collapse navbar-collapse nav nav-tabs\" id=navbarNavDropdown><ul class=\"navbar-nav \"><li class=nav-item><a class=\"nav-link text-white\" href=/  target=_self>Home</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/listaFun target=_self>Funcionários</a></li><li class=\"nav-item \"><a class=\"nav-link text-white\" href=/funcionarios/form target=_self>Cadastrar funcionários</a></li><li class=\"nav-item active\"><a class=\"nav-link text-white\" href=/listaPro target=_self>Produtos</a></li><li class=nav-item><a class=\"nav-link text-white\" href=/produtos/form target=_self>Cadastrar produtos</a></li> <li class=nav-item><a class=\"nav-link disabled\" href=#></a></li></ul></section></nav></header><main class=\"col py-3 px-md-5 border bg-light row\"><article class=text-md-left><h2>Sobre nós</h2><figcaption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque consequatur harum fuga aspernatur, quis sunt. Sint, nostrum corrupti ab necessitatibus fugiat commodi, recusandae reprehenderit voluptate perferendis deserunt vitae error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam odio corporis! Obcaecati libero asperiores repudiandae earum itaque hic nobis autem. Doloribus facere labore explicabo voluptatem modi unde dicta placeat. ipsum</figcaption><h2>Nossa Missão</h2><figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum porro possimus delectus placeat accusamus quibusdam minima similique quasi minus quis non pariatur optio, architecto ducimus eaque ad esse excepturi dicta.</figcaption><h2>Nosso Objetivo</h2><figcaption>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae laborum, fuga, aut in doloribus sed voluptatibus omnis provident sunt excepturi veritatis quas velit temporibus possimus repellat obcaecati fugiat! Necessitatibus, animi?</figcaption><h2>Nossa Meta</h2><figcaption>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In perspiciatis dolorem quis perferendis. Eligendi nobis reprehenderit utquae quos libero enim quia? Fuga dignissimos officiis, minima autem doloremque delectus odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse. Consequuntur illo ab non exercitationem inventore eum laboriosam assumenda? Perspiciatis exercitationem minima provident atque dolores corporis enim hic! Sunt, fugit.</figcaption></article></main><footer class=\"page-footer font-small bg \"><section class=\"footer-copyright text-center py-3 text-white\"> © 2020 Copyright: Mercado-Array de Preços <br> Equipe: | José Roberto | Leonardo | </section></footer><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js integrity=sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js integrity=sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q crossorigin=anonymous></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js integrity=sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "45");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mercado-arry$1.0.0/src/app/views/mercadoArray/lista/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
