import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://1000lumens.vercel.app/"),
  title: {
    template: "%s | 1000Lumens",
    default: "1000Lumens",
  },
  description: "Portfolio fotogáfico de Matías Pérez Viecho",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Photography",
    "Fotografía NextJS",
  ],
  authors: [{ name: "Matias Perez Viecho" }],
  creator: "Matias Perez Viecho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fotografías de Matías Pérez Viecho",
    description:
      "1000 lumens es un proyecto dedicado a mostrar de un modo rápido y sencillo las fotos que saqué a lo largo de mi carrera",
    images: [
      {
        url: "/1000LUMENS.webp",
        width: 800,
        height: 600,
        alt: "Portada 1000Lumens, showcase de mis fotografías",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
