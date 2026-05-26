import { useState } from "react";
import {
  BarChart3,
  Smartphone,
  Footprints,
  Radar,
  Mic,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

type Category = {
  key: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  items: { title: string; desc: string }[];
};

const categories: Category[] = [
  {
    key: "research",
    icon: BarChart3,
    title: "Strategic Research & Intelligence",
    tagline: "Data before doctrine.",
    items: [
      { title: "Booth Strength Analysis", desc: "Granular booth-level scoring across the constituency." },
      { title: "Voter Sentiment Analysis", desc: "Real-time pulse from offline and online conversations." },
      { title: "Community & Caste Mapping", desc: "Demographic intelligence engineered for outreach." },
      { title: "Opposition Tracking", desc: "Their moves, framed and countered before they land." },
      { title: "Winning Strategy Planning", desc: "A bespoke war plan, written for your seat." },
    ],
  },
  {
    key: "digital",
    icon: Smartphone,
    title: "Digital Campaign Management",
    tagline: "Own the narrative on every screen.",
    items: [
      { title: "Social Media Campaigns", desc: "Daily content engines across Meta, X and YouTube." },
      { title: "Content Creation", desc: "Reels, shorts, long-form films, motion graphics." },
      { title: "Narrative Control", desc: "Talking points, framing, response playbooks." },
      { title: "WhatsApp & SMS Outreach", desc: "Hyperlocal messaging at million-voter scale." },
      { title: "Influencer Campaigns", desc: "Macro and micro voices aligned with your story." },
    ],
  },
  {
    key: "ground",
    icon: Footprints,
    title: "Ground Operations",
    tagline: "Where elections are actually won.",
    items: [
      { title: "Door-to-Door Campaigns", desc: "Trained canvassers with structured scripts." },
      { title: "Cadre Building & Training", desc: "Disciplined party workers, ready for game day." },
      { title: "Booth Management", desc: "BLA networks, polling agents, slip distribution." },
      { title: "Volunteer Mobilization", desc: "Recruit, train and deploy at scale." },
    ],
  },
  {
    key: "warroom",
    icon: Radar,
    title: "War Room & Analytics",
    tagline: "A command center that never sleeps.",
    items: [
      { title: "Live Dashboards", desc: "Every booth, every metric, every minute." },
      { title: "Data-Driven Decisions", desc: "Resource allocation backed by hard numbers." },
      { title: "Rapid Response System", desc: "Counter narratives within minutes, not hours." },
      { title: "Election Day Monitoring", desc: "Turnout tracking and live ground command." },
    ],
  },
  {
    key: "pr",
    icon: Mic,
    title: "PR, Media & Communication",
    tagline: "How leaders are built and protected.",
    items: [
      { title: "Media Management", desc: "Print, TV, digital — coordinated and on-message." },
      { title: "Speech & Messaging Strategy", desc: "Words that move rooms and move votes." },
      { title: "Reputation Building", desc: "A long-arc image strategy for the candidate." },
      { title: "Crisis Handling", desc: "Calm command when stories break." },
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState<string | null>("research");

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
            A full-stack consulting practice for modern political campaigns
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Five interlocking capabilities, deployed as one campaign machine.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-14 space-y-4">
          {categories.map((c, i) => {
            const isOpen = open === c.key;
            return (
              <Reveal key={c.key} delay={i * 80}>
                <div
                  className={`group rounded-2xl glass hover-lift transition-all duration-500 ${
                    isOpen ? "shadow-royal ring-glow" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : c.key)}
                    className="flex w-full items-center gap-3 p-4 sm:gap-5 sm:p-6 text-left"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-vibrant)] text-primary-foreground shadow-royal transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <c.icon size={20} className="sm:hidden" />
                      <c.icon size={22} className="hidden sm:block" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-royal-glow">
                        Category {String.fromCharCode(65 + i)}
                      </div>
                      <h3 className="mt-1 font-display text-base font-semibold sm:text-xl md:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{c.tagline}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-foreground" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-3 border-t border-border/60 p-4 sm:p-6 sm:grid-cols-2 lg:grid-cols-3">
                        {c.items.map((it) => (
                          <div
                            key={it.title}
                            className="rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-royal/60 hover:bg-card"
                          >
                            <div className="font-display text-sm font-semibold">
                              {it.title}
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                              {it.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
