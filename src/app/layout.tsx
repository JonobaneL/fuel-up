import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import QueryProvider from "./QueryProvider";
import StoreProvider from "./StoreProvider";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import HeaderWrapper from "@/app/_components/HeaderWrapper";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "cyrillic"] });
// const roboto_c = Roboto_Condensed({ subsets: ["cyrillic", "latin"] }); choose better second font

export const metadata: Metadata = {
  title: "Fuel Up",
  description: "Looking for sport nutrition? You're in right place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-dvh flex-col bg-back", inter.className)}>
        <StoreProvider>
          <QueryProvider>
            <HeaderWrapper>
              <Header />
            </HeaderWrapper>
            <div className="h-full flex-1 ">{children}</div>
            <Footer />
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
