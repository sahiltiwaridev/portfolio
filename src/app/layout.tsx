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

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-six-chi-kmc4bfrxcz.vercel.app"),
  themeColor: "#000000",
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
  alternates: {
    canonical: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app",
  },
  openGraph: {
    title: "Sahil Tiwari — JavaScript Developer",
    description:
      "JavaScript developer from West Bengal, India. Building web apps with React and Next.js.",
    url: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app",
    siteName: "Sahil Tiwari",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1024,
        height: 629,
        alt: "Sahil Tiwari — JavaScript Developer",
      },
    ],
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Sahil Tiwari",
                url: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app",
                jobTitle: "JavaScript Developer",
                sameAs: [
                  "https://github.com/sahiltiwaridev",
                  "https://linkedin.com/in/sahil-tiwari-dev",
                  "https://instagram.com/sahiltiwari.official",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Sahil Tiwari",
                url: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app",
                description:
                  "Portfolio of Sahil Tiwari, a JavaScript developer from West Bengal, India.",
                author: {
                  "@type": "Person",
                  name: "Sahil Tiwari",
                },
              },
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
