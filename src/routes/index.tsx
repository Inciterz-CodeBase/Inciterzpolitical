import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/inciterz/Navbar";
import { Hero } from "@/components/inciterz/Hero";
import { Pillars } from "@/components/inciterz/Pillars";
import { Services } from "@/components/inciterz/Services";
import { Process } from "@/components/inciterz/Process";
import { MicroCampaigns } from "@/components/inciterz/MicroCampaigns";
import { WarRoom } from "@/components/inciterz/WarRoom";
import { Impact } from "@/components/inciterz/Impact";
import { CTA } from "@/components/inciterz/CTA";
import { Footer } from "@/components/inciterz/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "INCITERZ — Smart Strategies for Winning Political Campaigns" },
      {
        name: "description",
        content:
          "INCITERZ is a modern political consulting and campaign management firm. Data-driven strategy, war room analytics, ground operations and digital outreach.",
      },
      { property: "og:title", content: "INCITERZ — Winning Political Campaigns" },
      {
        property: "og:description",
        content:
          "Strategy. Intelligence. Victory. A full-stack political consulting practice for modern campaigns.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Pillars />
      <Services />
      <Process />
      <MicroCampaigns />
      <WarRoom />
      <Impact />
      <CTA />
      <Footer />
    </main>
  );
}
