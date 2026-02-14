import { motion } from "framer-motion";
import { Shield, Server, TestTube, Bot } from "lucide-react";

const signals = [
  {
    icon: Shield,
    text: "Open source, MIT licensed — read every line",
  },
  {
    icon: Server,
    text: "Elixir/Phoenix stack, fully self-hosted — no data leaves your machine",
  },
  {
    icon: TestTube,
    text: "900+ tests, OpenTelemetry instrumented, E2E with Playwright",
  },
  {
    icon: Bot,
    text: "Built with Claude Code itself — every commit co-authored with an AI agent",
  },
];

const TrustSignals = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            Built For Engineers
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            No cloud lock-in. No telemetry. No BS.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {signals.map((signal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-lg border border-glow bg-card p-5"
            >
              <signal.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-secondary-foreground">
                {signal.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
