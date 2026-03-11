import { ChevronLeft } from "lucide-react";
import Link from "next/link";
export type headerProps = {
  headername: string;
};

export default function Header({ headername }: headerProps) {
  return (
    <header className="flex flex-row gap-6 items-center">
      <Link href="/">
        <ChevronLeft size={44} />
      </Link>
      <h1 className="text-2xl font-bold">{headername}</h1>
    </header>
  );
}
