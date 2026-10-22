import React from 'react';
import { ArrowUpRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { images } from '../data/vehicles';

export default function InstitutionalPreview() {
  return (
    <section className="institutional-preview container" aria-labelledby="institutional-title">
      <div className="institutional-preview-copy">
        <div className="overline">PESSOAS ANTES DE VEÍCULOS</div>
        <h2 id="institutional-title">Mais que entregar chaves.<br />Construir confiança.</h2>
        <p>Um carro faz parte da sua vida. Por isso, acreditamos em uma escolha feita com escuta, informação e respeito ao seu momento.</p>
        <a className="text-link" href="#/sobre">Conheça a Vertice <ArrowUpRight size={18} /></a>
      <div className="preview-principles">
        <div><HeartHandshake /><h3>Proximidade de verdade</h3><p>Atendimento que começa entendendo você.</p></div>
        <div><ShieldCheck /><h3>Clareza para decidir</h3><p>Uma conversa transparente em cada etapa.</p></div>
      </div>
      </div>
      <div className="institutional-preview-photo">
        <img src={images.homeAbout} alt="Consultora recebendo clientes na concessionária fictícia Vertice Motors" loading="lazy" width="1536" height="1024" />
        <div><span>VERTICE MOTORS</span><strong>A confiança move<br />novas histórias.</strong></div>
      </div>
    </section>
  );
}
