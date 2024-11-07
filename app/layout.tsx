import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {Outfit} from 'next/font/google'
import { Toaster } from "sonner";

const outfit = Outfit({subsets : ["latin"]})

export const metadata: Metadata = {
  title: "GeniusWriter",
  description: "An AI powered website to generate content for all users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
          {children}
          <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
