import { Reveal } from "./Reveal";

const items = [
  { title: "Youth Campaigns", desc: "First-time voters, college outreach, digital-native events." },
  { title: "Women Outreach", desc: "Self-help groups, safety dialogues, household-level engagement." },
  { title: "Farmer Meetings", desc: "Mandi-level conversations and policy listening tours." },
  { title: "Community Events", desc: "Religious and cultural gatherings with respectful presence." },
  { title: "Door-to-Door Connect", desc: "Personal contact at scale, family by family." },
  { title: "Local Influencers", desc: "Trusted voices that move neighborhoods." },
];

export function MicroCampaigns() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
            Micro-Level Campaigns
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
            Targeted programs that reach every audience
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-royal/20 blur-3xl transition-all duration-500 group-hover:bg-royal/40" />
                <div className="relative">
                  <div className="font-display text-xl font-semibold">{it.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-royal-glow">
                    Program {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
