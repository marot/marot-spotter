import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Install hooks & start the server",
    description:
      "One command sets up Git hooks and boots the Spotter server. Your workflow stays exactly the same.",
    code: "curl -sSL https://spotter.sh/install | bash",
  },
  {
    number: "02",
    title: "Use Claude Code normally",
    description:
      "Spotter captures transcripts, terminal output, and commits in the background. Zero friction.",
    code: "claude \"refactor the auth module\"",
  },
  {
    number: "03",
    title: "Review, annotate, improve",
    description:
      "Browse transcripts, annotate decisions, trace commits to conversations. Start improvement sessions to refine your rules and hooks. Use spaced repetition to stay on top of past changes.",
    code: "open http://localhost:4000",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            How It Works
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Three steps. No config files.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-6 md:gap-10"
            >
              <div className="shrink-0 pt-1 font-mono text-4xl font-bold text-primary/20 md:text-5xl">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="mb-4 text-muted-foreground">{step.description}</p>
                <div className="inline-block rounded-md border border-glow bg-muted/50 px-4 py-2 font-mono text-sm text-muted-foreground">
                  <span className="mr-2 text-primary/50">$</span>
                  {step.code}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
