import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { dealershipImages } from '../src/data/media.js';

test('every showroom photograph is packaged locally as a valid JPEG', () => {
  assert.equal(Object.keys(dealershipImages).length, 21);
  assert.equal(new Set(Object.values(dealershipImages)).size, 21);
  for (const [name, path] of Object.entries(dealershipImages)) {
    assert.ok(path.startsWith('/images/dealership/'), name);
    const bytes = readFileSync(new URL('../public' + path, import.meta.url));
    assert.ok(bytes.length > 10000, name);
    assert.equal(bytes.readUInt16BE(0), 0xffd8, name);
  }
});

test('each photograph is assigned to exactly one content slot', () => {
  const references = new Map();
  function inspect(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const file = new URL(entry.name, directory);
      if (entry.isDirectory()) inspect(new URL(entry.name + '/', directory));
      else if (/\.(jsx|js)$/.test(entry.name)) {
        const source = readFileSync(file, 'utf8');
        for (const [, key] of source.matchAll(/\b(?:images|dealershipImages)\.(\w+)/g)) {
          references.set(key, (references.get(key) || 0) + 1);
        }
      }
    }
  }
  inspect(new URL('../src/', import.meta.url));
  for (const key of Object.keys(dealershipImages)) {
    assert.equal(references.get(key), 1, `Photo ${key} must serve a single content slot`);
  }
});
