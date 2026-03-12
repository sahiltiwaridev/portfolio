"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaPinterest } from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/sahiltiwaridev",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/sahil-tiwari-dev",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/sahiltiwari.official",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://x.com/Sahil_Creates", icon: FaXTwitter, label: "X" },
  { href: "https://pin.it/3qZTuPaDz", icon: FaPinterest, label: "Pinterest" },
];

const inputStyles =
  "bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors duration-200 placeholder:text-gray-500";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-1/2 flex flex-col mx-auto gap-8 pt-12">
      <Header headername="Get in Touch" />

      <p className="text-xl">
        I'm on the job market, available, and caffeinated enough to respond
        quickly. Got work? Let's talk. Got an idea? Let's build. Got neither?
        Say hi anyway.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputStyles}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputStyles}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className={`${inputStyles} resize-none`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full text-sm border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm">
            Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">
            Something went wrong. Try again or email me directly.
          </p>
        )}

        <div className="flex flex-col items-center gap-4 pt-4">
          <span className="text-gray-400 text-sm">or find me here</span>
          <div className="flex gap-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
}
