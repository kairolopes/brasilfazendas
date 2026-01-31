import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Brasil Fazendas - Plataforma Premium",
  description: "Apresentação exclusiva de fazendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
