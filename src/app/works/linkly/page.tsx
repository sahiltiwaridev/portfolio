import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Linkly — Sahil Tiwari",
  description: "QR-based profile sharing app by Sahil Tiwari. Coming soon.",
  robots: { index: false },
  alternates: {
    canonical: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app/works/linkly",
  },
  openGraph: {
    title: "Linkly — Sahil Tiwari",
    description: "QR-based profile sharing app by Sahil Tiwari. Coming soon.",
    url: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app/works/linkly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkly — Sahil Tiwari",
    description: "QR-based profile sharing app by Sahil Tiwari. Coming soon.",
  },
};

export default function Linkly() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-11/12 md:w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <Header headername="Linkly" backHref="/works" />
        <p className="text-4xl md:text-6xl font-extrabold text-white/20">
          Coming Soon.
        </p>
      </main>
      <Footer />
    </div>
  );
}
