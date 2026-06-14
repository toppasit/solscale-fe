"use client";

import { LanguageProvider } from "@/i18n/language-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
