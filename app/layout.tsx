import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";

// Display and body. The width axis carries the release voice: wide and light
// for titles, normal for reading.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Captions, credits, filter legends: the small print of an image release.
const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
});

const SITE = "https://samgabriel.vercel.app";
const TITLE = "Sam Gabriel — Machine-learning & software engineer";
const BLURB =
  "Machine-learning and software engineer in Indore, India. A GPU galaxy simulator, an offline planetarium, and six more projects with public source.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: BLURB,
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Sam Gabriel",
    title: TITLE,
    description: BLURB,
    images: [
      {
        url: `${SITE}/cosmos/cosmic-cliffs.webp`,
        width: 1280,
        height: 720,
        alt: "The Cosmic Cliffs of the Carina Nebula, imaged by the James Webb Space Telescope",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: BLURB,
    images: [`${SITE}/cosmos/cosmic-cliffs.webp`],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${martian.variable}`}>
      <body>{children}</body>
    </html>
  );
}
