import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://fizioradovic.rs";
const siteTitle =
  "Ambulanta za fizikalnu medicinu i rehabilitaciju Radović | Sremska Mitrovica";
const siteDescription =
  "Ambulanta za fizikalnu medicinu i rehabilitaciju Radović u Sremskoj Mitrovici. Fizikalna terapija, osteopatija, manuelna terapija, kineziterapija, Tekar, HILT laser, shockwave, išijas, diskus hernija i petni trn.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "fizikalna terapija Sremska Mitrovica",
    "rehabilitacija Sremska Mitrovica",
    "Ambulanta Radović",
    "osteopatija",
    "manuelna terapija",
    "HILT laser",
    "Tekar terapija",
    "shockwave terapija",
    "kineziterapija",
    "fizijatar",
    "fizioterapeut",
    "fizioterapeut Sremska Mitrovica",
    "išijas",
    "isijas",
    "diskus hernija",
    "petni trn",
    "bol u leđima",
    "bol u vratu",
    "bol u ramenu",
    "bol u kolenu",
    "bol u kuku",
    "bol u peti",
    "trnjenje ruku",
    "trnjenje nogu",
    "ukočenost leđa",
    "lumbalni bol",
    "cervikalni sindrom",
    "lumbalni sindrom",
    "teniski lakat",
    "smrznuto rame",
    "sportske povrede",
    "rehabilitacija posle povrede",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description:
      "Savremena rehabilitacija, individualni tretmani i preko 20 godina iskustva u Sremskoj Mitrovici.",
    url: siteUrl,
    siteName: "Ambulanta za fizikalnu medicinu i rehabilitaciju Radović",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/therapy-emfieldpro.png",
        width: 1600,
        height: 1000,
        alt: "Savremena fizikalna terapija u Ambulanti Radović",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/therapy-emfieldpro.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
