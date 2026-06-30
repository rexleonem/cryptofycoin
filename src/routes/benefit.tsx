import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { PageHero, PageCTA } from "./currency";
import { TrendingUp, Lock, Coins, LineChart } from "lucide-react";
const tokenAsset = { url: "/image/token.jpg" };

export const Route = createFileRoute("/benefit")({
  head: () => ({
    meta: [
      { title: "Investor Benefits — Cryptofy Coin" },
      { name: "description", content: "Every investment in Cryptofy Digital first acquires $CFYC and funds the ecosystem — designed to compound returns for investors." },
      { property: "og:title", content: "Investor Benefits — Cryptofy Coin" },
      { property: "og:description", content: "How investing in the Cryptofy ecosystem compounds returns." },
    ],
  }),
  component: BenefitPage,
});

function BenefitPage() {
  const benefits = [
    { i: <Coins className="w-5 h-5" />, t: "Coin-first investment", d: "Every investor or VC commitment first acquires $CFYC, aligning growth with token value." },
    { i: <TrendingUp className="w-5 h-5" />, t: "Ecosystem upside", d: "Funds promote and grow the Cryptofy Digital Ecosystem globally — multiple revenue streams flow back to holders." },
    { i: <Lock className="w-5 h-5" />, t: "Built for longevity", d: "90% of private-sale investment is auto-locked for 365 days to protect liquidity and ensure stability." },
    { i: <LineChart className="w-5 h-5" />, t: "Compounding returns", d: "As the ecosystem expands into new sectors, investors benefit from every stream of profit by design." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <PageHero
        eyebrow="Investor Benefits"
        title={<>Investments designed to <span className="text-gradient-gold">compound</span>.</>}
        desc="Every investment made by an investor or venture capitalist in Cryptofy Digital first acquires Cryptofy Coin and funds the global ecosystem — engineered so investors profit from every stream the team builds."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <img src={tokenAsset.url} alt="Tokenomics" className="relative rounded-3xl border border-border w-full" />
        </div>
        <div className="space-y-4">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">{b.i}</span>
              <div>
                <h3 className="font-semibold">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: "250M", l: "Total Supply" },
            { v: "8%", l: "Private Sale" },
            { v: "365d", l: "Investor Lock" },
            { v: "8%", l: "Emergency Tax" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </div>
  );
}
