import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { PAGES, absoluteUrl, breadcrumbNode, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ ...PAGES.works });

const projects = [
  {
    name: "Linkly",
    description: `QR-based profile sharing — because "I'll send it later" never actually happens.`,
    href: "/works/linkly",
  },
];

const arrowStyles = "transition-transform duration-200 group-hover:-rotate-45";

export default function Works() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-11/12 md:w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <JsonLd
          graph={[
            {
              "@type": "CollectionPage",
              url: absoluteUrl(PAGES.works.path),
              name: PAGES.works.title,
              mainEntity: {
                "@type": "ItemList",
                itemListElement: projects.map(({ name, href }, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name,
                  url: absoluteUrl(href),
                })),
              },
            },
            breadcrumbNode([
              { name: "Home", path: PAGES.home.path },
              { name: "Works", path: PAGES.works.path },
            ]),
          ]}
        />
        <Header headername="Works" />
        <section aria-label="Projects list">
          {projects.map(({ name, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-1 py-6 border-b border-white/10 transition-all duration-200"
              aria-label={`${name} — ${description}`}
            >
              <div className="flex items-center gap-2">
                <ArrowRight
                  size={20}
                  className={arrowStyles}
                  aria-hidden="true"
                />
                <span className="text-xl font-bold">{name}</span>
              </div>
              <p className="text-gray-400 text-sm pl-7">{description}</p>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
