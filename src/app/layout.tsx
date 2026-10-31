import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Font config
const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const ovoFont = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"]
});

// Global SEO / Metadata
export const metadata: Metadata = {
  title: "Andy Wolff | Salesforce Marketing Cloud Developer",
  description:
    "Salesforce Marketing Cloud developer: Content Builder, AMPscript, and cross-client email development at 500K–750K send volumes.",
  metadataBase: new URL("https://andywolff.dev"),
  openGraph: {
    title: "Andy Wolff | Salesforce Marketing Cloud Developer",
    description: "SFMC developer: Content Builder, AMPscript, and HTML/CSS email development for brands including Wyndham, Kubota, and Syngenta.",
    url: "https://andywolff.dev",
    siteName: "Andy Wolff | Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andy Wolff - Salesforce Marketing Cloud Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
    <body className={`${outfitFont.variable} ${ovoFont.variable} antialiased leading-8 overflow-x-hidden`}>
      {children}
    </body>
  </html>
  );
}