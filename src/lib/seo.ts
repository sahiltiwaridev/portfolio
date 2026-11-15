import type { Metadata } from "next";

/**
 * Single source of truth for everything SEO-related.
 * When move to a custom domain, set NEXT_PUBLIC_SITE_URL in Vercel
 * (or change the fallback below) and every canonical URL, sitemap entry,
 * OG tag and JSON-LD block updates with it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-six-chi-kmc4bfrxcz.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Sahil Tiwari";
export const TWITTER_HANDLE = "@Sahil_Creates";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const OG_IMAGE = {
  url: "/og.png",
  width: 1024,
  height: 629,
  alt: "Sahil Tiwari — Frontend & Full-Stack Developer",
};

export const SOCIAL_PROFILES = [
  "https://github.com/sahiltiwaridev",
  "https://linkedin.com/in/sahil-tiwari-dev",
  "https://instagram.com/sahiltiwari.official",
  "https://x.com/Sahil_Creates",
  "https://hashnode.com/@sahiltiwari",
];

export const PAGES = {
  home: {
    path: "/",
    title: "Sahil Tiwari — Frontend & Full-Stack Developer",
    description:
      "Sahil Tiwari is a frontend and full-stack developer from West Bengal, India. Builds web, mobile and desktop apps with React, Next.js and TypeScript.",
  },
  about: {
    path: "/about",
    title: "About Sahil Tiwari — Web Developer from Habra, West Bengal",
    description:
      "Frontend and full-stack developer from Habra, near Kolkata. BCA graduate from Brainware University, building with React, Next.js, React Native and NestJS.",
  },
  works: {
    path: "/works",
    title: "Projects by Sahil Tiwari — React Native & Web Apps",
    description:
      "Projects built by Sahil Tiwari, including Linkly, an offline React Native app that shares your professional profile through a QR code.",
  },
  linkly: {
    path: "/works/linkly",
    title: "Linkly — Offline QR Profile Sharing App | Sahil Tiwari",
    description:
      "Linkly is an offline-first Android app for sharing your profile instantly via QR code. No internet, no typing, no accounts. Built with React Native and Expo.",
  },
  contact: {
    path: "/contact",
    title: "Contact Sahil Tiwari — Open to Frontend & Full-Stack Roles",
    description:
      "Contact Sahil Tiwari, a frontend and full-stack developer open to full-time roles, remote work and relocation.",
  },
} as const;

type PageSeo = { title: string; description: string; path: string };

/**
 * Next.js replaces (not merges) openGraph/twitter when a page defines its own,
 * so every page has to carry the full set. This keeps them all consistent.
 */
export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: TWITTER_HANDLE,
      images: [OG_IMAGE.url],
    },
  };
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

/** Person node, reused on the home page and as the main entity of /about. */
export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    image: absoluteUrl("/me.jpg"),
    jobTitle: "Frontend & Full-Stack Developer",
    description: PAGES.home.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Habra",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Brainware University" },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Electron",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
    ],
    sameAs: SOCIAL_PROFILES,
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
