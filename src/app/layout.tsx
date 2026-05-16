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
  metadataBase: new URL("https://portfolio-six-chi-kmc4bfrxcz.vercel.app"),
  title: "Sahil Tiwari — JavaScript Developer",
  description:
    "Sahil Tiwari is a JavaScript developer from West Bengal, India. Building web apps with React and Next.js.",
  keywords: [
    "Sahil Tiwari",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Sahil Tiwari" }],
  openGraph: {
    title: "Sahil Tiwari — JavaScript Developer",
    description:
      "JavaScript developer from West Bengal, India. Building web apps with React and Next.js.",
    url: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app",
    siteName: "Sahil Tiwari",
    type: "website",
    images: [{ url: "/og.png", width: 1024, height: 629, alt: "Sahil Tiwari — JavaScript Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Tiwari — JavaScript Developer",
    description:
      "JavaScript developer from West Bengal, India. Building web apps with React and Next.js.",
    images: ["/og.png"],
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