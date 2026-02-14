import { motion } from "framer-motion";
import {
  MessageSquare,
  GitCommit,
  Flame,
  BarChart3,
  Users,
  PenLine,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Transcript Visualization",
    description:
      "Browse the full Claude Code transcript alongside terminal output. See exactly what the agent read, thought, and produced — synchronized and searchable.",
  },
  {
    icon: PenLine,
    title: "Annotations",
    description:
      "Annotate transcripts and files directly. Leave notes for yourself or your team on specific agent decisions, code changes, or patterns you want to revisit.",
  },
  {
    icon: GitCommit,
    title: "Session → Commit Lineage",
    description:
      "Every commit is linked back to the conversation that produced it. Confidence scores show how much the agent improvised vs. followed instructions.",
  },
  {
    icon: Wrench,
    title: "Improvement Sessions",
    description:
      "Start an improvement session to refine your Claude Code setup — rules, skills, hooks, and tooling. Iterate on your agent workflow based on what you observe.",
  },
  {
    icon: BrainCircuit,
    title: "Spaced Repetition",
    description:
      "A built-in spaced repetition system surfaces past changes on a schedule. Stay on top of everything that was implemented, even across dozens of agent sessions.",
  },
  {
    icon: Flame,
    title: "AI Hotspots",
    description:
      "ML-scored code snippets ranked by review risk. Focus your attention on the changes that actually need a human eye.",
  },
  {
    icon: BarChart3,
    title: "Co-change Heatmaps",
    description:
      "Visualize implicit file coupling and churn patterns across sessions. See which files always change together.",
  },
  {
    icon: Users,
    title: "Subagent Tracking",
    description:
      "When your agent spawns child agents, Spotter tracks each one separately. Drill into any contributor's work independently.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            What It Does
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Full context for every agent session.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group rounded-xl border border-glow bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-elevated"
            >
              <feature.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
