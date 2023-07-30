import React, { useLayoutEffect, useState } from "react";
import { createContext } from "react";

// Create context object
export const CryptoContext = createContext({});

// Create the provider component
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [coinSearch, setCoinSearch] = useState("");

  const getCoinData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    setCryptoData(data);
  };

  const getCryptoData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    setCryptoData(data);
  };

  const getSearchResult = async (query) => {
    // Corrected the template string interpolation here
    const data = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    )
      .then((res) => res.json())
      .then((json) => json);

    console.log(data);
    setSearchData(data.coins);
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptoData, searchData, getSearchResult }}>
      {children}
    </CryptoContext.Provider>
  );
};
