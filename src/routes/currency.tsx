
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import {
  Coins,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const cfydAsset = { url: "/image/cfyd.jpg" };

export const Route = createFileRoute("/currency")({
  head: () => ({
    meta: [
      { title: "$CFYC Currency — Cryptofy Coin" },
      {
        name: "description",
        content:
          "$CFYC gives immediate access to stable assets with exclusive ecosystem privileges. Learn how the Cryptofy currency works.",
      },
      { property: "og:title", content: "$CFYC Currency — Cryptofy Coin" },
      {
        property: "og:description",
        content: "The utility currency powering the Cryptofy Digital Ecosystem.",
      },
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
        title={
          <>
            The utility currency of the{" "}
            <span className="text-gradient-gold">Cryptofy ecosystem</span>.
          </>
        }
        desc="$CFYC provides immediate access to purchase other stable assets with exclusive privileges — the unifying coin built around real, everyday use cases."
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
            src={cfydAsset.url}
            alt="$CFYC"
            className="relative w-full rounded-3xl border border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <div className="space-y-5">
          {[
            {
              i: <Coins className="h-5 w-5" />,
              t: "Access to stable assets",
              d: "Instantly swap into ecosystem stable assets at exclusive rates reserved for $CFYC holders.",
            },
            {
              i: <Zap className="h-5 w-5" />,
              t: "Fast, low-cost settlements",
              d: "Powered by the Cryptofy Smart Chain (CSC) for high TPS and near-zero fees.",
            },
            {
              i: <ShieldCheck className="h-5 w-5" />,
              t: "Audited & secure",
              d: "Smart contracts audited by SolidProof with zero high or medium criticality issues.",
            },
          ].map((f, index) => (
            <motion.div
              key={f.t}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                {f.i}
              </span>

              <div>
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            </motion.div>
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
        <motion.h2
          className="font-display text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Where you can use{" "}
          <span className="text-gradient-gold">$CFYC</span>.
        </motion.h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, index) => (
            <motion.div
              key={c}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 text-sm"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <motion.div
        className="relative mx-auto max-w-4xl px-6 py-24 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          {desc}
        </motion.p>
      </motion.div>
    </section>
  );
}

export function PageCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Ready your bags.{" "}
          <span className="text-gradient-gold">Don't fade $CFYC.</span>
        </h2>

        <motion.a
          href="/#buy"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Buy $CFYC <ArrowRight className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
