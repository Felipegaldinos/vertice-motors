import React from 'react';
import { X, Check } from 'lucide-react';

export default function CookieNotice({
  cookies,
  setCookies,
  open,
}) {

  return (<>{cookies && (
        <div className="cookie">
          <p>
            Seu caminho, suas escolhas. Usamos armazenamento local para lembrar
            seus favoritos e preferências.{" "}
            <button onClick={() => open("privacy")}>Saiba mais</button>
          </p>
          <button
            className="primary"
            onClick={() => {
              try { localStorage.setItem("vertice-cookies", "yes"); } catch { /* Optional preference. */ }
              setCookies(false);
            }}
          >
            Entendi <Check size={15} />
          </button>
          <button aria-label="Fechar aviso" onClick={() => setCookies(false)}>
            <X size={17} />
          </button>
        </div>
      )}</>);
}
