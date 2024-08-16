"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type FavoritesContextParams = {
  favorites: string[];
  toggleFavorite: (product_slug: string) => void;
  removeFavorite: (product_slug: string) => void;
  checkFavorites: (product_slug: string) => boolean;
};

const favoritesContext = createContext<FavoritesContextParams | null>(null);
export const useFavoritesContext = () => {
  return useContext(favoritesContext) as FavoritesContextParams;
};

const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  const checkFavorites = (product_slug: string) => {
    return favorites.includes(product_slug);
  };
  const setStoreFavorites = (value: string[]) =>
    localStorage.setItem("favorites", JSON.stringify(value));

  const removeFavorite = (product_slug: string) => {
    const newValue = favorites.filter((item) => item !== product_slug);
    setFavorites(newValue);
    setStoreFavorites(newValue);
  };
  const toggleFavorite = (product_slug: string) => {
    if (checkFavorites(product_slug) == false) {
      const newValue = [...favorites, product_slug];
      setFavorites(newValue);
      setStoreFavorites(newValue);
    } else {
      removeFavorite(product_slug);
    }
  };
  return (
    <favoritesContext.Provider
      value={{ favorites, toggleFavorite, removeFavorite, checkFavorites }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesProvider;
