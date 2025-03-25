import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Strwwbbrri's Portfolio",
  description: "This is the art showcase of the artist Strwwbbrri",
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
        <main className="min-h-screen bg-pink-200 text-black">{children}
        </main>
        
      </body>
    </html>
  );
}
