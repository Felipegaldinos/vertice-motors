import React from 'react';
import { Heart, BadgeCheck, ShieldCheck } from 'lucide-react';

export default function TrustBar() {

  return (<><section className="trust container">
          <span>
            <BadgeCheck /> Uma nova forma de encontrar seu carro
          </span>
          <span>
            <ShieldCheck /> Mais confiança em cada escolha
          </span>
          <span>
            <Heart /> Feito para quem ama dirigir
          </span>
        </section></>);
}
