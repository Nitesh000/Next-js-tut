"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname();
  const isAvtive = href === pathname;

  return (
    <Link className={isAvtive ? "text-cyan-500" : ""} href={href} {...rest} />
  );
};
