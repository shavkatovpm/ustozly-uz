"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page py-24 text-center">
      <div className="mx-auto grid place-items-center size-16 rounded-2xl bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
        <AlertTriangle className="size-8" />
      </div>
      <h1 className="mt-5 font-display text-3xl font-bold tracking-tight">
        Nimadir noto'g'ri ketdi
      </h1>
      <p className="mt-3 text-muted max-w-md mx-auto">
        Kutilmagan xato yuz berdi. Qaytadan urinib ko'ring yoki bir ozdan keyin
        qayting.
      </p>
      <Button onClick={reset} className="mt-6">
        <RotateCcw className="size-4" /> Qayta urinish
      </Button>
    </div>
  );
}
