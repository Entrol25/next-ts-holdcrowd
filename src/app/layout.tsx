/*
npm run dev
npm run build
npm run start
*/
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// <body className={inter.className}>{children}</body>
export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
