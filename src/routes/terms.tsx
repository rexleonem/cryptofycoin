
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FileText,
  Coins,
  ShieldAlert,
  ExternalLink,
  Wallet,
  Scale,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Cryptofy Coin" },
      {
        name: "description",
        content:
          "Review the terms for using the Cryptofy Coin website and information about its digital-asset ecosystem.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    icon: FileText,
    title: "1. Acceptance and scope",
    paragraphs: [
      "These Terms & Conditions govern your access to and use of the Cryptofy Coin website and its published informational content.",
      "By using the website, you acknowledge that you have read these terms. If you do not agree with them, discontinue use of the website.",
      "Specific products, token sales, applications, or other services may be subject to separate terms. Where applicable, those terms should be reviewed before using the relevant service.",
    ],
  },
  {
    icon: Coins,
    title: "2. Website information and digital assets",
    paragraphs: [
      "The website presents information about Cryptofy Coin ($CFYC), the described $CFYD stablecoin, the Cryptofy Digital Ecosystem, and related blockchain concepts and services.",
      "Website content is informational. Unless a separate written agreement explicitly provides otherwise, displaying a token, product, roadmap, allocation, exchange reference, or planned feature does not itself constitute a guarantee that a service will launch, remain available, achieve a particular value, or produce a financial return.",
      "Descriptions of planned features, including the Cryptofy Wallet, should not be interpreted as confirmation that those features are currently available.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "3. Digital-asset risks",
    paragraphs: [
      "Digital assets involve substantial risk. Their prices and liquidity can change rapidly, and you may lose some or all of the money you commit.",
      "Blockchain transactions may be irreversible. Sending assets to an incorrect address, using an incompatible network, approving a malicious transaction, or losing access credentials may result in permanent loss.",
      "Do your own research and seek independent professional advice where appropriate. Do not make financial decisions solely on the basis of website descriptions, promotional material, or projected ecosystem benefits.",
      "Nothing on this website should be understood as a promise of profit or a personalized recommendation to buy, sell, hold, or trade a digital asset.",
    ],
  },
  {
    icon: Wallet,
    title: "4. Wallets, transactions, and security",
    paragraphs: [
      "You are responsible for securing your own wallet credentials, private keys, recovery phrases, and devices.",
      "Never disclose a private key or recovery phrase to someone claiming to provide support. Verify wallet addresses, networks, token details, and transaction amounts before approving or submitting a transaction.",
      "If you use an external wallet, exchange, decentralized application, or blockchain service, your use of that service is also subject to its own terms and security arrangements.",
    ],
  },
  {
    icon: ExternalLink,
    title: "5. Third-party links and services",
    paragraphs: [
      "The website may link to external platforms, including Telegram, YouTube, exchanges, blockchain tools, and other ecosystem resources.",
      "External links are provided to help visitors find relevant resources. Their presence does not, by itself, establish that Cryptofy Coin controls or guarantees every external service, statement, transaction, or security practice.",
      "Review the terms, privacy policy, and risks of each external service before using it. Third-party availability and content may change without notice.",
    ],
  },
  {
    icon: Scale,
    title: "6. Acceptable use, changes, and limitations",
    paragraphs: [
      "You must not use the website for unlawful activity, attempt to disrupt its operation, interfere with its security, or misrepresent your affiliation with Cryptofy Coin.",
      "Website content, links, and features may change as the project develops. We should not be understood to guarantee uninterrupted availability or that every page will always be current or error-free.",
      "To the extent permitted by applicable law, the website and its informational content are provided without a guarantee that they will meet every user's needs. Nothing in these terms excludes liability that cannot lawfully be excluded.",
      "These terms should be interpreted subject to the laws and consumer protections that apply to the relevant user and website operator. The governing law, dispute process, and operator's legal identity must be confirmed before these terms are finalized.",
    ],
  },
];

function Terms() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      <main>
        <section
          className="relative border-b border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

          <motion.div
            className="relative mx-auto max-w-7xl px-6 py-20 md:py-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <FileText className="h-4 w-4 text-primary" />
              Terms of use
            </motion.span>

            <motion.h1
              className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            >
              Clear terms for the{" "}
              <span className="text-gradient-gold">
                Cryptofy ecosystem.
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl leading-relaxed text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Important information about using this website, understanding
              digital-asset risks, and accessing external services.
            </motion.p>

            <motion.p
              className="mt-6 text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
            >
              Terms & Conditions · Review before publication
            </motion.p>
          </motion.div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-24">
          <motion.aside
            className="h-fit rounded-2xl border border-border bg-card/50 p-6 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              On this page
            </p>

            <nav className="mt-5 space-y-3">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#terms-${index + 1}`}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </motion.aside>

          <div className="min-w-0 space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  id={`terms-${index + 1}`}
                  key={section.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.75,
                    delay: (index % 2) * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="scroll-mt-28 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/30 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <div className="min-w-0">
                      <h2 className="font-display text-xl font-semibold sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm leading-7 text-muted-foreground"
            >
              These terms are a starting draft based on the website's published
              descriptions. Confirm the legal entity, governing law, dispute
              process, and any service-specific terms before publishing them
              as final legal terms.
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
