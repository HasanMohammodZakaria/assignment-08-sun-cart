"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname);

  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`py-1 px-2 rounded-sm ${isActive ? "border border-[#FDB813]" : " "}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
