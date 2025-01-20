import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.scss";
import "../styles/global.scss";
import { Nunito } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paronify Cat Mood",
  description: "Checking the mood of cat ",
};



// Initialize the font with the subsets you want to load
const nunito = Nunito({
  subsets: ['latin'],
  // Optional: specify weight
  weight: ['400', '500', '700'],
  // Optional: specify style
  style: ['normal', 'italic'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
