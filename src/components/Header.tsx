import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export type headerProps = {
  headername: string;
  backHref?: string;
};

export default function Header({ headername, backHref = "/" }: headerProps) {
  return (
    <header className="flex flex-row gap-4 md:gap-6 items-center">
      <Link href={backHref}>
        <ChevronLeft size={32} className="md:hidden" />
        <ChevronLeft size={44} className="hidden md:block" />
      </Link>
      <h1 className="text-xl md:text-2xl font-bold">{headername}</h1>
    </header>
  );
}