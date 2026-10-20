import React from 'react';
import { ArrowUpRight, CarFront, UsersRound, Wrench, Check, ShieldCheck } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { insuranceOptions, insuranceFaqs } from '../data/institutional';

const icons = { car: CarFront, people: UsersRound, assistance: Wrench };

export default function InsurancePage({ onInterest }) {
  return (
    <>
      <PageIntro image="/images/insurance/protecao-automotiva.jpg" label="PROTEÇÃO PARA SEGUIR EM FRENTE" title={<>Aproveite o caminho.<br />Conheça suas opções de proteção.</>} description="Entenda as modalidades de seguro e os serviços que podem acompanhar sua próxima conquista."><span className="intro-tag"><ShieldCheck size={16} /> Sua tranquilidade também faz parte da escolha.</span></PageIntro>
      <section className="insurance-section container"><div className="section-heading"><div><div className="overline">CADA ROTINA PEDE UM CUIDADO</div><h2>Proteção que faz sentido para você.</h2><p>Modalidades para conhecer e avaliar conforme o seu perfil.</p></div></div><div className="insurance-grid">{insuranceOptions.map(option => { const Icon = icons[option.icon]; return <article className="insurance-card" key={option.id}><span className="service-icon"><Icon size={27} /></span><div className="overline">{option.label}</div><h3>{option.name}</h3><p>{option.description}</p><ul>{option.items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><button className="text-link" onClick={() => onInterest(option.name)}>Tenho interesse <ArrowUpRight size={17} /></button></article>; })}</div><p className="institutional-note">Coberturas e assistências ilustrativas, sujeitas à disponibilidade, aos limites e às condições da apólice. Seguradoras parceiras e produtos efetivamente comercializados ainda não foram informados.</p></section>
      <section className="insurance-steps"><div className="container"><div className="overline">ESCOLHA COM INFORMAÇÃO</div><h2>Mais clareza antes de contratar.</h2><div className="insurance-step-grid">{[['01', 'Entenda sua rotina', 'Pense no uso do veículo e nas situações em que uma proteção faz diferença.'], ['02', 'Compare as condições', 'Avalie coberturas, limites, franquias e exclusões de cada proposta.'], ['03', 'Decida com tranquilidade', 'Confirme as condições do produto e esclareça suas dúvidas antes de contratar.']].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="insurance-faq container"><div><div className="overline">SEM DÚVIDAS PELO CAMINHO</div><h2>Perguntas frequentes.</h2><p>Um bom começo para entender sua proteção.</p></div><div>{insuranceFaqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
    </>
  );
}


