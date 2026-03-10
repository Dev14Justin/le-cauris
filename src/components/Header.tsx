"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Accueil" },
    {
      label: "Découvrir",
      subItems: [
        { href: "/about", label: "À propos" },
        { href: "/points-of-sale", label: "Points de Vente" },
      ],
    },
    {
      label: "Exploration",
      subItems: [
        { href: "/categories", label: "Catégories" },
        { href: "/events", label: "Événements" },
      ],
    },
    { href: "/gallery", label: "Galerie" },
    { href: "/articles", label: "Articles" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all">
            <Image
              src="/logo.jpg"
              alt="Le Cauris Logo"
              fill
              className="object-cover"
            />
          </div>
          
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, idx) => {
            if (item.subItems) {
              const isSubActive = item.subItems.some(
                (sub) => pathname === sub.href,
              );
              return (
                <div key={idx} className="relative group/dropdown py-4">
                  <button
                    className={`flex items-center gap-1 transition duration-300 text-[10px] font-black uppercase tracking-widest ${
                      isSubActive
                        ? "text-orange-600"
                        : "text-neutral-600 hover:text-orange-600"
                    }`}
                  >
                    {item.label}
                    <svg
                      className="w-3 h-3 transition-transform group-hover/dropdown:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-56 bg-white border border-neutral-100 rounded-2xl shadow-xl py-3 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 translate-y-2 group-hover/dropdown:translate-y-0">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                          pathname === sub.href
                            ? "text-orange-600 bg-orange-50"
                            : "text-neutral-600 hover:text-orange-600 hover:bg-neutral-50"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`transition duration-300 text-[10px] font-black uppercase tracking-widest relative py-1 shrink-0 ${
                  isActive
                    ? "text-orange-600"
                    : "text-neutral-600 hover:text-orange-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-full"></span>
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="bg-neutral-950 text-white px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all shadow-md shadow-neutral-950/10 shrink-0"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-neutral-800 focus:outline-none p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-neutral-100 animate-in slide-in-from-top duration-300 max-h-[90vh] overflow-y-auto">
          <ul className="flex flex-col py-3">
            {navItems.map((item, idx) => {
              if (item.subItems) {
                return (
                  <li key={idx} className="px-6 py-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-2 block border-l-2 border-orange-600 pl-3">
                      {item.label}
                    </span>
                    <ul className="flex flex-col gap-1">
                      {item.subItems.map((sub) => {
                        const isActive = pathname === sub.href;
                        return (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className={`block py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                                isActive
                                  ? "text-orange-600"
                                  : "text-neutral-800"
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    className={`block px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                      isActive
                        ? "bg-orange-50 text-orange-600"
                        : "text-neutral-800 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="px-6 py-4">
              <Link
                href="/contact"
                className="block text-center bg-orange-600 text-white py-3 rounded-xl font-black uppercase tracking-widest text-[10px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
