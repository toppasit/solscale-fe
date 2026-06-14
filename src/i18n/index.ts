import en from "./locales/en";
import th from "./locales/th";

export type Locale = "en" | "th";

export const locales: Locale[] = ["en", "th"];
export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "solscale_locale";

export const translations = { en, th } as const;

export type TranslationDictionary = typeof en;

type PathImpl<T, Key extends keyof T> = Key extends string
  ? T[Key] extends readonly { title: string; desc: string }[]
    ? `${Key}`
    : T[Key] extends Record<string, unknown>
      ? `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], symbol>>}` | `${Key}`
      : `${Key}`
  : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

export type TranslationKey = Path<TranslationDictionary>;

export function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export function translate(
  locale: Locale,
  key: string,
  params?: Record<string, string | number>
): string {
  const value = getNestedValue(translations[locale], key);

  if (typeof value !== "string") {
    return key;
  }

  if (!params) {
    return value;
  }

  return value.replace(/\{\{(\w+)\}\}/g, (_, token: string) =>
    String(params[token] ?? "")
  );
}
