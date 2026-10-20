import { useState } from 'react';
import { initialCars } from '../data/vehicles';
import { filterVehicles } from '../utils/vehicles';
import { readStorage, useLocalStorage } from './useLocalStorage';

export function useMarketplace(showInventory = () => {}) {
  const [tab, setTab] = useState("Carros"),
    [query, setQuery] = useState(""),
    [brand, setBrand] = useState(""),
    [max, setMax] = useState(""),
    [city, setCity] = useState(""),
    [category, setCategory] = useState("Todos"),
    [results, setResults] = useState(false),
    [sort, setSort] = useState("relevance"),
    [modal, setModal] = useState(null),
    [selected, setSelected] = useState(null),
    [advanced, setAdvanced] = useState(false),
    [menu, setMenu] = useState(false),
    [sent, setSent] = useState(false),
    [user, setUser] = useLocalStorage("vertice-user", "", value => typeof value === "string"),
    [favorites, setFavorites] = useLocalStorage("vertice-favorites", [], value => Array.isArray(value) && value.every(Number.isInteger)),
    [onlyFavorites, setOnlyFavorites] = useState(false),
    [loan, setLoan] = useState(180000),
    [cookies, setCookies] = useState(() => !readStorage("vertice-cookies", false));
  function favorite(id) {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      return next;
    });
  }
  function open(name, car = null) {
    setModal(name);
    setSelected(car);
    setSent(false);
    setMenu(false);
  }
  function search(cat = category) {
    setCategory(cat);
    setResults(true);
    setOnlyFavorites(false);
    setMenu(false);
    showInventory();
    setTimeout(
      () =>
        document
          .getElementById("inventory")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  }
  const cars = filterVehicles(initialCars, { tab, query, brand, max, city, category, sort, onlyFavorites, favorites });

  return {
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
    results,
    setResults,
    sort,
    setSort,
    modal,
    setModal,
    selected,
    setSelected,
    advanced,
    setAdvanced,
    menu,
    setMenu,
    sent,
    setSent,
    user,
    setUser,
    favorites,
    setFavorites,
    onlyFavorites,
    setOnlyFavorites,
    loan,
    setLoan,
    cookies,
    setCookies,
    favorite,
    open,
    search,
    cars,
  };
}
