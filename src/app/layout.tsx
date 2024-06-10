import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./(components)/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KGC Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex justify-center w-full">

          <div className="absolute flex justify-center items-center w-full py-4 ">
            <Navigation  />
          </div>
        </main>
        {children}
      </body>
    </html>
  );
}
