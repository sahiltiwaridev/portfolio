import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionDivider from "@/components/Sectiondivider";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Sahil Tiwari",
  description:
    "Self-taught JavaScript developer from Habra, West Bengal. BCA graduate, building with React and Next.js.",
  alternates: {
    canonical: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app/about",
  },
  openGraph: {
    title: "About — Sahil Tiwari",
    description:
      "Self-taught JavaScript developer from Habra, West Bengal. BCA graduate, building with React and Next.js.",
    url: "https://portfolio-six-chi-kmc4bfrxcz.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Sahil Tiwari",
    description:
      "Self-taught JavaScript developer from Habra, West Bengal. BCA graduate, building with React and Next.js.",
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-11/12 md:w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <Header headername="About Me" />
        <article className="flex flex-col gap-6">
          <p>
            I’m Sahil, a frontend and full-stack developer from Habra, a small town a few kilometres from Kolkata. I build with React, Next.js, React Native, Node.js, TypeScript ... basically the JavaScript ecosystem, with the stack chosen per project. I’m looking for my first developer role, and yes, I’m open to relocating.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center py-5 gap-4">
            <Link
              href="https://instagram.com/sahiltiwari.official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Sahil Tiwari's Instagram profile"
            >
              <Image
                src="/me.jpg"
                alt="Sahil Tiwari, JavaScript developer from Habra, West Bengal"
                width={400}
                height={400}
                priority
                className="w-64 md:w-96"
              />
            </Link>
            <Image
              src="/arrow.png"
              alt=""
              aria-hidden="true"
              width={200}
              height={50}
              className="hidden md:block w-48"
            />
            <Image
              src="/arrow-mobile.png"
              alt=""
              aria-hidden="true"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              className="block md:hidden"
            />
          </div>

          <SectionDivider title="how it started" />
          <p>
            I did my BCA at Brainware University (2022-2025). College gave me the certificate. YouTube, Stack Overflow and a dangerous number of late nights gave me the skills. No regrets, just a slightly expensive piece of paper.
          </p>

          <SectionDivider title="where it went" />
          <p>
            Right now I’m building things for mobile, web and desktop, and
            learning something new along the way. I’m working on a few ideas at
            the moment. The finished ones are on the{" "}
            <Link href="/works" className="underline underline-offset-4">
              Works page
            </Link>
            , and the half-broken ones will show up there too when they’re
            ready.
          </p>

          <SectionDivider title="my toolkit" />
          <p>
            It’s all JavaScript/TypeScript for now, which is either a superpower
            or a coping mechanism, depending on the day. My day to day tools are
            React.js, Next.js, React Native, Electron, Node.js, NestJS,
            PostgreSQL, MongoDB. But I’m not married to them. If a project
            needs something else, I’ll pick it up.
          </p>
            
                    <SectionDivider title="behind the screen" />
          <p>
            When I’m not drowning in TypeScript errors, I shoot landscapes. Not
            professionally, just personally (check my{" "}
            <Link
              href="https://instagram.com/sahiltiwari.official"
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>{" "}
            or{" "}
            <Link
              href="https://pin.it/3qZTuPaDz"
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </Link>{" "}
            if you’re curious). I play football at the local ground, play games
            occasionally, listen to songs I can’t fully understand but the vibe
            is always there, and genuinely enjoy teaching when I get the
            chance.
          </p>

          <SectionDivider title="what’s next" />
          <p>
            Career plan? I recently wrapped up a Management Trainee role at my
            university’s Training and Placement Office. Decent gig, learned a
            lot, but it’s done now. A tech job is the goal, always was.
            Everything else, my own projects and maybe teaching, comes after. Or
            all at once, at 2am, powered by tea and a deadline I forgot about.
          </p>

                    <p className="pt-2">
            If you read all of this, you’re either a recruiter, a stalker, or
            genuinely curious — either way,{" "}
            <Link href="/contact" className="underline underline-offset-4">
              get in touch
            </Link>
            . I’m very much available.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
