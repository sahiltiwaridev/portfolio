import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/Sectiondivider";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  PAGES,
  PERSON_ID,
  absoluteUrl,
  breadcrumbNode,
  buildMetadata,
  personNode,
} from "@/lib/seo";

export const metadata = buildMetadata({ ...PAGES.linkly });

const pageLinkStyles = "flex items-center gap-2 text-lg md:text-xl";
const arrowStyles = "transition-transform duration-200 group-hover:-rotate-45";

export default function Linkly() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-11/12 md:w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <JsonLd
          graph={[
            {
              "@type": "SoftwareApplication",
              name: "Linkly",
              url: absoluteUrl(PAGES.linkly.path),
              description: PAGES.linkly.description,
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Android",
              author: { "@id": PERSON_ID },
            },
            personNode(),
            breadcrumbNode([
              { name: "Home", path: PAGES.home.path },
              { name: "Works", path: PAGES.works.path },
              { name: "Linkly", path: PAGES.linkly.path },
            ]),
          ]}
        />
        <Header headername="Linkly" backHref="/works" />
        <article className="flex flex-col gap-6">
          <SectionDivider title="What it does" />
          <p>
            Linkly lets you share your professional profile instantly using a QR
            code and a camera. You create a profile once — name, phone, email,
            WhatsApp, links. The app generates a QR. Someone scans it, they get
            a full preview of exactly what you chose to share, and can save it
            locally on their device. No typing usernames. No spelling email
            addresses twice. No internet required. Just scan → preview → save.
          </p>
          <SectionDivider title="How it works" />
          <p>
            You control what you share. Meeting an HR manager? Share just your
            email and portfolio. Running a business? Share Instagram and
            WhatsApp only. No oversharing, no noise.
            <br />
            {""}
            <br />
            <span>Tap My QR — your code appears instantly.</span>
            <br />
            {""}
            <br />
            <span>
              Someone scans it, sees your profile, saves it locally.
              That`&apos;`s the entire flow.
            </span>
          </p>
          <SectionDivider title="Why it exists" />
          <p>
            The idea came from how seamless UPI payments are — scan, confirm,
            done. If money can move that effortlessly, sharing professional
            identity should be just as simple. Typing Instagram handles in 2026
            feels slightly outdated.
          </p>
          <SectionDivider title="Privacy & storage" />
          <p>
            Everything stays on your device — no server, no tracking, no
            background analytics. Updates are handled independently via direct
            APK. No Play Store, no gatekeeping.
          </p>
          <SectionDivider title="Built with" />
          <p>React Native, Expo, MMKV, Zustand, NativeWind, TypeScript.</p>
        </article>
        <nav aria-label="Project navigation">
          <ul aria-label="Social links">
            <li>
              <Link href="https://hashnode.com/@sahiltiwari" className="group">
                <div className={pageLinkStyles}>
                  <ArrowRight className={arrowStyles} aria-hidden="true" />
                  <span>Read how it was built</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="https://linkly-website.vercel.app/" className="group">
                <div className={pageLinkStyles}>
                  <ArrowRight className={arrowStyles} aria-hidden="true" />
                  <span>Download APK</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/sahiltiwaridev/linkly"
                className="group"
              >
                <div className={pageLinkStyles}>
                  <ArrowRight className={arrowStyles} aria-hidden="true" />
                  <span>Source</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
