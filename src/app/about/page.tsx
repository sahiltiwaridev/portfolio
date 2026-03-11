import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-1/2 flex flex-col mx-auto gap-6">
      <p>
        I'm Sahil, from Habra, West Bengal — a place you've probably never heard
        of. It's a small town, the internet is decent, and the tea is excellent.
        The people are a little weird but manageable.
      </p>
      <div className="flex flex-row justify-center items-center py-5">
        <Image src="/me.jpg" alt="Sahil" width={400} height={400} />
        <Image src="/arrow.png" alt="arrow" width={200} height={50} />
      </div>
      <p>
        I did my BCA from Brainware University (2022-2025). College tried to
        teach me how to code, but it couldn't compete with YouTube, Stack
        Overflow, and a dangerous amount of late nights. College gave me the
        certificate, the internet gave me the actual skills, and sleep
        deprivation gave me the rest. No regrets — just a slightly expensive
        piece of paper and the memory of group assignments where everyone
        contributed equally. Allegedly.
      </p>
      <p>
        Sometimes I build to learn, sometimes because a problem exists and
        nobody solved it properly — usually both, with the same deadline. It's
        all JavaScript for now, which is either a superpower or a coping
        mechanism, depending on the day. I also have ideas I'd like to give a
        life to someday — just waiting for the right time, the right skills, or
        honestly just a job first. Can't say what's in progress right now —
        partly mysterious, mostly because it's still half-broken. When it's
        ready, it'll show up on the{" "}
        <Link href="/works" className="underline underline-offset-4">
          Works page
        </Link>
        .
      </p>
      <p>
        When I'm not drowning in TypeScript errors, I shoot landscapes — not
        professional, just personal (check my{" "}
        <Link
          href="https://instagram.com/sahiltiwari.official"
          className="underline underline-offset-4"
          target="_blank"
        >
          Instagram
        </Link>{" "}
        or{" "}
        <Link
          href="https://pin.it/3qZTuPaDz"
          className="underline underline-offset-4"
          target="_blank"
        >
          Pinterest
        </Link>{" "}
        if you're curious). I play football in the local ground, game
        occasionally, listen to songs I can't fully understand but the vibe is
        always present, and genuinely enjoy teaching when I get the chance.
      </p>
      <p>
        Then there are the things I'll do once I get a job — buy a bike, hit the
        roads, pick up drawing again like I used to, ten thousand years ago. The
        list is growing. The salary isn't.
      </p>
      <p>
        Career plan? Job first, then my own thing, then maybe teach. Or all
        three at once — I'll figure it out, probably at 2am between two bugs and
        a deadline I definitely knew about way earlier.
      </p>
      <p>
        If you read all of this, you're either a recruiter, a stalker, or
        genuinely curious — either way,{" "}
        <Link href="/contact" className="underline underline-offset-4">
          get in touch
        </Link>
        . I'm very much available.
      </p>
    </div>
  );
}
