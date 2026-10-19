import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { ArrowRight, Search, CarFront, Bike, MapPin, SlidersHorizontal } from 'lucide-react';
import { initialCars } from '../data/vehicles';

export default function VehicleSearch({
  tab,
  setTab,
  query,
  setQuery,
  brand,
  setBrand,
  max,
  setMax,
  city,
  setCity,
  category,
  setCategory,
  setSort,
  advanced,
  setAdvanced,
  open,
  search,
}) {

  return (<><section className="search-panel container">
          <div className="search-tabs">
            <button
              className={tab === "Carros" ? "active" : ""}
              onClick={() => {
                setTab("Carros");
                setCategory("Todos");
              }}
            >
              <CarFront size={22} />
              Comprar carros
            </button>
            <button
              className={tab === "Motos" ? "active" : ""}
              onClick={() => {
                setTab("Motos");
                setCategory("Todos");
              }}
            >
              <Bike size={22} />
              Comprar motos
            </button>
            <button className="sell-tab" onClick={() => open("sell")}>
              Quero vender <ArrowUpRight size={17} />
            </button>
          </div>
          <div className="search-main">
            <div className="search-heading">
              <h2>Qual vai ser o seu próximo?</h2>
              <span>Encontre. Compare. Se apaixone.</span>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                search();
              }}
            >
              <label className="query">
                <Search size={20} />
                <input
                  aria-label="Marca, modelo ou palavra-chave"
                  placeholder="Digite marca, modelo ou palavra-chave"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
              <label className="select-field">
                <span>Onde você procura?</span>
                <select
                  aria-label="Localização"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Todo o Brasil</option>
                  <option>São Paulo</option>
                  <option>Campinas</option>
                  <option>Curitiba</option>
                </select>
                <MapPin size={18} />
              </label>
              <button className="primary search-btn" type="submit">
                Ver ofertas <ArrowRight size={18} />
              </button>
            </form>
            <div className="search-bottom">
              <div className="quick-links">
                <button
                  onClick={() => {
                    setMax("");
                    search("Todos");
                  }}
                >
                  Todos os veículos
                </button>
                <button
                  onClick={() => {
                    setMax("200000");
                    search("Todos");
                  }}
                >
                  Até R$ 200 mil
                </button>
                <button
                  onClick={() => {
                    setSort("new");
                    search("Todos");
                  }}
                >
                  Seminovos selecionados
                </button>
              </div>
              <button
                className="advanced"
                onClick={() => setAdvanced(!advanced)}
              >
                <SlidersHorizontal size={15} /> Mais filtros
              </button>
            </div>
            {advanced && (
              <div className="advanced-fields">
                <label>
                  Marca
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value="">Todas as marcas</option>
                    {[...new Set(initialCars.map((c) => c.brand))].map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Preço máximo
                  <input
                    type="number"
                    min="0"
                    value={max}
                    placeholder="Sem limite"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </label>
                <label>
                  Carroceria
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {["Todos", "SUV", "Sedã", "Esportivo", "Moto"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
              </div>
            )}
          </div>
        </section></>);
}
