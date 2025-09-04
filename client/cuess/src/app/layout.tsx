import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { ToastProvider } from "../components/ui/use-toast";
import { Toaster } from "../components/ui/toaster";

export const metadata: Metadata = {
  title: "CUESS",
  description: "Chittagong University Entrepreneur & Startup Society",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Navbar />
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}