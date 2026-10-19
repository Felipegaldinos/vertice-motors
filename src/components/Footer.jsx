import React from 'react';

export default function Footer({
  open,
}) {

  return (<><footer>
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
