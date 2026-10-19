import React from 'react';
import VehicleCard from './VehicleCard';
import { ArrowRight, Search } from 'lucide-react';

export default function VehicleInventory({
  setQuery,
  setBrand,
  setMax,
  setCity,
  category,
  setCategory,
  results,
  setResults,
  sort,
  setSort,
  favorites,
  onlyFavorites,
  setOnlyFavorites,
  favorite,
  open,
  search,
  cars,
}) {

  return (<><section className="inventory container" id="inventory">
          <div className="section-heading">
            <div>
              <div className="overline">ESCOLHIDOS PARA VOCÊ</div>
              <h2>
                {onlyFavorites
                  ? "Sua garagem de favoritos"
                  : results
                    ? "Encontre o seu próximo carro"
                    : "Grandes carros. Novas histórias."}
              </h2>
              <p>
                {onlyFavorites
                  ? "Os veículos que conquistaram você."
                  : "Uma seleção especial para o seu próximo capítulo."}
              </p>
            </div>
            <button
              className="text-link"
              onClick={() => {
                setQuery("");
                setBrand("");
                setMax("");
                setCity("");
                setOnlyFavorites(false);
                search("Todos");
              }}
            >
              Ver todos os veículos <ArrowRight size={17} />
            </button>
          </div>
          <div className="inventory-toolbar">
            <div className="pills">
              {["Todos", "SUV", "Sedã", "Esportivo"].map((c) => (
                <button
                  key={c}
                  className={category === c ? "active" : ""}
                  onClick={() => {
                    setCategory(c);
                    setResults(true);
                  }}
                >
                  {c === "Todos" ? "Todos os carros" : c}
                </button>
              ))}
            </div>
            <select
              aria-label="Ordenar veículos"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="relevance">Mais relevantes</option>
              <option value="low">Menor preço</option>
              <option value="high">Maior preço</option>
              <option value="new">Mais novos</option>
            </select>
          </div>
          <div className="car-grid">
            {cars.slice(0, results ? 20 : 4).map((c) => (
              <VehicleCard key={c.id} vehicle={c} favorites={favorites} favorite={favorite} open={open} />
            ))}
          </div>
          {!cars.length && (
            <div className="empty">
              <Search size={35} />
              <h3>Nenhum veículo por aqui ainda.</h3>
              <p>
                {onlyFavorites
                  ? "Toque no coração de um anúncio para salvar."
                  : "Experimente outra marca, cidade ou faixa de preço."}
              </p>
              <button
                className="primary"
                onClick={() => {
                  setQuery("");
                  setMax("");
                  setBrand("");
                  setCity("");
                  setOnlyFavorites(false);
                  setCategory("Todos");
                }}
              >
                Explorar veículos
              </button>
            </div>
          )}
          <div className="demo-note">
            Anúncios demonstrativos. Imagens ilustrativas e valores de exemplo.
          </div>
        </section></>);
}
