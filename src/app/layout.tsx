import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Cauris - ArtRévolution | Excellence Artistique Africaine",
  description:
    "L'écho de la richesse culturelle africaine. Découvrez une plateforme dédiée à la propulsion des talents et à la sauvegarde du patrimoine artistique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} antialiased flex flex-col min-h-screen font-sans bg-white text-neutral-900`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
