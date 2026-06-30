import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { PageHero, PageCTA } from "./currency";
import { Globe2, Gamepad2, Boxes, Sparkles } from "lucide-react";
const blockchainAsset = { url: "/image/blockchain.jpg" };

export const Route = createFileRoute("/metaverse")({
  head: () => ({
    meta: [
      { title: "$CFYC as a Metaverse Coin — Cryptofy Coin" },
      { name: "description", content: "$CFYC is used to complete all types of metaverse transactions — the native settlement layer for virtual economies." },
      { property: "og:title", content: "$CFYC as a Metaverse Coin" },
      { property: "og:description", content: "Settle every metaverse transaction with the unifying Cryptofy coin." },
    ],
  }),
  component: MetaversePage,
});

function MetaversePage() {
  const pillars = [
    { i: <Boxes className="w-5 h-5" />, t: "Virtual assets", d: "Buy, sell, and trade NFTs, land parcels, and digital goods across partner metaverses." },
    { i: <Gamepad2 className="w-5 h-5" />, t: "In-world commerce", d: "Pay for items, experiences, and services inside games and immersive worlds with $CFYC." },
    { i: <Globe2 className="w-5 h-5" />, t: "Cross-world identity", d: "One coin, every world — settle transactions across multiple virtual ecosystems seamlessly." },
    { i: <Sparkles className="w-5 h-5" />, t: "Creator payouts", d: "Builders and creators get paid instantly with near-zero fees on the Cryptofy Smart Chain." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <PageHero
        eyebrow="Metaverse Coin"
        title={<>The settlement layer of the <span className="text-gradient-gold">virtual economy</span>.</>}
        desc="As a metaverse coin, $CFYC is used to complete all types of metaverse transactions — bridging the gap between virtual worlds and the real economy."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">{p.i}</span>
              <h3 className="mt-4 font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />
          <img src={blockchainAsset.url} alt="Metaverse network" className="relative rounded-3xl border border-border w-full" />
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </div>
  );
}
