import assert from 'node:assert/strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const home = renderToString(React.createElement(App));
  assert.match(home, /Seu próximo carro/);
  assert.match(home, /BMW/);
  const { default: ModalRouter } = await server.ssrLoadModule('/src/components/ModalRouter.jsx');
  const { initialCars } = await server.ssrLoadModule('/src/data/vehicles.js');
  const noop = () => {};
  const props = { setModal: noop, selected: initialCars[0], setSelected: noop, sent: false, setSent: noop, setUser: noop, loan: 180000, setLoan: noop, open: noop };
  for (const modal of ['detail', 'finance', 'sell', 'contact', 'login', 'care', 'privacy', 'terms', 'help']) {
    const html = renderToString(React.createElement(ModalRouter, { ...props, modal }));
    assert.match(html, /role="dialog"/, modal);
    if (['sell', 'contact', 'login'].includes(modal)) {
      assert.match(html, /<form/, modal);
      assert.match(renderToString(React.createElement(ModalRouter, { ...props, modal, sent: true })), /Continuar explorando/);
    }
  }
  console.log('Página inicial, nove modais e confirmações renderizados sem erros.');
} finally {
  await server.close();
}
