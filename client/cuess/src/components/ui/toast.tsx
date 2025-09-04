import * as React from "react";
import { cn } from "../../lib/cn";

export type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

export function ToastView({ toast }: { toast: Toast }) {
  const base =
    "pointer-events-auto relative w-full rounded-lg bg-white shadow-lg ring-1 ring-black/5 p-4";
  const variant =
    toast.variant === "destructive" ? "bg-red-600 text-white" : "";
  return (
    <div className={cn(base, variant)}>
      {toast.title && <div className="font-semibold">{toast.title}</div>}
      {toast.description && (
        <div className="text-sm opacity-80">{toast.description}</div>
      )}
      {toast.action}
    </div>
  );
}