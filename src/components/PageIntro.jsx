import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PageIntro({ label, title, description, children, image }) {
  return (
    <section className={'page-intro' + (image ? ' page-intro-with-image' : '')}>
      {image && <img className="page-intro-image" src={image} alt="" fetchPriority="high" width="1600" height="1067" />}
      <div className="container">
      <a className="back-link" href="#"><ArrowLeft size={15} /> Voltar ao início</a>
      <div className="overline">{label}</div><h1>{title}</h1><p>{description}</p>{children}
    </div></section>
  );
}
