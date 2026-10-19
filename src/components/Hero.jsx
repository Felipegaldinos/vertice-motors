import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { images } from '../data/vehicles';

export default function Hero({
  setResults,
}) {

  return (<><section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(10,15,20,.89) 0%,rgba(10,15,20,.65) 38%,rgba(10,15,20,.04) 75%),url(${images.hero})`,
          }}
        >
          <div className="hero-inner">
            <div className="eyebrow">
              <span /> NOVOS CAMINHOS, NOVAS POSSIBILIDADES
            </div>
            <h1>
              Seu próximo carro.
              <br />
              Sua próxima <em>história.</em>
            </h1>
            <p>
              Encontre o veículo que combina com você.
              <br />O próximo passo começa na Vertice.
            </p>
            <a
              className="hero-link"
              href="#inventory"
              onClick={() => setResults(true)}
            >
              Encontre o seu próximo destino <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="hero-index">
            <b>01</b>
            <span>/ 03</span>
            <i />
            <i />
            <i />
          </div>
          <div className="hero-caption">
            PERFORMANCE QUE INSPIRA. <ArrowUpRight size={16} />
          </div>
        </section></>);
}
