"use client";

import { usePathname } from "next/navigation";

type LayoutWrapperProps = { children: React.ReactNode };

const HeaderWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();

  if (pathname !== "/checkout") return children;

  return null;
};

export default HeaderWrapper;
