import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Font config
const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap", // improves performance + avoids layout shift
  weight: ["400", "500", "600", "700"]
});

const ovoFont = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  display: "swap", // improves performance + avoids layout shift
  weight: ["400"]
});

// Global SEO / Metadata
export const metadata: Metadata = {
  title: "Wolff Digital – Web Development & Creative Digital Solutions",
  description:
    "Wolff Digital is the portfolio and freelance studio of Andy Wolff, delivering fast, modern websites using Next.js, TypeScript, and Tailwind CSS. 7+ years of full-spectrum web expertise.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Wolff Digital – Web Development & Creative Digital Solutions",
    description:
      "Explore Wolff Digital – the freelance studio of Andy Wolff, specializing in scalable, high-performance websites built with modern tools like Next.js and Tailwind CSS.",
    url: "https://yourdomain.com",
    siteName: "Wolff Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wolff Digital – Web Development by Andy Wolff",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolff Digital – Web Development & Creative Digital Solutions",
    description:
      "Wolff Digital is the freelance web development portfolio of Andy Wolff, focused on modern, performant websites with real business impact.",
    images: ["/og-image.jpg"],
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
    <html lang="en">
    <body className={`${outfitFont.variable} ${ovoFont.variable} antialiased`}>
      {children}
    </body>
  </html>
  );
}
