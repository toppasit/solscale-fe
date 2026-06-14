"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/i18n/language-provider";
import { useAuth } from "@/hooks/use-auth";
import LanguageSwitcher from "./language-switcher";

export default function MainHeader() {
  const router = useRouter();
  const { t } = useLanguage();
  const { isLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t("nav.findWork"), href: "#" },
    { label: t("nav.postJob"), href: "#" },
    { label: t("nav.influencers"), href: "#" },
    { label: t("nav.about"), href: "#" },
  ];

  function handleLogout() {
    logout();
    setMenuOpen(false);
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 bg-[#8f0035] text-white shadow-md">
      {/* Main bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-[#d7ff2f] text-xs font-black text-[#840031]">
            ⬢
          </div>
          <span className="text-xl font-black tracking-tight">Solscale</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher variant="light" />
          {isLoggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="flex h-9 items-center rounded-lg bg-[#d7ff2f] px-5 text-sm font-semibold text-[#121212] transition-colors hover:bg-[#c8f020]"
            >
              {t("common.logOut")}
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="flex h-9 items-center rounded-lg px-4 text-sm font-medium transition-colors hover:bg-white/10"
              >
                {t("common.logIn")}
              </Link>
              <Link
                href="/signup"
                className="flex h-9 items-center rounded-lg bg-[#d7ff2f] px-5 text-sm font-semibold text-[#121212] transition-colors hover:bg-[#c8f020]"
              >
                {t("common.signUp")}
              </Link>
            </>
          )}
        </div>

        {/* Mobile right: lang switcher + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher variant="light" />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-white/10"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#8f0035] px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
            {isLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="flex h-10 w-full items-center justify-center rounded-lg bg-[#d7ff2f] text-sm font-semibold text-[#121212] transition-colors hover:bg-[#c8f020]"
              >
                {t("common.logOut")}
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-full items-center justify-center rounded-lg border border-white/20 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  {t("common.logIn")}
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-full items-center justify-center rounded-lg bg-[#d7ff2f] text-sm font-semibold text-[#121212] transition-colors hover:bg-[#c8f020]"
                >
                  {t("common.signUp")}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
