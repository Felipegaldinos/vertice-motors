import React from 'react';
import { ArrowRight, CarFront, ShieldCheck, CircleDollarSign } from 'lucide-react';
import { images } from '../data/vehicles';

const serviceImages = { finance: images.bmw, sell: images.porsche, insurance: images.audi };

export default function Services({
  open,
}) {

  return (<><section className="services-band" id="services"><div className="services container">
          <div className="section-heading">
            <div>
              <div className="overline">A VERTICE VAI COM VOCÊ</div>
              <h2>Muito além da próxima chave.</h2>
              <p>Tudo para simplificar sua vida sobre rodas.</p>
            </div>
          </div>
          <div className="service-grid">
            {[
              [
                CircleDollarSign,
                "Seu carro novo cabe nos planos",
                "Explore possibilidades e simule suas parcelas.",
                "Simular financiamento",
                "finance",
              ],
              [
                CarFront,
                "Hora de seguir em frente?",
                "Seu próximo capítulo começa com uma boa venda.",
                "Anunciar meu veículo",
                "sell",
              ],
              [
                ShieldCheck,
                "Tranquilidade em cada quilômetro",
                "Encontre os cuidados que seu carro merece.",
                "Conhecer seguros",
                "insurance",
              ],
            ].map(([Icon, title, desc, cta, action]) => (
              <button
                className="service-card"
                key={action}
                onClick={() => action === 'insurance' ? window.location.hash = '/seguros' : open(action)}
              >
                <span className="service-icon">
                  <Icon size={26} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="service-cta">
                  {cta}
                  <ArrowRight size={17} />
                </span>
                <img className="service-visual" src={serviceImages[action]} alt="" loading="lazy" width="600" height="340" />
              </button>
            ))}
          </div>
        </div></section></>);
}
