import ContactClient from "@/components/ContactClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Get in Touch — Sahil Tiwari",
  description: "Reach out to Sahil Tiwari for work, collaboration, or just to talk.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-1/2 flex flex-col mx-auto gap-8 pt-12 flex-1">
        <Header headername="Get in Touch" />
        <ContactClient />
      </main>
      <Footer />
    </div>
  )
}