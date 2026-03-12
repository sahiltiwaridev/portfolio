import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Works — Sahil Tiwari",
  description: "Projects and apps built by Sahil Tiwari.",
};

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
      <main className="w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <Header headername="Works" />
        <div className="flex flex-col">
          {projects.map(({ name, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-1 py-6 border-b border-white/10 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <ArrowRight size={20} className={arrowStyles} />
                <span className="text-xl font-bold">{name}</span>
              </div>
              <p className="text-gray-400 text-sm pl-7">{description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
