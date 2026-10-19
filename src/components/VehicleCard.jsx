import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Heart, MapPin, BadgeCheck } from 'lucide-react';
import { money } from '../utils/formatters';

export default function VehicleCard({
  vehicle,
  favorites,
  favorite,
  open,
}) { return (<article className="car-card">
                <div className="car-image" onClick={() => open("detail", vehicle)}>
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    loading="lazy"
                  />
                  <span className="car-badge">
                    <BadgeCheck size={12} />
                    {vehicle.badge}
                  </span>
                  <button
                    className={
                      "heart " + (favorites.includes(vehicle.id) ? "saved" : "")
                    }
                    aria-label={
                      favorites.includes(vehicle.id)
                        ? "Remover dos favoritos"
                        : "Salvar nos favoritos"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      favorite(vehicle.id);
                    }}
                  >
                    <Heart
                      size={19}
                      fill={favorites.includes(vehicle.id) ? "currentColor" : "none"}
                    />
                  </button>
                  <div className="image-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <button className="car-info" onClick={() => open("detail", vehicle)}>
                  <h3>
                    {vehicle.brand} <b>{vehicle.model}</b>
                  </h3>
                  <p>{vehicle.version}</p>
                  <div className="car-meta">
                    <span>
                      {vehicle.year}/{vehicle.year}
                    </span>
                    <span>{vehicle.km.toLocaleString("pt-BR")} km</span>
                  </div>
                  <strong>{money(vehicle.price)}</strong>
                  <div className="car-location">
                    <span>
                      <MapPin size={13} />
                      {vehicle.city}
                    </span>
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </article>); }
