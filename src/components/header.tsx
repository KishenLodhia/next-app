"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={"/"}>
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          className="w-[35px] h-[35px]"
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>

      <nav>
        <ul className="flex gap-x-3 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={`${pathname === link.href ? "text-zinc-900 " : "text-zinc-400 "}`} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
