import React, { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
}

interface SearchContextProp {
  search: string;
  setSearch: (value: string) => void;
  searchResult: Product[];
  setSearchResult: (products: Product[]) => void;
}

const SearchContext = createContext<SearchContextProp | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export default function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  return (
    <SearchContext.Provider value={{ search, setSearch, searchResult, setSearchResult }}>
      {children}
    </SearchContext.Provider>
  );
}
