import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kora — Autonomous Business Platform",
  description: "Build and manage an AI workforce around measurable business goals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
