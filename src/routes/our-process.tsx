import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/inciterz/Navbar";
import { Pillars } from "@/components/inciterz/Pillars";
import { Process } from "@/components/inciterz/Process";
import { WarRoom } from "@/components/inciterz/WarRoom";
import { Impact } from "@/components/inciterz/Impact";
import { CTA } from "@/components/inciterz/CTA";
import { Footer } from "@/components/inciterz/Footer";

export const Route = createFileRoute("/our-process")({
  component: OurProcessPage,
  head: () => ({
    meta: [
      { title: "Our Process — INCITERZ" },
      { name: "description", content: "Our pillars, campaign process, war room operations and measurable impact." },
      { property: "og:title", content: "Our Process — INCITERZ" },
      { property: "og:description", content: "How INCITERZ wins campaigns: pillars, process, war room and impact." },
    ],
  }),
});

function OurProcessPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-20 sm:pt-28 md:pt-32">
        <Pillars />
        <Process />
        <WarRoom />
        <Impact />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
