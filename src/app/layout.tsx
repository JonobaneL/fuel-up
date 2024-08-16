import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "./Providers";

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
        <Provider>
          <>
            <Header />
            <div className="px-20 flex-1">
              <div className="max-w-[1440px] w-full mx-auto">{children}</div>
            </div>
            <Footer />
          </>
        </Provider>
      </body>
    </html>
  );
}
