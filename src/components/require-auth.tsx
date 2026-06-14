"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { buildLoginUrl, isLoggedIn } from "@/lib/auth";

type RequireAuthProps = {
  returnTo: string;
  children: React.ReactNode;
};

export default function RequireAuth({ returnTo, children }: RequireAuthProps) {
  const router = useRouter();
  const allowed = isLoggedIn();

  useEffect(() => {
    if (!allowed) {
      router.replace(buildLoginUrl(returnTo));
    }
  }, [allowed, router, returnTo]);

  if (!allowed) {
    return null;
  }

  return children;
}
