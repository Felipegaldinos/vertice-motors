import React from 'react';
import { ChevronDown, Heart, UserRound, Menu } from 'lucide-react';

export default function Header({
  setQuery,
  setBrand,
  setMax,
  setCity,
  setCategory,
  setResults,
  menu,
  setMenu,
  user,
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
        <nav className={menu ? "mobile-open" : ""}>
          <button
            onClick={() => {
              setOnlyFavorites(false);
              search("Todos");
            }}
          >
            Comprar <ChevronDown size={13} />
          </button>
          <button onClick={() => open("sell")}>
            Vender <ChevronDown size={13} />
          </button>
          <button onClick={() => open("finance")}>
            Financiar <ChevronDown size={13} />
          </button>
          <button onClick={() => open("care")}>
            Serviços <ChevronDown size={13} />
          </button>
          <a href="#discover" onClick={() => setMenu(false)}>
            Descobrir <ChevronDown size={13} />
          </a>
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
              setTimeout(
                () =>
                  document
                    .getElementById("inventory")
                    .scrollIntoView({ behavior: "smooth" }),
                50,
              );
            }}
            aria-label="Ver favoritos"
          >
            <Heart size={21} />
            {favorites.length > 0 && <i>{favorites.length}</i>}
          </button>
          <span className="divider" />
          <button className="login" onClick={() => open("login")}>
            <UserRound size={21} />
            <span>{user || "Entrar"}</span>
          </button>
          <button
            className="menu"
            aria-label="Abrir navegação"
            onClick={() => setMenu(!menu)}
          >
            <Menu />
          </button>
        </div>
      </header></>);
}
