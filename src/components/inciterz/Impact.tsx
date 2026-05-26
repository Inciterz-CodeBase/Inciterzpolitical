import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { value: 120, suffix: "+", label: "Campaigns Managed" },
  { value: 18, suffix: "M+", label: "Voters Reached" },
  { value: 5400, suffix: "+", label: "Booths Activated" },
  { value: 95, suffix: "%", label: "Win Rate" },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
            Impact So Far
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
            Numbers that speak louder than slogans
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="rounded-2xl glass p-6 sm:p-8 text-center">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 sm:mt-12">
          <div className="rounded-2xl glass-strong p-6 sm:p-8 md:p-10">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Featured Case · State Assembly 2024
                </p>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold md:text-3xl">
                  A 14-point swing in a constituency declared "unwinnable"
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                  In 90 days, our team rebuilt the booth network, ran a
                  saturation digital campaign and engineered a final-week
                  turnout operation that delivered the seat with a comfortable
                  margin.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-1 md:gap-4">
                {[
                  ["+14", "Vote Swing"],
                  ["3.2M", "Impressions/day"],
                  ["91%", "BLA Coverage"],
                ].map(([k, v]) => (
                  <div key={v} className="rounded-xl border border-border/60 p-3 sm:p-4 text-center">
                    <div className="font-display text-lg sm:text-2xl font-bold">{k}</div>
                    <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
