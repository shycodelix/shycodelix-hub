import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "shycodelix hub",
  description: "Esports and creator hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}