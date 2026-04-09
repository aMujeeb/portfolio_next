import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { englishTexts } from "./utils/text";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Outer main Container */}
        <div className="min-h-screen border border-white/20 rounded-md p-4 bg-white backdrop-blur-sm">
        {/* Split Container */}
        <div className="grid grid-cols-[35%_65%] divider-x divide-white/10 min-h-[inherit]">
            {/* Static section on the left */}
            <div className="p-8 flex flex-col justify-top items-center">
              <h1 className="text-4xl font-bold mb-4 text-amber-300">{englishTexts.aboutMe.name}</h1>
            </div>
            {/* Dynamic section on the right */}
            <div className="p-8 flex flex-col justify-center">
              {children}
            </div>
        </div>
        </div>
      </body>
    </html>
  );
}
