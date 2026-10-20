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
  assert.match(home, /Marcas que você encontra/);
  assert.match(home, /Construir confiança/);
  const { default: AboutPage } = await server.ssrLoadModule('/src/pages/AboutPage.jsx');
  const about = renderToString(React.createElement(AboutPage));
  assert.match(about, /id="equipe"/);
  assert.match(about, /id="valores"/);
  assert.match(about, /Transparência em cada conversa/);
  const { default: InsurancePage } = await server.ssrLoadModule('/src/pages/InsurancePage.jsx');
  const insurance = renderToString(React.createElement(InsurancePage, { onInterest: () => {} }));
  assert.match(insurance, /Seguro compreensivo/);
  assert.match(insurance, /Responsabilidade civil/);
  assert.equal((insurance.match(/<details/g) || []).length, 3);
  const { getPageFromHash } = await server.ssrLoadModule('/src/hooks/useSiteNavigation.js');
  assert.equal(getPageFromHash('#/sobre/equipe'), 'about');
  assert.equal(getPageFromHash('#/seguros'), 'insurance');
  assert.equal(getPageFromHash('#inventory'), 'home');
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
  console.log('Página inicial, páginas institucionais, rotas, nove modais e confirmações validados.');
} finally {
  await server.close();
}
