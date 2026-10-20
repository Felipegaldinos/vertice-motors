import React from 'react';
import { ArrowUpRight, Eye, HeartHandshake, Sparkles, Handshake } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { values, team } from '../data/institutional';

const valueIcons = { transparency: Eye, respect: HeartHandshake, care: Sparkles, relationship: Handshake };

export default function AboutPage() {
  return (
    <>
      <PageIntro image="/images/about/sobre-carros.jpg" label="CONHEÇA A VERTICE MOTORS" title={<>Novos caminhos começam<br />com boas relações.</>} description="Nossa paixão é por carros. Nosso compromisso é com as pessoas que vão dirigir cada história.">
        <div className="page-shortcuts"><a href="#/sobre/valores">Nossos valores ↗</a><a href="#/sobre/equipe">Nossa equipe ↗</a></div>
      </PageIntro>
      <section className="about-story container">
        <div>
          <div className="overline">SOBRE NÓS</div>
          <h2>O melhor caminho é aquele<br />que faz sentido para você.</h2>
          <img className="about-story-image" src="/images/about/sobre-carros.jpg" alt="Carro esportivo branco em um showroom com outros veículos ao fundo" loading="lazy" width="1800" height="1063" />
        </div>
        <div className="about-story-copy"><p>A Vertice Motors nasce de uma ideia simples: escolher um veículo deve ser uma experiência tão boa quanto dirigir. Queremos aproximar pessoas de carros que combinam com seus planos, sua rotina e seu jeito de viver.</p><p>Valorizamos o tempo de cada cliente e uma conversa sem complicação. Da descoberta do modelo à entrega das chaves, nossa proposta é tornar cada etapa mais clara, próxima e cuidadosa.</p></div>
      </section>
      <section className="values-section" id="valores"><div className="container"><div className="section-heading"><div><div className="overline">O QUE NOS MOVE</div><h2>Valores que guiam cada escolha.</h2><p>Mais que palavras: a forma como queremos atender você.</p></div></div><div className="values-grid">{values.map(value => { const Icon = valueIcons[value.icon]; return <article className="value-card" key={value.title}><span className="service-icon"><Icon size={24} /></span><h3>{value.title}</h3><p>{value.description}</p></article>; })}</div></div></section>
      <section className="team-section container" id="equipe"><div className="section-heading"><div><div className="overline">GENTE QUE CAMINHA COM VOCÊ</div><h2>Um atendimento. Diferentes cuidados.</h2><p>Conheça as áreas que fazem parte da experiência Vertice.</p></div></div><div className="team-grid">{team.map(area => <article className="team-card" key={area.title}><div className="team-portrait team-portrait-photo"><img src={area.image} alt={`Foto ilustrativa de profissional da área de ${area.title.toLowerCase()}`} loading="lazy" width="800" height="800" /><i>VERTICE · PESSOAS & CAMINHOS</i></div><div className="team-copy"><h3>{area.title}</h3><strong>{area.subtitle}</strong><p>{area.description}</p></div></article>)}</div><p className="institutional-note">Fotos ilustrativas para apresentação das áreas de atendimento.</p></section>
      <section className="institutional-cta container"><div><div className="overline">VAMOS ESCREVER SEU PRÓXIMO CAPÍTULO?</div><h2>O seu próximo caminho está aqui.</h2><p>Conheça a seleção e encontre um veículo que combina com você.</p></div><a className="primary" href="#inventory">Explorar veículos <ArrowUpRight size={18} /></a></section>
    </>
  );
}

