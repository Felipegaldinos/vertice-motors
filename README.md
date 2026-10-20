# Vertice Motors

Aplicação React com Vite. Esta refatoração preserva a interface existente e separa as responsabilidades para manutenção.

## Executar

```sh
npm install
npm run dev
```

## Validar

```sh
node --test tests/marketplace.test.js
node tests/render-components.mjs
npm run build
```

## Páginas institucionais

- `#/sobre`: apresentação, valores e áreas da equipe; atalhos `#/sobre/valores` e `#/sobre/equipe`.
- `#/seguros`: modalidades de proteção, etapas de escolha e perguntas frequentes.
- A inicial inclui marcas que filtram o catálogo e um resumo institucional.
- `src/data/institutional.js` concentra os textos, áreas da equipe, marcas e modalidades de seguro. Nomes de profissionais, seguradoras parceiras e produtos reais devem ser inseridos após confirmação.
- A navegação por hash funciona na hospedagem estática e permite voltar ao catálogo de qualquer página, sem perder os favoritos.

## Organização

- `src/main.jsx`: inicialização do React e importação do CSS.
- `src/App.jsx`: composição da página e conexão entre os componentes.
- `src/components/`: seções da página, card reutilizável e conteúdos dos modais.
- `src/hooks/useMarketplace.js`: estado e ações da experiência de compra.
- `src/hooks/useLocalStorage.js`: persistência com validação e tratamento de indisponibilidade.
- `src/data/vehicles.js`: catálogo demonstrativo e imagens.
- `src/utils/vehicles.js`: filtro e ordenação sem mutar o catálogo original.
- `src/utils/financing.js`: cálculo financeiro independente da interface.
- `src/utils/formatters.js`: formatação monetária.
- `src/style.css`: estilos existentes e regras responsivas, preservados.
- `tests/`: validações das regras de negócio e renderização das telas.

Para modificar um anúncio, edite `data/vehicles.js`. Para alterar o card, edite `VehicleCard.jsx`. Para mudar a simulação, edite `FinanceSimulator.jsx` e `utils/financing.js`. Novas telas de modal são compostas em `ModalRouter.jsx`.

Anúncios, formulários e simulações são demonstrativos; não enviam propostas nem processam financiamentos reais.
