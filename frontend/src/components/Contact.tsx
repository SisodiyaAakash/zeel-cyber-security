import { useState } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { apiPost } from "@/lib/api";
import { Tag, Reveal } from "@/components/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const CHANNELS = [
  { label: "EMAIL", value: "zeelchaudhari119@gmail.com", href: "mailto:zeelchaudhari119@gmail.com", testid: "contact-email-link" },
  { label: "PHONE", value: "+1 (609) 775-9747", href: "tel:+16097759747", testid: "contact-phone-link" },
  { label: "LINKEDIN", value: "zeel-chaudhari-7432832b1", href: "https://linkedin.com/in/zeel-chaudhari-7432832b1", testid: "contact-linkedin-link" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: (body: { name: string; email: string; message: string }) =>
      apiPost<ContactInquiry>("/contact", body),
    onSuccess: () => {
      toast.success("Transmission received. Zeel will respond shortly.");
      setName("");
      setEmail("");
      setMessage("");
    },
    onError: () => {
      toast.error("Transmission failed. Try the direct channels instead.");
    },
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email, message });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Tag>05 // Contact Vault</Tag>
        </Reveal>
        <div className="mt-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
                Open a <span className="text-emerald-400">secure channel</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                Building or scaling a security operations capability? Hiring for a SOC
                that defends something that matters? Send a transmission — every message
                lands directly in the vault.
              </p>
            </Reveal>
            <div className="mt-9 border border-slate-800 divide-y divide-slate-800">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.label} delay={0.12 + i * 0.06}>
                  <a
                    href={c.href}
                    target={c.label === "LINKEDIN" ? "_blank" : undefined}
                    rel={c.label === "LINKEDIN" ? "noreferrer" : undefined}
                    data-testid={c.testid}
                    className="group flex items-center justify-between gap-4 px-6 py-5 hover:bg-[#11161D] transition-colors duration-300"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500 group-hover:text-emerald-400 transition-colors duration-300">
                      {c.label}
                    </span>
                    <span className="text-sm text-slate-200 group-hover:text-emerald-300 transition-colors duration-300 truncate">
                      {c.value} <span className="text-emerald-500">↗</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form
                data-testid="contact-form"
                onSubmit={submit}
                className="scanlines relative border border-slate-800 bg-[#0B1015] p-6 sm:p-9"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
                  $ ./transmit --secure
                </p>
                <div className="mt-7 grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      data-testid="contact-name-input"
                      required
                      maxLength={120}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Operator"
                      className="mt-2 rounded-none border-slate-700 bg-[#090B0E] font-mono text-sm focus-visible:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      data-testid="contact-email-input"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="mt-2 rounded-none border-slate-700 bg-[#090B0E] font-mono text-sm focus-visible:border-emerald-500"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    data-testid="contact-message-input"
                    required
                    maxLength={2000}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the mission…"
                    className="mt-2 rounded-none border-slate-700 bg-[#090B0E] font-mono text-sm focus-visible:border-emerald-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-testid="contact-form-submit"
                  disabled={mutation.isPending}
                  className="mt-7 w-full sm:w-auto bg-emerald-500 px-10 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#022C22] hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {mutation.isPending ? "Transmitting…" : "Send Transmission"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
