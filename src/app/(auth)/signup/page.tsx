"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/i18n/language-provider";

export default function SignupPage() {
  const { t } = useLanguage();
  const [role, setRole] = useState<"influencer" | "entrepreneur">("influencer");

  return (
    <div className="w-full max-w-[460px]">
      <div className="mb-6 text-center">
        <h1 className="text-[32px] font-bold text-[#111] tracking-tight">
          {t("auth.signup.title")}
        </h1>
        <p className="mt-1.5 text-[15px] text-[#777]">{t("auth.signup.subtitle")}</p>
      </div>

      <div className="mb-6 flex rounded-xl bg-[#e3dfd7] p-1">
        <button
          onClick={() => setRole("influencer")}
          className={`flex-1 rounded-lg py-2.5 text-[14px] font-semibold transition-colors ${
            role === "influencer"
              ? "bg-[#9d003b] text-white shadow-sm"
              : "text-[#888] hover:text-[#555]"
          }`}
        >
          {t("auth.signup.roleInfluencer")}
        </button>
        <button
          onClick={() => setRole("entrepreneur")}
          className={`flex-1 rounded-lg py-2.5 text-[14px] font-semibold transition-colors ${
            role === "entrepreneur"
              ? "bg-[#9d003b] text-white shadow-sm"
              : "text-[#888] hover:text-[#555]"
          }`}
        >
          {t("auth.signup.roleEntrepreneur")}
        </button>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-[14px] font-medium text-[#333] mb-1.5">
            {t("auth.signup.fullName")}
          </label>
          <div className="flex items-center gap-2.5 rounded-xl border border-[#ddd] bg-white px-3.5 py-3 focus-within:border-[#9d003b] focus-within:ring-1 focus-within:ring-[#9d003b]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#aaa]">
              <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2 13.5C2 11 4.686 9 8 9s6 2 6 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder={t("auth.signup.fullNamePlaceholder")}
              className="flex-1 bg-transparent text-[14px] text-[#111] outline-none placeholder:text-[#bbb]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#333] mb-1.5">
            {t("auth.signup.email")}
          </label>
          <div className="flex items-center gap-2.5 rounded-xl border border-[#ddd] bg-white px-3.5 py-3 focus-within:border-[#9d003b] focus-within:ring-1 focus-within:ring-[#9d003b]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#aaa]">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M1 5.5L8 10L15 5.5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <input
              type="email"
              placeholder={t("auth.login.emailPlaceholder")}
              className="flex-1 bg-transparent text-[14px] text-[#111] outline-none placeholder:text-[#bbb]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#333] mb-1.5">
            {t("auth.signup.phone")}
          </label>
          <div className="flex items-center gap-2.5 rounded-xl border border-[#ddd] bg-white px-3.5 py-3 focus-within:border-[#9d003b] focus-within:ring-1 focus-within:ring-[#9d003b]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#aaa]">
              <path d="M3 2h2.5l1 3-1.5 1.5a9.5 9.5 0 004.5 4.5L11 9.5l3 1V13a1 1 0 01-1 1A11 11 0 012 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[14px] text-[#555] pr-2 border-r border-[#ddd]">+66</span>
            <input
              type="tel"
              placeholder="81234 5678"
              className="flex-1 bg-transparent text-[14px] text-[#111] outline-none placeholder:text-[#bbb] pl-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#333] mb-1.5">
            {t("auth.signup.password")}
          </label>
          <div className="flex items-center gap-2.5 rounded-xl border border-[#ddd] bg-white px-3.5 py-3 focus-within:border-[#9d003b] focus-within:ring-1 focus-within:ring-[#9d003b]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#aaa]">
              <rect x="4" y="6" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <input
              type="password"
              placeholder={t("auth.signup.passwordPlaceholder")}
              className="flex-1 bg-transparent text-[14px] text-[#111] outline-none placeholder:text-[#bbb]"
            />
            <button type="button" className="text-[#aaa] hover:text-[#777]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8C2.5 4.5 5 3 8 3s5.5 1.5 7 5c-1.5 3.5-4 5-7 5S2.5 11.5 1 8z" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#333] mb-1.5">
            {t("auth.signup.confirmPassword")}
          </label>
          <div className="flex items-center gap-2.5 rounded-xl border border-[#ddd] bg-white px-3.5 py-3 focus-within:border-[#9d003b] focus-within:ring-1 focus-within:ring-[#9d003b]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#aaa]">
              <rect x="4" y="6" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <input
              type="password"
              placeholder={t("auth.signup.confirmPasswordPlaceholder")}
              className="flex-1 bg-transparent text-[14px] text-[#111] outline-none placeholder:text-[#bbb]"
            />
            <button type="button" className="text-[#aaa] hover:text-[#777]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8C2.5 4.5 5 3 8 3s5.5 1.5 7 5c-1.5 3.5-4 5-7 5S2.5 11.5 1 8z" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>

        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-[#ccc] accent-[#9d003b] shrink-0"
          />
          <span className="text-[13px] text-[#666] leading-relaxed">
            {t("auth.signup.agreeTerms")}{" "}
            <Link href="#" className="text-[#9d003b] underline hover:no-underline">
              {t("auth.signup.termsOfService")}
            </Link>{" "}
            {t("auth.signup.and")}{" "}
            <Link href="#" className="text-[#9d003b] underline hover:no-underline">
              {t("auth.signup.privacyPolicy")}
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className="mt-1 flex items-center justify-center gap-2 h-[48px] w-full rounded-xl bg-[#9d003b] text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(157,0,59,0.35)] hover:bg-[#850030] transition-colors"
        >
          {t("auth.signup.submit")}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>

      <p className="mt-6 text-center text-[14px] text-[#777]">
        {t("auth.signup.hasAccount")}{" "}
        <Link href="/login" className="font-semibold text-[#9d003b] hover:underline">
          {t("auth.signup.signIn")}
        </Link>
      </p>
    </div>
  );
}
