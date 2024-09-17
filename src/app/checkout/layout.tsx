import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="w-full px-6 sm:px-8 md:px-12 lg:px-20 shadow-header-shadow">
        <div className="max-w-[1440px] w-full mx-auto flex items-center  h-20 ">
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="h-7" />
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
