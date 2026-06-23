const STORAGE_KEY = "solscale_seen_applications";

/** Fired whenever a new application is marked as seen */
export const SEEN_CHANGE_EVENT = "solscale-seen-change";

export function getSeenIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

export function markSeen(id: string): void {
  if (typeof window === "undefined") return;
  const seen = getSeenIds();
  if (seen.has(id)) return; // already seen – no-op
  seen.add(id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...seen]));
  window.dispatchEvent(new Event(SEEN_CHANGE_EVENT));
}
