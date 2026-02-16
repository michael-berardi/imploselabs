import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ImploseLabs | AI & Application Development Studio",
  description: "We craft intelligent systems—AI development, Mac apps, and custom web applications. Creators of Overseer. A Liberty Design Studio company.",
  keywords: ["AI development", "Mac app development", "web application development", "machine learning", "custom software"],
  authors: [{ name: "ImploseLabs" }],
  metadataBase: new URL("https://imploselabs.com"),
  openGraph: {
    title: "ImploseLabs | AI & Application Development Studio",
    description: "Intelligent systems, crafted. AI development, Mac apps, and custom web applications.",
    type: "website",
    url: "https://imploselabs.com",
    siteName: "ImploseLabs",
    locale: "en_US",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "ImploseLabs - AI & Application Development Studio"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "ImploseLabs | AI & Application Development Studio",
    description: "Intelligent systems, crafted.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://imploselabs.com"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
