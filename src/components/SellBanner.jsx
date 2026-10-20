import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { KeyRound } from 'lucide-react';
import { images } from '../data/vehicles';

export default function SellBanner({
  open,
}) {

  return (<><section className="sell-banner container">
          <img className="sell-banner-photo" src={images.porsche} alt="" loading="lazy" width="700" height="450" />
          <div className="banner-icon">
            <KeyRound size={55} />
          </div>
          <div>
            <span>O PRÓXIMO PASSO É SEU</span>
            <h2>Seu carro merece uma nova história.</h2>
            <p>Conecte seu veículo a quem está procurando por ele.</p>
          </div>
          <button onClick={() => open("sell")}>
            Quero anunciar <ArrowUpRight size={19} />
          </button>
        </section></>);
}
