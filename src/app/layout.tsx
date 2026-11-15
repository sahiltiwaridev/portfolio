import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  OG_IMAGE,
  PAGES,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGES.home.title,
  description: PAGES.home.description,
  applicationName: SITE_NAME,
  keywords: [
    "Sahil Tiwari",
    "Frontend Developer",
    "Full-Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "Web Developer Kolkata",
    "Web Developer West Bengal",
    "Portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: PAGES.home.title,
    description: PAGES.home.description,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGES.home.title,
    description: PAGES.home.description,
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE.url],
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E3TEHVR8VT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E3TEHVR8VT');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
