import { motion } from "framer-motion";
import {
  MessageSquare,
  GitCommit,
  Flame,
  BarChart3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Live Transcript + Terminal Replay",
    description:
      "Synchronized view of what the agent saw and did. Replay the full conversation alongside terminal output, step by step.",
  },
  {
    icon: GitCommit,
    title: "Session → Commit Lineage",
    description:
      "Every commit linked back to the conversation that produced it. Confidence scores tell you how much the agent improvised.",
  },
  {
    icon: Flame,
    title: "AI Hotspots",
    description:
      "ML-scored code snippets ranked by review risk. Stop reading everything — focus on what actually matters.",
  },
  {
    icon: BarChart3,
    title: "Co-change Heatmaps",
    description:
      "Visualize implicit file coupling and churn patterns across sessions. See which files always change together.",
  },
  {
    icon: Users,
    title: "Subagent Awareness",
    description:
      "When your agent spawns child agents, Spotter tracks them separately. Drill into each contributor's work independently.",
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
            Capabilities
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Everything the diff won't tell you.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
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
