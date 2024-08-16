"use client";
import FavoritesProvider from "@/context/FavoritesContext";
import SearhcParamsProvider from "@/context/SearchParamsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <SearhcParamsProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </SearhcParamsProvider>
    </QueryClientProvider>
  );
};

export default Provider;
