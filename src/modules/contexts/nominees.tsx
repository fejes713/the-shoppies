import React, { useState, createContext, useEffect } from "react";

// ideally we want to have shared types between API and Front End code
export type Nominee = {
  imdbID: string;
  Title: string;
  Year: string;
  Genre: string;
  imdbRating: string;
  [key: string]: any;
};

interface NomineesContextProps {
  searchedNominees: Nominee[];
  setSearchedNominees: (nominees: Nominee[]) => void;
  totalSearchedNominees: number;
  setTotalSearchedNominees: (count: number) => void;
  favorites: Nominee[];
  setFavorites: (nominees: Nominee[]) => void;
  addToFavorites: (nominee: Nominee) => void;
  removeFromFavorites: (nomineeImdbID: string) => void;
}

export const NomineesContext = createContext<NomineesContextProps>({
  searchedNominees: [],
  setSearchedNominees: () => {},
  totalSearchedNominees: 0,
  setTotalSearchedNominees: () => {},
  favorites: [],
  setFavorites: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const NomineesProvider: React.FC = ({ children }) => {
  const [searchedNominees, setSearchedNominees] = useState<Nominee[]>([]);
  const [totalSearchedNominees, setTotalSearchedNominees] = useState<number>(0);
  const [favorites, setFavorites] = useState<Nominee[]>([]);

  // gets from local storage
  useEffect(() => {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, []);

  // sets favorites to local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (newNominee: Nominee) => {
    if (favorites.length === 5) return;
    setFavorites((prevFavorites: Nominee[]) => [...prevFavorites, newNominee]);
  };

  const removeFromFavorites = (nomineeImdbID: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((nominee) => nominee.imdbID !== nomineeImdbID)
    );
  };

  const value = {
    searchedNominees,
    setSearchedNominees,
    totalSearchedNominees,
    setTotalSearchedNominees,
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <NomineesContext.Provider value={value}>
      {children}
    </NomineesContext.Provider>
  );
};
