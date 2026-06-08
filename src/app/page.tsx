import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { MdWavingHand } from "react-icons/md";

export const metadata = {
  title: "Sahil Tiwari — JavaScript Developer",
  description:
    "Sahil Tiwari is a JavaScript developer from West Bengal, India. Building web apps with React and Next.js.",
  alternates: {
    canonical: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app",
  },
};

const pageLinkStyles = "flex items-center gap-2 text-lg md:text-xl";
const socialLinkStyles =
  "flex items-center gap-2 text-lg md:text-xl text-gray-400 hover:text-white duration-200";
const arrowStyles = "transition-transform duration-200 group-hover:-rotate-45";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full px-6 md:px-20 py-20 md:py-44 gap-8">
      <p className="sr-only">
        Sahil Tiwari is a JavaScript developer from West Bengal, India, building
        web applications, mobile apps, and developer-focused projects using
        React, Next.js, React Native, Node.js, PostgreSQL, and MongoDB.
      </p>
      <h1 className="text-4xl md:text-6xl font-extrabold">
        <span className="flex items-center gap-2">
          Hey!
          <MdWavingHand className="text-yellow-400" aria-hidden="true" />
        </span>{" "}
        I'm Sahil. I speak JavaScript, build things that somehow work, and
        document the results that nobody reads.
      </h1>

      <nav aria-label="Site navigation">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          <ul aria-label="Pages">
            <li>
              <Link href="/about" className="group">
                <div className={pageLinkStyles}>
                  <ArrowRight className={arrowStyles} aria-hidden="true" />
                  <span>About Me</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/works" className="group">
                <div className={pageLinkStyles}>
                  <ArrowRight className={arrowStyles} aria-hidden="true" />
                  <span>My Works</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="group">
                <div className={pageLinkStyles}>
                  <ArrowRight className={arrowStyles} aria-hidden="true" />
                  <span>Get in touch</span>
                </div>
              </Link>
            </li>
            <li>
              <a
                href="/Sahil_Tiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className={pageLinkStyles}>
                  <ArrowRight className={arrowStyles} aria-hidden="true" />
                  <span>Resume</span>
                </div>
              </a>
            </li>
          </ul>
          <ul aria-label="Social links">
            <li>
              <Link
                href="https://github.com/sahiltiwaridev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={socialLinkStyles}>
                  <FaGithub aria-hidden="true" />
                  <span>Where the bugs live</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/in/sahil-tiwari-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={socialLinkStyles}>
                  <FaLinkedin aria-hidden="true" />
                  <span>For the recruiters</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/sahiltiwari.official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={socialLinkStyles}>
                  <FaInstagram aria-hidden="true" />
                  <span>I also touch grass</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://hashnode.com/@sahiltiwari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={socialLinkStyles}>
                  <SiHashnode aria-hidden="true" />
                  <span>Actually readable docs</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
