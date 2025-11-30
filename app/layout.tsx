import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
// import "./style.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Signalist",
  description: "Track real-time stock pirces, get personalized alerts and explore company insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfitFont.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
