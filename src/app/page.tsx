import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const linkStyles = "flex items-center gap-2 text-xl";
const arrowStyles = "transition-transform duration-200 group-hover:-rotate-45";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full px-20 py-44 gap-10">
      <div>
        <p className="text-6xl font-extrabold">
          <span className="flex items-center gap-2">
            Hey!
            <MdWavingHand className="text-yellow-400" />
          </span>{" "}
          I'm <Link href="/about">Sahil.</Link> I speak JavaScript, build{" "}
          <Link href="/works">things</Link> that barely work, and document the
          process that nobody reads.
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <ul>
          <li>
            <Link href="/about" className="group">
              <div className={linkStyles}>
                <ArrowRight className={arrowStyles} />
                <span>About Me</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/works" className="group">
              <div className={linkStyles}>
                <ArrowRight className={arrowStyles} />
                <span>My Works</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="group">
              <div className={linkStyles}>
                <ArrowRight className={arrowStyles} />
                <span>Get in touch</span>
              </div>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="https://github.com/sahiltiwaridev" target="_blank">
              <div className={linkStyles}>
                <FaGithub />
                <span>Where the bugs live</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/sahil-tiwari-dev"
              target="_blank"
            >
              <div className={linkStyles}>
                <FaLinkedin />
                <span>For the recruiters</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/sahiltiwari.official"
              target="_blank"
            >
              <div className={linkStyles}>
                <FaInstagram />
                <span>I also touch grass</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
