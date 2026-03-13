import Header from "@/components/Header";

export const metadata = {
  title: "Linkly — Sahil Tiwari",
  description: "QR-based profile sharing app by Sahil Tiwari.",
};

export default function Linkly() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-11/12 md:w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <Header headername="Linkly" backHref="/works" />
        <p className="text-4xl md:text-6xl font-extrabold text-white/20">Coming Soon.</p>
      </main>
    </div>
  );
}