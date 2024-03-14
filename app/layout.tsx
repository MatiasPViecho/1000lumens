import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matias Viecho | Fotografía",
  description: "Portfolio fotogáfico de Matías Pérez Viecho",
  icons: {
    icon: "/public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
