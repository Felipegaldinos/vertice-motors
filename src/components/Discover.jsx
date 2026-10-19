import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { images } from '../data/vehicles';

export default function Discover({
  setTab,
  search,
}) {

  return (<><section className="discover container" id="discover">
          <div className="section-heading">
            <div>
              <div className="overline">QUAL É A SUA DIREÇÃO?</div>
              <h2>Um carro para cada versão de você.</h2>
            </div>
            <span className="muted">Sua rotina. Seu estilo. Sua escolha.</span>
          </div>
          <div className="lifestyle-grid">
            {[
              [
                "Para ir além",
                "SUVs para todos os caminhos",
                "SUV",
                images.jeep,
              ],
              [
                "Para sentir a estrada",
                "Esportivos que despertam emoções",
                "Esportivo",
                images.porsche,
              ],
              [
                "Para viver o dia a dia",
                "Conforto em cada trajeto",
                "Sedã",
                images.mercedes,
              ],
            ].map(([title, desc, type, img]) => (
              <button
                key={title}
                onClick={() => {
                  setTab("Carros");
                  search(type);
                }}
                style={{
                  backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,0) 90%),url(${img})`,
                }}
              >
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <span>
                  <ArrowUpRight />
                </span>
              </button>
            ))}
          </div>
        </section></>);
}
