import { Activity, MapPin, TrendingUp, Radio } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function WarRoom() {
  return (
    <section id="warroom" className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/*
          `min-w-0` on each grid item is critical: CSS Grid items default to
          min-width: auto, so any descendant wider than the viewport (e.g. the
          marquee with whitespace-nowrap) would otherwise force the column to
          exceed the screen width, dragging the heading column with it.
        */}
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
              The War Room
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
              A command center built for election day - and every day before it
            </h2>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground">
              Live booth dashboards, sentiment streams, opposition trackers and
              rapid-response protocols. Our war room turns raw signal into
              decisions in minutes.
            </p>
            <ul className="mt-6 sm:mt-8 space-y-3 text-sm">
              {[
                "Real-time data ingestion from 5,000+ booths",
                "Voter turnout tracking, hour by hour",
                "Sentiment heatmaps across constituencies",
                "Coordinated rapid response across teams",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold animate-blink" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="min-w-0">
            <div className="relative w-full max-w-full overflow-hidden rounded-2xl glass-strong p-3 sm:p-5 shadow-royal">
              {/* status bar */}
              <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 animate-blink" />
                  <span className="truncate text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Live · Constituency #042
                  </span>
                </div>
                <div className="shrink-0 text-[10px] sm:text-xs text-muted-foreground">14:32 IST</div>
              </div>

              {/* metrics */}
              <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { icon: Activity, label: "Turnout", value: 67, suffix: "%", color: "text-royal-glow" },
                  { icon: MapPin, label: "Booths Live", value: 1248, suffix: "", color: "text-gold" },
                  { icon: TrendingUp, label: "Sentiment", value: 82, suffix: "%", color: "text-emerald-400" },
                  { icon: Radio, label: "Alerts/hr", value: 36, suffix: "", color: "text-royal-glow" },
                ].map((m) => (
                  <div key={m.label} className="min-w-0 rounded-xl border border-border/60 bg-card/60 p-3 sm:p-4">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                      <m.icon size={12} className={`${m.color} shrink-0 sm:hidden`} />
                      <m.icon size={14} className={`${m.color} shrink-0 hidden sm:block`} />
                      <span className="truncate">{m.label}</span>
                    </div>
                    <div className="mt-1.5 sm:mt-2 font-display text-lg sm:text-2xl font-bold tabular-nums">
                      <Counter to={m.value} suffix={m.suffix} />
                    </div>
                  </div>
                ))}
              </div>

              {/* chart */}
              <div className="mt-4 sm:mt-5 rounded-xl border border-border/60 bg-card/60 p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="truncate text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Booth Activity
                  </span>
                  <span className="shrink-0 text-[10px] sm:text-xs text-royal-glow">+12.4%</span>
                </div>
                <div className="flex h-20 sm:h-28 items-end gap-0.5 sm:gap-1.5">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const h = 25 + Math.abs(Math.sin(i * 0.6)) * 70;
                    // Hide every other bar on small screens so remaining bars
                    // are wide enough to read.
                    const hideOnMobile = i % 2 === 1;
                    return (
                      <div
                        key={i}
                        style={{ height: `${h}%`, animationDelay: `${i * 40}ms` }}
                        className={`min-w-0 flex-1 rounded-sm bg-gradient-to-t from-royal/30 to-royal-glow animate-fade-up ${
                          hideOnMobile ? "hidden sm:block" : ""
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* alert ticker - the parent's `overflow-hidden` requires this
                  block to be allowed to shrink (min-w-0), otherwise the
                  whitespace-nowrap inside forces it to expand past the panel. */}
              <div className="mt-4 sm:mt-5 w-full min-w-0 overflow-hidden rounded-xl border border-border/60 bg-card/60">
                <div className="flex animate-marquee whitespace-nowrap py-2 text-[10px] sm:text-xs text-muted-foreground">
                  {Array.from({ length: 2 }).map((_, k) => (
                    <div key={k} className="flex shrink-0 gap-6 sm:gap-8 px-4 sm:px-6">
                      <span>● Booth 412 turnout +18%</span>
                      <span>● Opposition rally - Sector 9</span>
                      <span>● Volunteer surge - Ward 14</span>
                      <span>● Reel #082 trending locally</span>
                      <span>● WhatsApp sends: 2.4M today</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
