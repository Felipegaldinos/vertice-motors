import test from 'node:test';
import assert from 'node:assert/strict';
import { filterVehicles } from '../src/utils/vehicles.js';
import { calculateFinancing } from '../src/utils/financing.js';
import { initialCars } from '../src/data/vehicles.js';

const filters = { tab: 'Carros', query: '', brand: '', max: '', city: '', category: 'Todos', sort: 'relevance', onlyFavorites: false, favorites: [] };

test('combines price, category and city without mutating inventory', () => {
  const original = initialCars.map(vehicle => vehicle.id);
  const result = filterVehicles(initialCars, { ...filters, category: 'SUV', city: 'São Paulo', max: '200000' });
  assert.deepEqual(result.map(vehicle => vehicle.model), ['Compass']);
  filterVehicles(initialCars, { ...filters, sort: 'low' });
  assert.deepEqual(initialCars.map(vehicle => vehicle.id), original);
});

test('supports normalized search, motorcycles and favorites', () => {
  assert.equal(filterVehicles(initialCars, { ...filters, query: '  bMw  ' }).length, 1);
  assert.equal(filterVehicles(initialCars, { ...filters, tab: 'Motos' })[0].type, 'Moto');
  assert.equal(filterVehicles(initialCars, { ...filters, onlyFavorites: true, favorites: [6] })[0].id, 6);
});

test('calculates installments and caps the entry at the vehicle value', () => {
  const loan = calculateFinancing(180000, 60000, 48);
  assert.ok(Math.abs(loan.installment - 3904.28) < 1);
  assert.equal(calculateFinancing(100000, 150000, 48).installment, 0);
  assert.equal(calculateFinancing(12000, 0, 12, 0).installment, 1000);
});
