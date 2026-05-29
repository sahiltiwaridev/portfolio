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
            I'm Sahil, from Habra, West Bengal — a place you've probably never
            heard of. It's a small town, the internet is decent, and the tea is
            excellent. The people are a little weird but manageable.
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
            I did my BCA from Brainware University (2022–2025). College tried to
            teach me how to code, but it couldn't compete with YouTube, Stack
            Overflow, and a dangerous amount of late nights. College gave me the
            certificate, the internet gave me the actual skills, and sleep
            deprivation gave me the rest. No regrets — just a slightly expensive
            piece of paper and the memory of group assignments where everyone
            contributed equally. Allegedly.
          </p>

          <SectionDivider title="where it went" />
          <p>
            Sometimes I build to learn, sometimes because a problem exists and
            nobody solved it properly — usually both, with the same deadline.
            It's all JavaScript for now, which is either a superpower or a
            coping mechanism, depending on the day. I also have ideas I'd like
            to give a life to someday — the time and skills are getting there.
            Slowly. Very slowly. Can't say what's in progress right now — partly
            mysterious, mostly because it's still half-broken. When it's ready,
            it'll show up on the{" "}
            <Link href="/works" className="underline underline-offset-4">
              Works page
            </Link>
            .
          </p>

          <SectionDivider title="the stack" />
          <p>
            Tech stack? React.js, Next.js, React Native for what you see —
            Node.js, Express, PostgreSQL and MongoDB to manage the data. Worthy
            enough to handle most things. That's why I picked them.
          </p>

          <SectionDivider title="when I'm not coding" />
          <p>
            When I'm not drowning in TypeScript errors, I shoot landscapes — not
            professional, just personal (check my{" "}
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
            if you're curious). I play football in the local ground, game
            occasionally, listen to songs I can't fully understand but the vibe
            is always present, and genuinely enjoy teaching when I get the
            chance.
          </p>

          <SectionDivider title="what's next" />
          <p>
            Career plan? Currently working as a Management Trainee at my
            university — decent gig, learning things, not done yet. A tech job
            is the goal, always was. The rest — my own thing, maybe teaching —
            comes after. Or all at once, at 2am, between two bugs and a deadline
            I definitely knew about way earlier.
          </p>

          <SectionDivider title="one day" />
          <p>
            Then there are the things that live in the 'one day' folder — a
            bike, long roads, and drawing, which I was actually good at before I
            ghosted it ten thousand years ago. The folder's getting heavy. The
            salary's not helping.
          </p>

          <p className="pt-2">
            If you read all of this, you're either a recruiter, a stalker, or
            genuinely curious — either way,{" "}
            <Link href="/contact" className="underline underline-offset-4">
              get in touch
            </Link>
            . I'm very much available.
          </p>

        </article>
      </main>
      <Footer />
    </div>
  );
}