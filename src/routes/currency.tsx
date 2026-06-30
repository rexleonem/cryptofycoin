import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Coins, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
const cfydAsset = { url: "/image/cfyd.jpg" };

export const Route = createFileRoute("/currency")({
  head: () => ({
    meta: [
      { title: "$CFYC Currency — Cryptofy Coin" },
      { name: "description", content: "$CFYC gives immediate access to stable assets with exclusive ecosystem privileges. Learn how the Cryptofy currency works." },
      { property: "og:title", content: "$CFYC Currency — Cryptofy Coin" },
      { property: "og:description", content: "The utility currency powering the Cryptofy Digital Ecosystem." },
    ],
  }),
  component: CurrencyPage,
});

function CurrencyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <PageHero
        eyebrow="$CFYC Currency"
        title={<>The utility currency of the <span className="text-gradient-gold">Cryptofy ecosystem</span>.</>}
        desc="$CFYC provides immediate access to purchase other stable assets with exclusive privileges — the unifying coin built around real, everyday use cases."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <img src={cfydAsset.url} alt="$CFYC" className="relative rounded-3xl border border-border w-full" />
        </div>
        <div className="space-y-5">
          {[
            { i: <Coins className="w-5 h-5" />, t: "Access to stable assets", d: "Instantly swap into ecosystem stable assets at exclusive rates reserved for $CFYC holders." },
            { i: <Zap className="w-5 h-5" />, t: "Fast, low-cost settlements", d: "Powered by the Cryptofy Smart Chain (CSC) for high TPS and near-zero fees." },
            { i: <ShieldCheck className="w-5 h-5" />, t: "Audited & secure", d: "Smart contracts audited by SolidProof with zero high or medium criticality issues." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">{f.i}</span>
              <div>
                <h3 className="font-semibold">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <UseCases />
      <PageCTA />
      <SiteFooter />
    </div>
  );
}

function UseCases() {
  const cases = [
    "Buy & sell across DEXs and CEXs",
    "Pay for metaverse goods & services",
    "Stake & farm in the liquidity pool",
    "Settle P2P transactions instantly",
    "Hold for compounding ecosystem benefits",
    "Unlock exclusive private-sale privileges",
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Where you can use <span className="text-gradient-gold">$CFYC</span>.</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c} className="rounded-xl border border-border bg-card p-5 flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc: string }) {
  return (
    <section className="relative" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary">{eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto">{desc}</p>
      </div>
    </section>
  );
}

export function PageCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold">Ready your bags. <span className="text-gradient-gold">Don't fade $CFYC.</span></h2>
      <a href="/#buy" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">
        Buy $CFYC <ArrowRight className="w-4 h-4" />
      </a>
    </section>
  );
}
