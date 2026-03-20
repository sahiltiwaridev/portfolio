import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sahil Tiwari — JavaScript Developer",
  description:
    "Hey, I'm Sahil. I speak JavaScript, build things that barely work, and document the results that nobody reads.",
  keywords: [
    "Sahil Tiwari",
    "JavaScript Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Sahil Tiwari" }],
  openGraph: {
    title: "Sahil Tiwari — JavaScript Developer",
    description: "JavaScript developer from Habra, West Bengal.",
    url: "https://yourdomain.com",
    siteName: "Sahil Tiwari",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Tiwari — JavaScript Developer",
    description: "JavaScript developer from Habra, West Bengal.",
  },
  verification: {
    google: "FBEGmsRGzOIk4TaYAc2XaeI0CmMU4vJ2fRpmfE2Vt1I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
