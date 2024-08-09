import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchParamsProvider } from "@/context/SearchParamsContext";
import { TestProvider } from "@/context/testContext";
import Provider from "./Providers";

const inter = Inter({ subsets: ["latin"] });

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
        <Header />
        {/* test */}
        <TestProvider>
          <SearchParamsProvider>
            <Provider>
              <div className="px-20 flex-1">
                <div className="max-w-[1440px] w-full mx-auto">{children}</div>
              </div>
            </Provider>
          </SearchParamsProvider>
        </TestProvider>
        <Footer />
      </body>
    </html>
  );
}
