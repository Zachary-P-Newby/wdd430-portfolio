import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SessionProvider } from 'next-auth/react';
import { Suspense } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {default: "Zach Newby Portfolio", template: '%s | Project Portfolio'},
  description: "Zach Newby's Next.js Portfolio",
  metadataBase: new URL("https://wdd430-portfolio-xi-beige.vercel.app")
};

const headerFallback = <header className="bg-blue-500 text-white p-4 shadow-md flex justify-between items-center">
                    <div id="header-title" className="font-bold text-lg">
                        <h1>Zach Newby</h1>
                    </div>
                    <nav>
                    </nav>
                </header>;


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SessionProvider>
          <Suspense fallback={headerFallback}>
          <Header />
          </Suspense>
          <Suspense>
              {children}
          </Suspense>
          
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
