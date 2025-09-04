"use client";
import React from "react";
import { useToast } from "./use-toast";
import { ToastView } from "./toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();
  return (
    <div className="fixed inset-x-0 top-4 z-50 mx-auto flex w-full max-w-sm flex-col gap-2 px-4">
      {toasts.map((t) => (
        <button key={t.id} onClick={() => dismiss(t.id)} className="text-left">
          <ToastView toast={t} />
        </button>
      ))}
    </div>
  );
}