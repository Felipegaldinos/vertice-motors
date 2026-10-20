import { useEffect, useState } from 'react';

export function getPageFromHash(hash = '') {
  if (hash.startsWith('#/sobre')) return 'about';
  if (hash.startsWith('#/seguros')) return 'insurance';
  return 'home';
}

export function useSiteNavigation() {
  const [page, setPage] = useState(() => getPageFromHash(typeof window === 'undefined' ? '' : window.location.hash));

  useEffect(() => {
    function update() {
      setPage(getPageFromHash(window.location.hash));
      requestAnimationFrame(() => {
        const hash = window.location.hash;
        const id = hash.includes('#/') ? hash.split('/')[2] : hash.slice(1);
        if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    window.addEventListener('hashchange', update);
    update();
    return () => window.removeEventListener('hashchange', update);
  }, []);

  useEffect(() => {
    document.title = page === 'about' ? 'Sobre nós e equipe | Vertice Motors' : page === 'insurance' ? 'Seguros | Vertice Motors' : 'Vertice Motors | Seu próximo caminho começa aqui';
  }, [page]);

  function showInventory() {
    setPage('home');
    window.location.hash = 'inventory';
    requestAnimationFrame(() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' }));
  }

  return { page, showInventory };
}
