
import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Database,
  Globe,
  LockKeyhole,
  ArrowUpRight,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Cryptofy Coin" },
      {
        name: "description",
        content:
          "Learn how the Cryptofy Coin website and digital ecosystem relate to privacy, public blockchain data, and third-party services.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    icon: Eye,
    title: "1. Scope of this policy",
    content: [
      "This Privacy Policy applies to the Cryptofy Coin website and the information presented through it, including information about $CFYC, $CFYD, the Cryptofy Digital Ecosystem, and related blockchain services.",
      "It explains important privacy considerations when visiting the website or following links to services operated by other parties. Individual products or services may have additional privacy terms.",
    ],
  },
  {
    icon: Database,
    title: "2. Information and website interactions",
    content: [
      "The website describes Cryptofy Coin, its tokens, ecosystem features, and related services. The information available on the website alone does not establish every category of personal information that may be processed by its hosting provider, infrastructure, or external services.",
      "Your browser or hosting infrastructure may process technical information needed to deliver pages and maintain service reliability. The precise information collected, retention periods, and any analytics or cookie technologies depend on the services configured for the live website.",
      "Do not submit confidential information, wallet recovery phrases, private keys, passwords, or other sensitive credentials through public communication channels.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "3. Wallets and public blockchain information",
    content: [
      "Cryptofy Coin's website describes blockchain-based assets and services. Blockchain transactions may be publicly visible and may be difficult or impossible to change or remove once confirmed.",
      "A public wallet address and its transaction history may be visible to anyone who examines the relevant blockchain. Information recorded on a public blockchain is not equivalent to confidential information held in a private account.",
      "Never share a wallet's private key or recovery phrase. Before connecting a wallet to any service, review the permissions and transaction details presented by that service.",
    ],
  },
  {
    icon: Globe,
    title: "4. External websites and services",
    content: [
      "The website links to third-party platforms and resources, including Telegram, YouTube, blockchain-related services, and exchanges referenced in the Cryptofy ecosystem.",
      "When you follow an external link, that service may process information under its own privacy policy and terms. Cryptofy Coin does not control the privacy practices of independent third-party websites.",
      "Review the applicable third-party terms before submitting information, connecting a wallet, or conducting a transaction on another platform.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "5. Security, retention, and your choices",
    content: [
      "Use caution when sharing personal information online and verify that communications claiming to represent Cryptofy Coin come from an official channel.",
      "Specific data-retention periods, security controls, and procedures for handling personal-data requests must be confirmed with the website operator before this policy can be treated as a complete statement of its practices.",
      "Depending on the services involved and the laws that apply, you may have rights to request access to, correction of, or deletion of certain personal information. Public blockchain records may not be capable of being edited or erased through a website privacy request.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "6. Children and policy updates",
    content: [
      "If a service associated with Cryptofy Coin is intended for a particular age group or subject to age restrictions, the applicable service terms should be reviewed before use.",
      "This Privacy Policy may be updated as the website and its services change. The revised version should be published on this page with an updated effective date.",
    ],
  },
];

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const revealItem = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function PrivacyPolicy() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : revealItem;

  const heroAnimation = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : heroItem;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      <main>
        {/* Animated hero */}
        <section
          className="relative isolate overflow-hidden border-b border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.35, 0.65, 0.35],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
           className="relative mx-auto max-w-7xl px-6 py-20 md:py-28"
          initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
            <motion.span
              variants={heroAnimation}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              Privacy & transparency
            </motion.span>

            <motion.h1
              variants={heroAnimation}
              className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl"
            >
              Your privacy matters to{" "}
              <span className="text-gradient-gold">
                Cryptofy Coin.
              </span>
            </motion.h1>

            <motion.p
              variants={heroAnimation}
              className="mt-6 max-w-2xl leading-relaxed text-muted-foreground md:text-lg"
            >
              Understand how website interactions, external services, and
              public blockchain records can relate to your privacy.
            </motion.p>

            <motion.div
              variants={heroAnimation}
              className="mt-8 flex items-center gap-3 text-xs text-muted-foreground"
            >
              <span className="h-px w-8 bg-primary/70" />
              Privacy Policy
            </motion.div>
          </motion.div>
        </section>

        {/* Scroll-reveal content */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-24">
          <motion.aside
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="h-fit rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              On this page
            </p>

            <nav className="mt-5 space-y-3">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#privacy-${index + 1}`}
                  className="group flex items-center justify-between gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <span>{section.title}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </motion.aside>

          <div className="min-w-0 space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  id={`privacy-${index + 1}`}
                  key={section.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : (index % 2) * 0.08,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -4,
                          transition: { duration: 0.25 },
                        }
                  }
                  className="group scroll-mt-28 rounded-2xl border border-border bg-card/40 p-6 transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/40 hover:bg-card/70 hover:shadow-[0_12px_40px_-20px_rgba(212,175,55,0.2)] sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/10 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/15">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {section.content.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm leading-7 text-muted-foreground"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary/70 via-primary/20 to-transparent"
              />

              <div className="pl-2">
                <p className="mb-2 font-semibold text-foreground">
                  Important notice
                </p>
                This page describes general privacy considerations. Before
                publication, the website operator should verify actual data
                practices, applicable legal obligations, and a contact process
                for privacy-related requests.
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
