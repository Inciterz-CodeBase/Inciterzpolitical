import { Target, Megaphone, Crown, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Target,
    title: "Voter Targeting",
    desc: "Precision micro-segmentation by booth, demographic and sentiment.",
  },
  {
    icon: Megaphone,
    title: "Digital & Media Outreach",
    desc: "Multi-channel narrative engineering across every screen.",
  },
  {
    icon: Crown,
    title: "Public Image & Leadership",
    desc: "Position your candidate as the inevitable choice.",
  },
  {
    icon: Users,
    title: "Ground Team Strength",
    desc: "Trained cadres, motivated volunteers, watertight booth ops.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
            Our Four Pillars
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
            Built on the foundations of every winning campaign
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-royal">
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-card)" }}
                />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-royal)] text-primary-foreground shadow-royal">
                  <p.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="mt-4 text-xs font-medium uppercase tracking-wider text-royal-glow">
                  0{i + 1} / Pillar
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
