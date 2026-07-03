"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/#prayer", label: "บทสวดมนต์" },
  { href: "/worship", label: "วิธีสักการะ" },
  { href: "/history", label: "ประวัติศาล" },
  { href: "/visit", label: "การเดินทาง" },
  { href: "/gallery", label: "แกลเลอรี" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-shrine-redDark/95 backdrop-blur text-shrine-cream shadow-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🙏</span>
            <span className="font-display font-semibold tracking-wide text-shrine-goldLight text-lg sm:text-xl">
              ศาลพระพรหมเอราวัณ
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-shrine-goldLight transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-2xl"
            aria-label="เปิดเมนู"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-shrine-gold/30 bg-shrine-redDark">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-shrine-goldLight transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
