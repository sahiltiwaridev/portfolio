import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "404 — Page not found | Sahil Tiwari",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col flex-1 justify-center w-full px-6 md:px-20 py-20 gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          404. We&apos;ve both been left on read.
        </h1>

        <p className="text-lg md:text-xl text-gray-400">
          You by this page, me by every recruiter.
        </p>

        <Link href="/" className="group w-fit">
          <div className="flex items-center gap-2 text-lg md:text-xl">
            <ArrowRight
              className="transition-transform duration-200 group-hover:-rotate-45"
              aria-hidden="true"
            />
            <span>Take me home</span>
          </div>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
