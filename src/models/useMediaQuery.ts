"use client";
import { useLayoutEffect, useState } from "react";

const IS_SERVER = typeof window === "undefined";

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return false;
    }
    return window.matchMedia(query).matches;
  };
  const [isMatch, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return isMatch;
};
