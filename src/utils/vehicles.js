export function filterVehicles(vehicles, { tab, query, brand, max, city, category, sort, onlyFavorites, favorites }) {
 const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');
 return vehicles.filter(vehicle =>
  (onlyFavorites ? favorites.includes(vehicle.id) : tab === 'Motos' ? vehicle.type === 'Moto' : vehicle.type !== 'Moto') &&
  (!normalizedQuery || [vehicle.brand, vehicle.model, vehicle.type].join(' ').toLocaleLowerCase('pt-BR').includes(normalizedQuery)) &&
  (!brand || vehicle.brand === brand) && (!max || vehicle.price <= Number(max)) &&
  (!city || vehicle.city.includes(city)) && (category === 'Todos' || vehicle.type === category)
 ).sort((a,b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : sort === 'new' ? b.year - a.year : 0);
}
