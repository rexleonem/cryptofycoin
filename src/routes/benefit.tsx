
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { PageHero, PageCTA } from "./currency";
import { TrendingUp, Lock, Coins, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const tokenAsset = { url: "/image/token.jpg" };

export const Route = createFileRoute("/benefit")({
  head: () => ({
    meta: [
      { title: "Investor Benefits — Cryptofy Coin" },
      {
        name: "description",
        content:
          "Every investment in Cryptofy Digital first acquires $CFYC and funds the ecosystem — designed to compound returns for investors.",
      },
      { property: "og:title", content: "Investor Benefits — Cryptofy Coin" },
      {
        property: "og:description",
        content: "How investing in the Cryptofy ecosystem compounds returns.",
      },
    ],
  }),
  component: BenefitPage,
});

function BenefitPage() {
  const benefits = [
    {
      i: <Coins className="h-5 w-5" />,
      t: "Coin-first investment",
      d: "Every investor or VC commitment first acquires $CFYC, aligning growth with token value.",
    },
    {
      i: <TrendingUp className="h-5 w-5" />,
      t: "Ecosystem upside",
      d: "Funds promote and grow the Cryptofy Digital Ecosystem globally — multiple revenue streams flow back to holders.",
    },
    {
      i: <Lock className="h-5 w-5" />,
      t: "Built for longevity",
      d: "90% of private-sale investment is auto-locked for 365 days to protect liquidity and ensure stability.",
    },
    {
      i: <LineChart className="h-5 w-5" />,
      t: "Compounding returns",
      d: "As the ecosystem expands into new sectors, investors benefit from every stream of profit by design.",
    },
  ];

  const stats = [
    { v: "250M", l: "Total Supply" },
    { v: "8%", l: "Private Sale" },
    { v: "365d", l: "Investor Lock" },
    { v: "8%", l: "Emergency Tax" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <PageHero
        eyebrow="Investor Benefits"
        title={
          <>
            Investments designed to{" "}
            <span className="text-gradient-gold">compound</span>.
          </>
        }
        desc="Every investment made by an investor or venture capitalist in Cryptofy Digital first acquires Cryptofy Coin and funds the global ecosystem — engineered so investors profit from every stream the team builds."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />

          <motion.img
            src={tokenAsset.url}
            alt="Tokenomics"
            className="relative w-full rounded-3xl border border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <div className="space-y-4">
          {benefits.map((b, index) => (
            <motion.div
              key={b.t}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                {b.i}
              </span>

              <div>
                <h3 className="font-semibold">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-20 lg:grid-cols-4">
          {stats.map((s, index) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="font-display text-3xl font-bold text-gradient-gold md:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <PageCTA />
      <SiteFooter />
    </div>
  );
}
