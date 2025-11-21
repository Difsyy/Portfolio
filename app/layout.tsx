import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Data & AI Engineer",
  description: "Portfolio of a Data/AI/ML Engineer specializing in modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-main">
      <body
        className={`${inter.variable} font-sans antialiased bg-main text-[#F9FAFB] selection:bg-blaze selection:text-white overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
