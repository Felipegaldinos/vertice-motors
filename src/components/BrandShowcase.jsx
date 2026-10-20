import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { brands } from '../data/institutional';

export default function BrandShowcase({ onSelectBrand }) {
  const [paused, setPaused] = useState(false);
  return (
    <section className="brand-showcase" id="marcas" aria-labelledby="brands-title">
      <div className="container section-heading"><div><div className="overline">DIFERENTES ESTILOS. A MESMA PAIXÃO.</div><h2 id="brands-title">Marcas que você encontra por aqui.</h2><p>Explore os veículos da nossa seleção multimarcas.</p></div><button className="brand-motion-toggle" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={15} /> : <Pause size={15} />}{paused ? 'Reproduzir marcas' : 'Pausar marcas'}</button></div>
      <div className={'brand-marquee' + (paused ? ' is-paused' : '')} role="region" aria-label="Marcas de veículos em movimento contínuo">
        <div className="brand-track">{[0, 1].map(group => <div className="brand-track-group" key={group} aria-hidden={group === 1 ? true : undefined}>{[...brands, ...brands].map((brand, index) => <button className="brand-logo-card" key={`${brand}-${index}`} tabIndex={group === 1 || index >= brands.length ? -1 : 0} aria-hidden={index >= brands.length ? true : undefined} onClick={() => onSelectBrand(brand.toUpperCase())} aria-label={`Ver veículos ${brand}`}><span className="brand-logo-circle"><img src={`/images/brands/${brand.toLowerCase()}.png`} alt="" width="86" height="86" /></span><span>{brand}</span></button>)}</div>)}</div>
      </div>
      <p className="institutional-note container">Marcas presentes no catálogo demonstrativo. A exibição não indica representação ou parceria oficial.</p>
    </section>
  );
}
