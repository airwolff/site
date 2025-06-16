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
  title: "Andy Wolff | Software Developer & Technical Leader",
  description:
    "The professional portfolio of Andy Wolff, a software developer with a proven record of leading technical initiatives, mentoring teams, and driving process improvements.",
  metadataBase: new URL("https://andywolff.dev"),
  openGraph: {
    title: "Andy Wolff | Software Developer & Technical Leader",
    description: "Portfolio and case studies for Andy Wolff, showcasing experience in process automation, team enablement, and full-stack development.",
    url: "https://andywolff.dev",
    siteName: "Andy Wolff | Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The portfolio of Andy Wolff, Software Developer",
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
