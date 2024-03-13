import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',

}); // adding weights and variable for font here:


export const metadata: Metadata = {
  title: "Eventlio",
  description: "Host your events and manage them anywhere with eaze",
  icons: {
    icon: '/assets/images/logo.svg' // adding icons
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
