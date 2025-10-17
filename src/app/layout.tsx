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
  title: "Andy Wolff | Email Marketing Developer",
  description:
    "Email Marketing Developer specializing in marketing automation, lifecycle campaigns, and cross-client email development for major retail, hospitality, and B2C brands.",
  metadataBase: new URL("https://andywolff.dev"),
  openGraph: {
    title: "Andy Wolff | Email Marketing Developer",
    description: "Email Marketing Developer specializing in SFMC automation, lifecycle campaigns, and HTML/CSS email development for Fortune 500 brands including Wyndham, Kubota, and Syngenta.",
    url: "https://andywolff.dev",
    siteName: "Andy Wolff | Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andy Wolff - Email Marketing Developer Portfolio",
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