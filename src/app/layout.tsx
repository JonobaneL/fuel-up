import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import QueryProvider from "./QueryProvider";
import StoreProvider from "./StoreProvider";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
