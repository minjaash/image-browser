import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [recentSearches, setRecentSearches] = useState([]);

  const addSearch = (query) => {
    setRecentSearches((prev) => {
      const updated = [query, ...prev.filter((item) => item !== query)];
      return updated.slice(0, 5);
    });
  };

  return (
    <SearchContext.Provider value={{ recentSearches, addSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
