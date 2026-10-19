import { useEffect, useState } from 'react';

export function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return fallback;
    try { return JSON.parse(stored); } catch { return stored; }
  } catch { return fallback; }
}

export function useLocalStorage(key, fallback, validate = () => true) {
  const [value, setValue] = useState(() => {
    const stored = readStorage(key, fallback);
    return validate(stored) ? stored : fallback;
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Storage may be disabled or full. */ }
  }, [key, value]);
  return [value, setValue];
}
