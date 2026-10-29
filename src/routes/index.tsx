
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Coins,
  Lock,
  TrendingUp,
  Wallet,
  BookOpen,
  PlayCircle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

const coinAsset = { url: "/image/coin.png" };
const cfydAsset = { url: "/image/cfyd.jpg" };
const blockchainAsset = { url: "/image/blockchain.jpg" };
const tokenAsset = { url: "/image/token.jpg" };
const botAsset = { url: "/image/bot.jpg" };
const smartcAsset = { url: "/image/smartc.jpg" };
const coinstoreAsset = { url: "/image/coinstore.jpg" };
const p2bAsset = { url: "/image/p2b.jpg" };
const bitmartAsset = { url: "/image/bitmart.jpg" };
const mexcAsset = { url: "/image/mexc.jpg" };
const bscAsset = { url: "/image/bsc.jpg" };
const dxsaleAsset = { url: "/image/dxsale.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cryptofy Coin — The Decentralized Metaverse Coin ($CFYC)" },
      {
        name: "description",
        content:
          "Cryptofy Coin ($CFYC) bridges the virtual and real world with fast, secure transactions on the Cryptofy Smart Chain. Explore the ecosystem, tokenomics, and roadmap.",
      },
      {
        property: "og:title",
        content: "Cryptofy Coin — The Decentralized Metaverse Coin",
      },
      {
        property: "og:description",
        content:
          "Fast, secure, decentralized. The unifying coin of the Cryptofy Digital Ecosystem.",
      },
      { property: "og:image", content: coinAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: coinAsset.url },
    ],
  }),
  component: Index,
});

const partners = [
  { src: coinstoreAsset.url, name: "Coinstore" },
  { src: p2bAsset.url, name: "P2B" },
  { src: bitmartAsset.url, name: "BitMart" },
  { src: mexcAsset.url, name: "MEXC" },
  { src: bscAsset.url, name: "BSC" },
  { src: dxsaleAsset.url, name: "DxSale" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      <Hero />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Stats />
      </motion.div>

      <InvestSection />
      <StablecoinSection />
      <BlockchainSection />
      <Tokenomics />
      <GlobalCoin />
      <BotSection />
      <AuditSection />
      <Partners />
      <CTA />

      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Built on BSC · Powered by Cryptofy Smart Chain
          </motion.span>

          <motion.h1
            className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          >
            The coin bridging the
            <span className="text-gradient-gold"> metaverse </span>
            and the real world.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Cryptofy Coin ($CFYC) is a decentralized metaverse coin enabling
            seamless, secure and lightning-fast transactions — the unifying
            asset of the Cryptofy Digital Ecosystem.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          >
            <a
              href="#buy"
              id="buy"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:translate-y-[-1px] transition"
            >
              Buy $CFYC <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition"
            >
              Explore Ecosystem
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <Feature
              icon={<ShieldCheck className="w-4 h-4 text-primary" />}
              text="Audited by SolidProof"
            />
            <Feature
              icon={<Zap className="w-4 h-4 text-primary" />}
              text="Fast TPS"
            />
            <Feature
              icon={<Globe2 className="w-4 h-4 text-primary" />}
              text="Global ecosystem"
            />
          </motion.div>
        </div>

        <motion.div
          className="relative grid place-items-center"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
        >
          <div className="absolute h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <div className="absolute h-[520px] w-[520px] rounded-full border border-border animate-spin-slow" />
          <div className="absolute h-[360px] w-[360px] rounded-full border border-primary/20" />

          <img
            src={coinAsset.url}
            alt="Cryptofy Coin"
            className="relative h-[380px] w-[380px] object-contain animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {icon}
      {text}
    </span>
  );
}

function Stats() {
  const items = [
    { v: "250M", l: "Total Supply $CFYC" },
    { v: "8%", l: "Private Sale Allocation" },
    { v: "365d", l: "Investor Auto-Lock" },
    { v: "0", l: "High/Med Audit Issues" },
  ];

  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((i, index) => (
          <motion.div
            key={i.l}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
              {i.v}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">
              {i.l}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>
      )}
    </motion.div>
  );
}

function InvestSection() {
  const cards = [
    {
      icon: <Coins className="w-5 h-5" />,
      title: "$CFYC Currency",
      body: "$CFYC gives you immediate access to purchase other stable assets with exclusive privileges across the ecosystem.",
      cta: "Currency",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Metaverse Coin",
      body: "As a metaverse coin, $CFYC is used to complete all types of in-world transactions across partner platforms.",
      cta: "Metaverse",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Investor Benefits",
      body: "Every investment first acquires Cryptofy Coin and funds ecosystem growth — designed to compound investor returns.",
      cta: "Benefits",
    },
  ];

  return (
    <section id="ecosystem" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Invest in us now"
        title={
          <>
            Three ways <span className="text-gradient-gold">$CFYC</span> works
            for you.
          </>
        }
        desc="From utility currency to metaverse-grade settlements, Cryptofy is built around real, compounding investor value."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {cards.map((c, index) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:border-primary/40 transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative">
              <motion.div
                className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                {c.icon}
              </motion.div>

              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {c.body}
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                Check out {c.cta} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StablecoinSection() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <img
            src={cfydAsset.url}
            alt="$CFYD stablecoin"
            className="relative rounded-3xl border border-border shadow-glow w-full object-cover"
          />
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="$CFYD Stablecoin"
            title={
              <>
                Liquidity for{" "}
                <span className="text-gradient-gold">DEX, CEX & P2P</span>.
              </>
            }
            desc="$CFYD is the ecosystem's stablecoin — engineered to provide deep liquidity across decentralized exchanges, centralized exchanges and peer-to-peer fiat settlement. Backed by fiat and digital assets."
          />

          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Fiat & digital-asset backed",
              "Cross-venue liquidity",
              "Designed for P2P settlement",
            ].map((t, index) => (
              <motion.li
                key={t}
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {t}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BlockchainSection() {
  return (
    <section
      id="blockchain"
      className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center"
    >
      <div className="order-2 lg:order-1">
        <SectionHeader
          eyebrow="Cryptofy Blockchain"
          title={
            <>
              The decentralized backbone of the{" "}
              <span className="text-gradient-gold">Cryptofy ecosystem</span>.
            </>
          }
          desc="Cryptofy Blockchain records every transaction across the Cryptofy Digital Ecosystem — especially those settled in $CFYC, the chain's native token."
        />

        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { i: <Zap className="w-4 h-4" />, t: "High throughput" },
            { i: <Lock className="w-4 h-4" />, t: "Cryptographic security" },
            { i: <Globe2 className="w-4 h-4" />, t: "Globally distributed" },
            { i: <ShieldCheck className="w-4 h-4" />, t: "Audited contracts" },
          ].map((f, index) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-border bg-card/60 p-4 flex items-center gap-3 text-sm"
            >
              <span className="text-primary">{f.i}</span>
              {f.t}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="order-1 lg:order-2 relative"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />
        <img
          src={blockchainAsset.url}
          alt="Cryptofy Blockchain"
          className="relative rounded-3xl border border-border shadow-card w-full object-cover"
        />
      </motion.div>
    </section>
  );
}

function Tokenomics() {
  const splits = [
    { label: "Private Sale", pct: 8, color: "bg-primary" },
    { label: "Liquidity & Pool Farming", pct: 32, color: "bg-accent" },
    { label: "Ecosystem & Reserves", pct: 40, color: "bg-primary/50" },
    { label: "Team & Operations", pct: 20, color: "bg-accent/50" },
  ];

  return (
    <section
      id="tokenomics"
      className="relative border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader
            eyebrow="Tokenomics"
            title={
              <>
                Built for <span className="text-gradient-gold">longevity</span>{" "}
                & liquidity stability.
              </>
            }
            desc="Total supply is 250,000,000 $CFYC. 8% is allocated to the private sale. For every private-sale investor, 90% of the investment auto-locks for 365 days; 10% is available for withdrawal — protecting the liquidity pool and project longevity."
          />

          <motion.div
            className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p>
              <span className="text-foreground font-semibold">
                Liquidity pool farming:
              </span>{" "}
              15–30 days. Emergency withdrawal is taxed at 8% of total
              investment.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="rounded-3xl border border-border bg-card p-8 shadow-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">
                Total Supply
              </div>
              <div className="font-display text-4xl font-bold text-gradient-gold">
                250,000,000
              </div>
            </div>

            <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary font-semibold">
              $CFYC
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {splits.map((s, index) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{s.label}</span>
                  <span className="text-muted-foreground">{s.pct}%</span>
                </div>

                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className={`h-full ${s.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <img
            src={tokenAsset.url}
            alt="Tokenomics"
            className="mt-8 rounded-xl border border-border w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

function GlobalCoin() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 shadow-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader
              eyebrow="$CFYC is a global coin"
              title={
                <>
                  Trusted by investors{" "}
                  <span className="text-gradient-gold">across the globe</span>.
                </>
              }
              desc="Analyzed and predicted to capture the attention of major investors worldwide. Ready your bags — don't fade Cryptofy Coin."
            />

            <a
              href="https://youtu.be/G9KbrbrtMyc"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold hover:bg-secondary transition"
            >
              <PlayCircle className="w-4 h-4 text-primary" />
              Watch on YouTube
            </a>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Real utility", "Audited", "Fast TPS", "Global reach"].map(
                (t, index) => (
                  <motion.div
                    key={t}
                    className="rounded-2xl border border-border bg-background/40 p-4 text-sm font-semibold flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {t}
                  </motion.div>
                ),
              )}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img
              src="/image/youtube.jpg"
              alt="Cryptofy Coin Global"
              className="rounded-3xl border border-border shadow-card w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function BotSection() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />
          <img
            src={botAsset.url}
            alt="Cryptofy follow bot"
            className="relative rounded-3xl border border-border w-full object-cover shadow-card"
          />
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="Cryptofy Digital Follow Bot"
            title={
              <>
                Follow us & win{" "}
                <span className="text-gradient-gold">$300 in eBooks</span>.
              </>
            }
            desc="Join and follow Cryptofy across all platforms via our Telegram follow bot to win Blockchain & Cryptocurrency eBooks worth $300 — the resources that will make you an expert."
          />

          <motion.a
            href="https://t.me/cfyfollowbot"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <BookOpen className="w-4 h-4" />
            Open Telegram Bot
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function AuditSection() {
  return (
    <section
      id="audit"
      className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center"
    >
      <div>
        <SectionHeader
          eyebrow="Security & Audit"
          title={
            <>
              The smart-contract audit is{" "}
              <span className="text-gradient-gold">complete</span>.
            </>
          }
          desc="Cryptofy Coin's smart contract has been audited by SolidProof — revealing no high or medium-criticality issues. Security is foundational, not optional."
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://app.solidproof.io/projects/cryptofy-coin"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary transition"
          >
            View SolidProof report <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://solidproof.io/contact"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition"
          >
            Need an audit / KYC?
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { n: "0", l: "High issues" },
            { n: "0", l: "Medium issues" },
            { n: "100%", l: "Coverage" },
          ].map((s, index) => (
            <motion.div
              key={s.l}
              className="rounded-2xl border border-border bg-card p-5 text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <div className="font-display text-2xl font-bold text-gradient-gold">
                {s.n}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
        <img
          src={smartcAsset.url}
          alt="Smart contract audit"
          className="relative rounded-3xl border border-border w-full object-cover shadow-card"
        />
      </motion.div>

      <motion.div
        className="lg:col-span-2 mt-8 rounded-3xl border border-border bg-card overflow-hidden grid md:grid-cols-2 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="p-10 md:p-16 flex flex-col items-start gap-5">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-accent">
            <Wallet className="w-6 h-6" />
          </div>

          <div>
            <h3 className="font-display text-3xl font-semibold">
              Cryptofy Wallet
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A unified, secure wallet designed to handle the entire Cryptofy
              ecosystem. Connect to dApps, hold $CFYC, and bridge assets
              seamlessly.
            </p>
          </div>

          <span className="mt-2 rounded-full bg-accent/15 text-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest">
            Coming Soon
          </span>
        </div>

        <div className="relative h-full min-h-[300px] w-full flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <img
            src="/image/design.png"
            alt="Cryptofy Wallet Design"
            className="relative rounded-2xl shadow-2xl border border-border w-full max-w-sm rotate-2 hover:rotate-0 transition duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Partners() {
  const row = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="border-y border-border bg-card/30 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Our Partners
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
            Backed by a{" "}
            <span className="text-gradient-gold">global network</span>.
          </h2>
        </motion.div>
      </div>

      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-12 w-max animate-marquee">
          {row.map((p, i) => (
            <div
              key={i}
              className="h-20 w-44 rounded-xl border border-border bg-card grid place-items-center p-4"
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-border p-12 md:p-20 text-center"
        style={{ background: "var(--gradient-hero)" }}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Ready your bags.{" "}
            <span className="text-gradient-gold">Don't fade $CFYC.</span>
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Join the Cryptofy Digital Ecosystem and own a piece of the coin
            built to bridge the metaverse and the real economy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <motion.a
              href="#buy"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Buy $CFYC <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Explore Ecosystem
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
