import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // ✅ Ensure correct path
import { ReactNode } from "react"; // ✅ Import ReactNode type

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode; // ✅ Fixed TypeScript error
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
