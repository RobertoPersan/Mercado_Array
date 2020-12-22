// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mercado-arry$1.0.0/src/app/views/mercadoArray/lista/lista.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-BR><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=resetar.css><link rel=stylesheet href=style.css><title>Mercado Array nos preços</title></head><body><header><h1>Mercado Array nos Preços<img src=# alt=\"logo do Mercado\"></h1><nav><ul><li><a href=funcionario.html target=_self>Funcionários</a></li><li><a href=produtos.html target=_self>Produtos</a></li><li><a href=cadastrofuncionario.html target=_self>Cadastrar Funcionário</a></li><li><a href=cadastroproduto.html target=_self>Cadastrar Produto</a></li></ul></nav></header><main><section><h2>Sobre nós</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque consequatur harum fuga aspernatur, quis sunt. Sint, nostrum corrupti ab necessitatibus fugiat commodi, recusandae reprehenderit voluptate perferendis deserunt vitae error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam odio corporis! Obcaecati libero asperiores repudiandae earum itaque hic nobis autem. Doloribus facere labore explicabo voluptatem modi unde dicta placeat. ipsum</p><h2>Nossa Missão</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum porro possimus delectus placeat accusamus quibusdam minima similique quasi minus quis non pariatur optio, architecto ducimus eaque ad esse excepturi dicta.</p><h2>Nosso Objetivo</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae laborum, fuga, aut in doloribus sed voluptatibus omnis provident sunt excepturi veritatis quas velit temporibus possimus repellat obcaecati fugiat! Necessitatibus, animi?</p><h2>Nossa Meta</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In perspiciatis dolorem quis perferendis. Eligendi nobis reprehenderit ut quae quos libero enim quia? Fuga dignissimos officiis, minima autem doloremque delectus odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse. Consequuntur illo ab non exercitationem inventore eum laboriosam assumenda? Perspiciatis exercitationem minima provident atque dolores corporis enim hic! Sunt, fugit.</p></section></main><footer><hr> &copy;Mercado-Array de Preços. <br> Desde 1071</footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "34");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mercado-arry$1.0.0/src/app/views/mercadoArray/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
