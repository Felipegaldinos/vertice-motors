import React from 'react';
import { Heart, Menu } from 'lucide-react';

export default function Header({
  page = 'home',
  showInventory = () => {},
  setQuery,
  setBrand,
  setMax,
  setCity,
  setCategory,
  setResults,
  menu,
  setMenu,
  favorites,
  setOnlyFavorites,
  open,
  search,
}) {

  return (<><header>
        <a className="logo" href="#" aria-label="Vertice Motors início">
          <span className="logo-symbol">
            V<span> /</span>
          </span>
          <span>
            vertice<span className="logo-motors">motors</span>
          </span>
        </a>
        <nav aria-label="Navegação principal" className={menu ? "mobile-open" : ""}>
          <a href="#" aria-current={page === 'home' ? 'page' : undefined} onClick={() => setMenu(false)}>Início</a>
          <a href="#/sobre" aria-current={page === 'about' ? 'page' : undefined} onClick={() => setMenu(false)}>Sobre nós</a>
          <a href="#/sobre/equipe" onClick={() => setMenu(false)}>Equipe</a>
          <a href="#/sobre/valores" onClick={() => setMenu(false)}>Nossos valores</a>
          <a href="#marcas" onClick={() => setMenu(false)}>Marcas</a>
          <a href="#/seguros" aria-current={page === 'insurance' ? 'page' : undefined} onClick={() => setMenu(false)}>Seguros</a>
          <button onClick={() => { setOnlyFavorites(false); search('Todos'); }}>Veículos</button>
          <button className="nav-finance" onClick={() => open('finance')}>Financiar</button>
          <button className="nav-sell" onClick={() => open('sell')}>Vender meu carro</button>
        </nav>
        <div className="header-actions">
          <button
            className="favorite-top"
            onClick={() => {
              setQuery("");
              setBrand("");
              setMax("");
              setCity("");
              setCategory("Todos");
              setOnlyFavorites(true);
              setResults(true);
              setMenu(false);
              showInventory();
              setTimeout(
                () =>
                  document
                    .getElementById("inventory")
                    ?.scrollIntoView({ behavior: "smooth" }),
                50,
              );
            }}
            aria-label="Ver favoritos"
          >
            <Heart size={21} />
            {favorites.length > 0 && <i>{favorites.length}</i>}
          </button>
          <button
            className="menu"
            aria-label="Abrir navegação"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <Menu />
          </button>
        </div>
      </header></>);
}
