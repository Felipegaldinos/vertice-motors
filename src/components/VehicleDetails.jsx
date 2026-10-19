import React from 'react';
import { ArrowRight, MapPin, Fuel, Gauge, CalendarDays } from 'lucide-react';
import { money } from '../utils/formatters';

export default function VehicleDetails({
  selected,
  setLoan,
  open,
}) {

  return (<><>
                <img
                  className="detail-img"
                  src={selected.image}
                  alt={selected.model}
                />
                <div className="detail-body">
                  <div className="overline">SELEÇÃO VERTICE</div>
                  <h2>
                    {selected.brand} {selected.model}
                  </h2>
                  <p>{selected.version}</p>
                  <strong className="detail-price">
                    {money(selected.price)}
                  </strong>
                  <div className="detail-specs">
                    <span>
                      <CalendarDays />
                      {selected.year}
                    </span>
                    <span>
                      <Gauge />
                      {selected.km.toLocaleString("pt-BR")} km
                    </span>
                    <span>
                      <Fuel />
                      Gasolina
                    </span>
                  </div>
                  <p>
                    <MapPin size={15} /> {selected.city}
                  </p>
                  <button
                    className="primary full"
                    onClick={() => open("contact", selected)}
                  >
                    Tenho interesse <ArrowRight size={18} />
                  </button>
                  <button
                    className="secondary full"
                    onClick={() => {
                      setLoan(selected.price);
                      
                      open("finance");
                    }}
                  >
                    Simular financiamento
                  </button>
                  <small>
                    Anúncio de demonstração. Nenhum veículo está sendo
                    comercializado nesta versão.
                  </small>
                </div>
              </></>);
}
