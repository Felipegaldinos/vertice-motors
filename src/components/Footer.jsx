import React from 'react';

export default function Footer({
  open,
}) {

  return (<><footer>
        <nav className="container institutional-footer-nav" aria-label="Navegação institucional">
          <a href="#/sobre">Sobre nós</a><a href="#/sobre/equipe">Equipe</a><a href="#/sobre/valores">Nossos valores</a><a href="#marcas">Marcas</a><a href="#/seguros">Seguros</a><a href="#inventory">Veículos</a>
        </nav>
        <div className="container footer-top">
          <a href="#" className="logo">
            <span className="logo-symbol">V /</span>
            <span>
              vertice<span className="logo-motors">motors</span>
            </span>
          </a>
          <p>Conectamos pessoas, carros e novos caminhos.</p>
          <a href="#">Voltar ao topo ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Vertice Motors. Todos os direitos
            reservados.
          </span>
          <div>
            <button onClick={() => open("privacy")}>Privacidade</button>
            <button onClick={() => open("terms")}>Termos de uso</button>
            <button onClick={() => open("help")}>Precisa de ajuda?</button>
          </div>
        </div>
      </footer></>);
}
