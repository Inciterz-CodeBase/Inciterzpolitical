import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { Navbar } from "@/components/inciterz/Navbar";
import { Footer } from "@/components/inciterz/Footer";
import { Reveal } from "@/components/inciterz/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact INCITERZ - Talk to Our Strategists" },
      {
        name: "description",
        content:
          "Reach out to INCITERZ for political consulting, campaign management and strategic communication. Offices in Noida, India.",
      },
      { property: "og:title", content: "Contact INCITERZ" },
      {
        property: "og:description",
        content: "Get in touch for strategy, campaigns and communication services.",
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().max(100).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      setError(r.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setError(null);
    const subject = `New enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}${
      form.phone ? "\nPhone: " + form.phone : ""
    }${form.service ? "\nService: " + form.service : ""}${
      form.budget ? "\nBudget: " + form.budget : ""
    }${form.message ? "\n\nMessage:\n" + form.message : ""}`;
    window.location.href = `mailto:connect@inciterz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.15]" />
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
              Contact
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-6xl">
              Let's build your <span className="text-gradient">winning campaign</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
              We just need a couple of hours! No more than 2 working days since receiving your enquiry.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-14 grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <form
                onSubmit={submit}
                className="rounded-3xl bg-[image:var(--gradient-royal)] p-6 text-primary-foreground shadow-royal sm:p-8 md:p-10"
              >
                <h2 className="font-display text-xl sm:text-2xl font-bold md:text-3xl">
                  To make requests for further information
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-primary-foreground/80">
                  Drop your details and our team will reach out shortly.
                </p>

                <div className="mt-6 sm:mt-8 grid gap-4 md:grid-cols-2">
                  <input
                    required
                    placeholder="Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-md bg-white/10 px-4 py-3 text-sm placeholder:text-primary-foreground/70 outline-none focus:bg-white/20"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-md bg-white/10 px-4 py-3 text-sm placeholder:text-primary-foreground/70 outline-none focus:bg-white/20"
                  />
                  <input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-md bg-white/10 px-4 py-3 text-sm placeholder:text-primary-foreground/70 outline-none focus:bg-white/20 md:col-span-2"
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="rounded-md bg-white/10 px-4 py-3 text-sm outline-none focus:bg-white/20 [&>option]:bg-white [&>option]:text-slate-900"
                  >
                    <option value="">Interested In Service</option>
                    <option>Political Consulting</option>
                    <option>Digital Campaigns</option>
                    <option>Research & Intelligence</option>
                    <option>Ground Operations</option>
                    <option>PR & Media</option>
                  </select>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="rounded-md bg-white/10 px-4 py-3 text-sm outline-none focus:bg-white/20 [&>option]:bg-white [&>option]:text-slate-900"
                  >
                    <option value="">Select Project Budget</option>
                    <option>Under ₹5L</option>
                    <option>₹5L – ₹25L</option>
                    <option>₹25L – ₹1Cr</option>
                    <option>₹1Cr+</option>
                  </select>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-md bg-white/10 px-4 py-3 text-sm placeholder:text-primary-foreground/70 outline-none focus:bg-white/20 md:col-span-2"
                  />
                </div>

                {error && (
                  <p className="mt-4 text-sm text-red-200">{error}</p>
                )}
                {sent && (
                  <p className="mt-4 text-sm text-primary-foreground">
                    Thanks! We've opened your email app to send the enquiry to connect@inciterz.com.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-white py-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.01]"
                >
                  Submit a request
                </button>
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-6">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-royal-glow">
                    <Briefcase size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Project Enquiries
                    </span>
                  </div>
                  <a href="mailto:sales@inciterz.com" className="mt-2 block break-all text-base font-medium hover:text-royal-glow">
                    sales@inciterz.com
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">Sales : +91 9810200568</p>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-royal-glow">
                    <Mail size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      General Enquiries
                    </span>
                  </div>
                  <a href="mailto:connect@inciterz.com" className="mt-2 block break-all text-base font-medium hover:text-royal-glow">
                    connect@inciterz.com
                  </a>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-royal-glow">
                    <Phone size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">Careers</span>
                  </div>
                  <a href="mailto:careers@inciterz.com" className="mt-2 block break-all text-base font-medium hover:text-royal-glow">
                    careers@inciterz.com
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    +91 8527318585 · 0120 4977330
                  </p>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-royal-glow">
                    <MapPin size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Our Office - India
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    3rd Floor, H 146-147,<br />
                    Sector 63 Noida,<br />
                    Gautam Buddha Nagar, U.P.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
