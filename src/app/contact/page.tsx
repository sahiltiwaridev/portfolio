import ContactClient from "@/components/ContactClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  PAGES,
  PERSON_ID,
  absoluteUrl,
  breadcrumbNode,
  buildMetadata,
} from "@/lib/seo";

export const metadata = buildMetadata({ ...PAGES.contact });

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-11/12 md:w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <JsonLd
          graph={[
            {
              "@type": "ContactPage",
              url: absoluteUrl(PAGES.contact.path),
              name: PAGES.contact.title,
              about: { "@id": PERSON_ID },
            },
            breadcrumbNode([
              { name: "Home", path: PAGES.home.path },
              { name: "Contact", path: PAGES.contact.path },
            ]),
          ]}
        />
        <Header headername="Get in Touch" />
        <ContactClient />
      </main>
      <Footer />
    </div>
  );
}
