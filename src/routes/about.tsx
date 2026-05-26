import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/inciterz/Navbar";
import { Footer } from "@/components/inciterz/Footer";
import { Reveal } from "@/components/inciterz/Reveal";
import {
  Code2, Smartphone, Globe, Layers, Boxes, Cog,
  Search, Share2, Megaphone, Target, FileText, Users,
  Vote, BarChart3, MessageSquare, Shield, MapPin,
  CheckCircle2, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us - INCITERZ" },
      { name: "description", content: "Inciterz builds digital products and meaningful experiences that drive growth, engagement and measurable business results." },
      { property: "og:title", content: "About INCITERZ" },
      { property: "og:description", content: "Full-service IT, digital marketing and political campaign management." },
    ],
  }),
});

const itServices = [
  { icon: Globe, label: "Website Development" },
  { icon: Smartphone, label: "Mobile App Development (Android & iOS)" },
  { icon: Layers, label: "Progressive Web App (PWA) Development" },
  { icon: Code2, label: "Full Stack Development" },
  { icon: Boxes, label: "Cross-Platform Applications" },
  { icon: Cog, label: "Custom Software Solutions" },
];

const marketing = [
  { icon: Search, label: "Search Engine Optimization (SEO)" },
  { icon: Share2, label: "Social Media Optimization (SMO)" },
  { icon: Megaphone, label: "Social Media Marketing (SMM)" },
  { icon: Target, label: "Performance Marketing (PPC)" },
  { icon: FileText, label: "Content & Brand Strategy" },
  { icon: Users, label: "Lead Generation Campaigns" },
];

const political = [
  { icon: Vote, label: "Digital Political Campaigns" },
  { icon: BarChart3, label: "Voter Targeting & Analytics" },
  { icon: MessageSquare, label: "Social Media Strategy & Management" },
  { icon: Shield, label: "Online Reputation Management" },
  { icon: MapPin, label: "Booth-Level Digital Strategy" },
];

const approach = [
  "Understand business goals",
  "Build a tailored strategy",
  "Execute with precision",
  "Continuously optimize for performance",
];

const industries = [
  "Real Estate & Property", "E-commerce & Retail", "Healthcare & Fitness",
  "Education & eLearning", "Banking & Finance", "Travel & Hospitality",
  "Food & Restaurant", "Media & Entertainment", "Gaming & Leisure",
];

const why = [
  "Experienced and skilled team",
  "Result-driven execution",
  "End-to-end digital solutions",
  "Customized strategies for every client",
  "Strong focus on measurable growth",
];

function ServiceGrid({ title, items }: { title: string; items: { icon: any; label: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold md:text-2xl">{title}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="glass rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-royal">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-royal)] text-primary-foreground shadow-royal">
              <Icon size={18} />
            </div>
            <div className="text-sm font-medium">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-44 md:pb-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.2] animate-grid-pan" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">About Us</p>
            <h1 className="mt-4 mx-auto max-w-4xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Building digital products that <span className="text-gradient">drive real impact</span>
            </h1>
            <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground md:text-lg">
              At Inciterz, we build digital products and create meaningful digital experiences
              that drive growth, engagement, and measurable business results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid gap-8 sm:gap-10 lg:grid-cols-2 items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">Who We Are</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-4xl">
              A team of builders, marketers and strategists
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <p>
                We are a full-service IT solutions and digital marketing company focused on helping
                businesses transform their ideas into scalable and high-performing digital solutions.
                Whether you are a startup, enterprise, or political organization, we combine strategy,
                technology, and creativity to deliver real impact.
              </p>
              <p>
                Inciterz is a team of developers, designers, marketers, and strategists committed to
                delivering high-quality solutions. We believe every business is unique - that is why we
                follow a personalized and result-driven approach for every project we take on.
              </p>
              <p>
                Our objective is to build solutions that solve real problems and create strategies that
                drive sustainable growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-14 sm:py-20 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">What We Do</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
              End-to-end digital, marketing & campaign solutions
            </h2>
          </Reveal>
          <Reveal><ServiceGrid title="IT and Development Services" items={itServices} /></Reveal>
          <Reveal><ServiceGrid title="Digital Marketing Solutions" items={marketing} /></Reveal>
          <Reveal><ServiceGrid title="Political and Campaign Management" items={political} /></Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-14 sm:py-20 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">Our Approach</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">A clear, structured workflow</h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              We focus on building long-term partnerships rather than one-time projects.
            </p>
          </Reveal>
          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <Reveal key={step} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="font-display text-3xl font-bold text-royal-glow">0{i + 1}</div>
                  <div className="mt-3 font-medium">{step}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 sm:py-20 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">Industries We Serve</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">Working across sectors</h2>
          </Reveal>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 40}>
                <span className="glass inline-flex items-center rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium">
                  {ind}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14 sm:py-20 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">Why Choose Inciterz</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">Reasons clients trust us</h2>
          </Reveal>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w} delay={i * 80}>
                <div className="glass rounded-xl p-5 flex items-start gap-3">
                  <CheckCircle2 className="text-royal-glow shrink-0 mt-0.5" size={20} />
                  <span className="text-sm font-medium">{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-5xl max-w-3xl mx-auto">
              Let's <span className="text-gradient">work together</span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
              If you are looking to build a digital product, grow your business, or run effective
              campaigns, Inciterz can support you at every stage.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-royal)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-royal transition-transform hover:scale-[1.04]"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
