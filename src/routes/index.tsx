import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, Globe2, Coins, Lock, TrendingUp, Wallet, BookOpen, PlayCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";


import coinAsset from "@/assets/cf/coin.png.asset.json";
import cfydAsset from "@/assets/cf/cfyd.jpg.asset.json";
import blockchainAsset from "@/assets/cf/blockchain.jpg.asset.json";
import tokenAsset from "@/assets/cf/token.jpg.asset.json";
import botAsset from "@/assets/cf/bot.jpg.asset.json";
import smartcAsset from "@/assets/cf/smartc.jpg.asset.json";
import coinstoreAsset from "@/assets/cf/coinstore.jpg.asset.json";
import p2bAsset from "@/assets/cf/p2b.jpg.asset.json";
import bitmartAsset from "@/assets/cf/bitmart.jpg.asset.json";
import mexcAsset from "@/assets/cf/mexc.jpg.asset.json";
import bscAsset from "@/assets/cf/bsc.jpg.asset.json";
import dxsaleAsset from "@/assets/cf/dxsale.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cryptofy Coin — The Decentralized Metaverse Coin ($CFYC)" },
      { name: "description", content: "Cryptofy Coin ($CFYC) bridges the virtual and real world with fast, secure transactions on the Cryptofy Smart Chain. Explore the ecosystem, tokenomics, and roadmap." },
      { property: "og:title", content: "Cryptofy Coin — The Decentralized Metaverse Coin" },
      { property: "og:description", content: "Fast, secure, decentralized. The unifying coin of the Cryptofy Digital Ecosystem." },
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
      <Stats />
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


function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-9 w-9 rounded-full bg-[var(--gradient-gold)] grid place-items-center shadow-glow">
        <span className="font-display text-base font-bold text-primary-foreground">M</span>
      </div>
      <span className="font-display text-lg font-semibold tracking-tight">
        Cryptofy<span className="text-gradient-gold"> Coin</span>
      </span>
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#blockchain", label: "Blockchain" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#audit", label: "Audit" },
    { href: "#partners", label: "Partners" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#buy" className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-gold)] px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow">
          Buy $CFYC <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Built on BSC · Powered by Cryptofy Smart Chain
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            The coin bridging the
            <span className="text-gradient-gold"> metaverse </span>
            and the real world.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Cryptofy Coin ($CFYC) is a decentralized metaverse coin enabling seamless, secure and lightning-fast transactions — the unifying asset of the Cryptofy Digital Ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#buy" id="buy" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:translate-y-[-1px] transition">
              Buy $CFYC <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition">
              Explore Ecosystem
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <Feature icon={<ShieldCheck className="w-4 h-4 text-primary" />} text="Audited by SolidProof" />
            <Feature icon={<Zap className="w-4 h-4 text-primary" />} text="Fast TPS" />
            <Feature icon={<Globe2 className="w-4 h-4 text-primary" />} text="Global ecosystem" />
          </div>
        </div>

        <div className="relative grid place-items-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <div className="absolute h-[520px] w-[520px] rounded-full border border-border animate-spin-slow" />
          <div className="absolute h-[360px] w-[360px] rounded-full border border-primary/20" />
          <img src={coinAsset.url} alt="Cryptofy Coin" className="relative h-[380px] w-[380px] object-contain animate-float drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return <span className="inline-flex items-center gap-1.5">{icon}{text}</span>;
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
        {items.map((i) => (
          <div key={i.l}>
            <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{i.v}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
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
        title={<>Three ways <span className="text-gradient-gold">$CFYC</span> works for you.</>}
        desc="From utility currency to metaverse-grade settlements, Cryptofy is built around real, compounding investor value."
      />
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:border-primary/40 transition">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">{c.icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                Check out {c.cta} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StablecoinSection() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
          <img src={cfydAsset.url} alt="$CFYD stablecoin" className="relative rounded-3xl border border-border shadow-glow w-full object-cover" />
        </div>
        <div>
          <SectionHeader
            eyebrow="$CFYD Stablecoin"
            title={<>Liquidity for <span className="text-gradient-gold">DEX, CEX & P2P</span>.</>}
            desc="$CFYD is the ecosystem's stablecoin — engineered to provide deep liquidity across decentralized exchanges, centralized exchanges and peer-to-peer fiat settlement. Backed by fiat and digital assets."
          />
          <ul className="mt-8 space-y-3 text-sm">
            {["Fiat & digital-asset backed", "Cross-venue liquidity", "Designed for P2P settlement"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BlockchainSection() {
  return (
    <section id="blockchain" className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <SectionHeader
          eyebrow="Cryptofy Blockchain"
          title={<>The decentralized backbone of the <span className="text-gradient-gold">Cryptofy ecosystem</span>.</>}
          desc="Cryptofy Blockchain records every transaction across the Cryptofy Digital Ecosystem — especially those settled in $CFYC, the chain's native token."
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { i: <Zap className="w-4 h-4" />, t: "High throughput" },
            { i: <Lock className="w-4 h-4" />, t: "Cryptographic security" },
            { i: <Globe2 className="w-4 h-4" />, t: "Globally distributed" },
            { i: <ShieldCheck className="w-4 h-4" />, t: "Audited contracts" },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-card/60 p-4 flex items-center gap-3 text-sm">
              <span className="text-primary">{f.i}</span> {f.t}
            </div>
          ))}
        </div>
      </div>
      <div className="order-1 lg:order-2 relative">
        <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />
        <img src={blockchainAsset.url} alt="Cryptofy Blockchain" className="relative rounded-3xl border border-border shadow-card w-full object-cover" />
      </div>
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
    <section id="tokenomics" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader
            eyebrow="Tokenomics"
            title={<>Built for <span className="text-gradient-gold">longevity</span> & liquidity stability.</>}
            desc="Total supply is 250,000,000 $CFYC. 8% is allocated to the private sale. For every private-sale investor, 90% of the investment auto-locks for 365 days; 10% is available for withdrawal — protecting the liquidity pool and project longevity."
          />
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p><span className="text-foreground font-semibold">Liquidity pool farming:</span> 15–30 days. Emergency withdrawal is taxed at 8% of total investment.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Total Supply</div>
              <div className="font-display text-4xl font-bold text-gradient-gold">250,000,000</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary font-semibold">$CFYC</span>
          </div>
          <div className="mt-8 space-y-4">
            {splits.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{s.label}</span>
                  <span className="text-muted-foreground">{s.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className={`h-full ${s.color}`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <img src={tokenAsset.url} alt="Tokenomics" className="mt-8 rounded-xl border border-border w-full" />
        </div>
      </div>
    </section>
  );
}

function GlobalCoin() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 shadow-card">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <SectionHeader
              eyebrow="$CFYC is a global coin"
              title={<>Trusted by investors <span className="text-gradient-gold">across the globe</span>.</>}
              desc="Analyzed and predicted to capture the attention of major investors worldwide. Ready your bags — don't fade Cryptofy Coin."
            />
            <a href="https://youtu.be/G9KbrbrtMyc" target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold hover:bg-secondary transition">
              <PlayCircle className="w-4 h-4 text-primary" /> Watch on YouTube
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Real utility", "Audited", "Fast TPS", "Global reach"].map((t) => (
              <div key={t} className="rounded-2xl border border-border bg-background/40 p-5 text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />{t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BotSection() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />
          <img src={botAsset.url} alt="Cryptofy follow bot" className="relative rounded-3xl border border-border w-full object-cover shadow-card" />
        </div>
        <div>
          <SectionHeader
            eyebrow="Cryptofy Digital Follow Bot"
            title={<>Follow us & win <span className="text-gradient-gold">$300 in eBooks</span>.</>}
            desc="Join and follow Cryptofy across all platforms via our Telegram follow bot to win Blockchain & Cryptocurrency eBooks worth $300 — the resources that will make you an expert."
          />
          <a href="https://t.me/cfyfollowbot" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            <BookOpen className="w-4 h-4" /> Open Telegram Bot
          </a>
        </div>
      </div>
    </section>
  );
}

function AuditSection() {
  return (
    <section id="audit" className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <SectionHeader
          eyebrow="Security & Audit"
          title={<>The smart-contract audit is <span className="text-gradient-gold">complete</span>.</>}
          desc="Cryptofy Coin's smart contract has been audited by SolidProof — revealing no high or medium-criticality issues. Security is foundational, not optional."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://app.solidproof.io/projects/cryptofy-coin" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary transition">
            View SolidProof report <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://solidproof.io/contact" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition">
            Need an audit / KYC?
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[{n:"0",l:"High issues"},{n:"0",l:"Medium issues"},{n:"100%",l:"Coverage"}].map((s)=>(
            <div key={s.l} className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="font-display text-2xl font-bold text-gradient-gold">{s.n}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
        <img src={smartcAsset.url} alt="Smart contract audit" className="relative rounded-3xl border border-border w-full object-cover shadow-card" />
      </div>

      <div className="lg:col-span-2 mt-8 rounded-3xl border border-border bg-card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent"><Wallet className="w-5 h-5" /></div>
          <div>
            <h3 className="font-display text-xl font-semibold">Cryptofy Wallet</h3>
            <p className="text-sm text-muted-foreground">A unified wallet for the entire Cryptofy ecosystem.</p>
          </div>
        </div>
        <span className="rounded-full bg-accent/15 text-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest">Coming Soon</span>
      </div>
    </section>
  );
}

function Partners() {
  const row = [...partners, ...partners];
  return (
    <section id="partners" className="border-y border-border bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Partners</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Backed by a <span className="text-gradient-gold">global network</span>.</h2>
        </div>
      </div>
      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-12 w-max animate-marquee">
          {row.map((p, i) => (
            <div key={i} className="h-20 w-44 rounded-xl border border-border bg-card grid place-items-center p-4">
              <img src={p.src} alt={p.name} className="max-h-full max-w-full object-contain" />
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
      <div className="relative overflow-hidden rounded-3xl border border-border p-12 md:p-20 text-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Ready your bags. <span className="text-gradient-gold">Don't fade $CFYC.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Join the Cryptofy Digital Ecosystem and own a piece of the coin built to bridge the metaverse and the real economy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">
              Buy $CFYC <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold">
              Explore Ecosystem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

