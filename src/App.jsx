import React from 'react';
import { useMarketplace } from './hooks/useMarketplace';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleSearch from './components/VehicleSearch';
import TrustBar from './components/TrustBar';
import VehicleInventory from './components/VehicleInventory';
import Services from './components/Services';
import Discover from './components/Discover';
import SellBanner from './components/SellBanner';
import Footer from './components/Footer';
import CookieNotice from './components/CookieNotice';
import ModalRouter from './components/ModalRouter';

export default function App() {
  const {
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
  } = useMarketplace();
return (<>
      <Header
        setQuery={setQuery}
        setBrand={setBrand}
        setMax={setMax}
        setCity={setCity}
        setCategory={setCategory}
        setResults={setResults}
        menu={menu}
        setMenu={setMenu}
        user={user}
        favorites={favorites}
        setOnlyFavorites={setOnlyFavorites}
        open={open}
        search={search}
      />
      <main>
        <Hero setResults={setResults} />
        <VehicleSearch
        tab={tab}
        setTab={setTab}
        query={query}
        setQuery={setQuery}
        brand={brand}
        setBrand={setBrand}
        max={max}
        setMax={setMax}
        city={city}
        setCity={setCity}
        category={category}
        setCategory={setCategory}
        setSort={setSort}
        advanced={advanced}
        setAdvanced={setAdvanced}
        open={open}
        search={search}
      />
        <TrustBar  />
        <VehicleInventory
        setQuery={setQuery}
        setBrand={setBrand}
        setMax={setMax}
        setCity={setCity}
        category={category}
        setCategory={setCategory}
        results={results}
        setResults={setResults}
        sort={sort}
        setSort={setSort}
        favorites={favorites}
        onlyFavorites={onlyFavorites}
        setOnlyFavorites={setOnlyFavorites}
        favorite={favorite}
        open={open}
        search={search}
        cars={cars}
      />
        <Services open={open} />
        <Discover setTab={setTab} search={search} />
        <SellBanner open={open} />
      </main>
      <Footer open={open} />
      <CookieNotice cookies={cookies} setCookies={setCookies} open={open} />
      <ModalRouter
        modal={modal}
        setModal={setModal}
        selected={selected}
        setSelected={setSelected}
        sent={sent}
        setSent={setSent}
        setUser={setUser}
        loan={loan}
        setLoan={setLoan}
        open={open}
      />
    </>);
}
