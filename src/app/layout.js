import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SVG from "react-inlinesvg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grace - Bar & Lounge",
  description: "GRACE Bar & Lounge is a Hookah Bar located in Gostivar. Visit us for the best hookah, cocktails and atmosphere!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
        {children}
        <Link href="/" className="fixed bottom-0 py-2 bg-orange-200 w-full">
          <SVG src="/svg/home.svg" className="size-8 mx-auto" />
        </Link>
      </body>
    </html>
  );
}
