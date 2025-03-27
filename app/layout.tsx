import type { Metadata } from "next";
import "./globals.css";
import RippleEffect from "./_components/RippleEffect";


export const metadata: Metadata = {
  title: "Strwwbbrrii's Showcase",
  description: "Digital art portfolio showcasing the works of Strwwbbrrii",
  keywords: "digital art, artist portfolio, illustrations, concept art, art showcase, cute, sanrio, pastel, hello kitty, Strwwbbrrii, digital artist, cute art, character illustration",
  openGraph: {
    title: "Welcome to Strwwbbrrii's House",
    description: "Digital art portfolio showcasing the works of Strwwbbrrii",
    url: "https://strwwbbrrii.vercel.app/",
    siteName: "Strwwbbrrii's Showcase",
    images: [
      {
        url: "/og/Strwwbbrrii.png",
        width: 1200,
        height: 630,
        alt: "Strwwbbrrii's Portfolio"
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Strwwbbrrii's Portfolio",
    description: "Digital art portfolio showcasing the works of Strwwbbrrii",
    images: ['/og/Strwwbbrrii.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        <RippleEffect />
        <main className="min-h-screen bg-pink-200 text-black">{children}        </main>
      </body>
    </html>
  );
}
