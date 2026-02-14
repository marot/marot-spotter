import { motion } from "framer-motion";
import { FileCode, Webhook, Sparkles, Wrench, ArrowRight } from "lucide-react";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

const outputs = [
  { icon: FileCode, label: "CLAUDE.md rules", desc: "Codify what you learn into persistent agent instructions" },
  { icon: Webhook, label: "Hooks", desc: "Automate pre/post actions for agent sessions" },
  { icon: Sparkles, label: "Skills", desc: "Teach your agent reusable capabilities" },
  { icon: Wrench, label: "Tool configs", desc: "Fine-tune which tools the agent can reach for" },
];

const ReviewImprovement = () => {
  return (
    <section className="relative px-6 py-32">
      {/* Subtle background shift */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            Review & Improve
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Turn observations into better agent behavior.
          </p>
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Left: explanation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="mb-6 text-lg leading-relaxed text-secondary-foreground">
              After reviewing sessions, you'll notice patterns — the agent keeps making the same mistake, 
              or ignores a convention, or reaches for the wrong tool.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-secondary-foreground">
              Start an <span className="font-semibold text-foreground">improvement session</span> directly 
              from Spotter. It pulls in your observations and helps you refine your Claude Code setup — 
              rules, hooks, skills, and tooling — so the next session is better than the last.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowRight className="h-4 w-4 text-primary" />
              <span>Each improvement compounds. Your agent gets sharper over time.</span>
            </div>
          </motion.div>

          {/* Right: output cards + screenshot */}
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {outputs.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="font-mono text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6"
            >
              <ScreenshotPlaceholder label="Screenshot: Improvement Session" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewImprovement;
