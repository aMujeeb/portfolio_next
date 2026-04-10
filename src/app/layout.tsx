import type { Metadata } from "next";
import { Geist, Salsa } from "next/font/google";
import "./globals.css";
import { englishTexts } from "./utils/text";
import AboutMePage from "./about-me/page";
import LanguageProvider from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const salsa = Salsa({
  weight: "400",
  variable: "--font-salsa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${englishTexts.aboutMe.name}'s Portfolio`,
  description: "Portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${salsa.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {/* Outer main Container */}
          <div className="min-h-screen border border-white/20 rounded-md p-4 bg-white backdrop-blur-sm">

            {/* Split Container */}
            <div className="grid grid-cols-[35%_65%] divider-x divide-white/10 min-h-[inherit]">

              {/* Static section on the left */}
              <div className="p-8 flex flex-col justify-top items-center">
                <AboutMePage />
                <footer className="mt-auto text-sm text-zinc-500">
                  &copy; {new Date().getFullYear()} {englishTexts.aboutMe.name}. All rights reserved.
                </footer>
              </div>

              {/* Dynamic section on the right */}
              <div className="p-8 flex flex-col justify-start gap-2">
                {children}
              </div>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
