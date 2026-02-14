import { motion } from "framer-motion";
import {
  MessageSquare,
  GitCommit,
  Flame,
  BarChart3,
  Users,
  PenLine,
} from "lucide-react";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

const features = [
  {
    icon: MessageSquare,
    title: "Transcript Visualization",
    description:
      "Browse the full Claude Code transcript alongside terminal output. See exactly what the agent read, thought, and produced — synchronized and searchable.",
    screenshot: "Screenshot: Transcript View",
  },
  {
    icon: PenLine,
    title: "Annotations",
    description:
      "Annotate transcripts and files directly. Leave notes for yourself or your team on specific agent decisions, code changes, or patterns you want to revisit.",
    screenshot: "Screenshot: Inline Annotations",
  },
  {
    icon: GitCommit,
    title: "Session → Commit Lineage",
    description:
      "Every commit is linked back to the conversation that produced it. Confidence scores show how much the agent improvised vs. followed instructions.",
    screenshot: "Screenshot: Commit Lineage View",
  },
  {
    icon: Flame,
    title: "AI Hotspots",
    description:
      "ML-scored code snippets ranked by review risk. Focus your attention on the changes that actually need a human eye.",
    screenshot: "Screenshot: Hotspot Risk Scoring",
  },
  {
    icon: BarChart3,
    title: "Co-change Heatmaps",
    description:
      "Visualize implicit file coupling and churn patterns across sessions. See which files always change together — even when they shouldn't.",
    screenshot: "Screenshot: File Coupling Heatmap",
  },
  {
    icon: Users,
    title: "Subagent Tracking",
    description:
      "When your agent spawns child agents, Spotter tracks each one separately. Drill into any contributor's work independently.",
    screenshot: "Screenshot: Multi-Agent View",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            What It Does
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Full context for every agent session.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  isReversed ? "" : ""
                }`}
              >
                {/* Text */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-2 lg:col-start-8" : "lg:order-1"
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Screenshot */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-6"
                  }`}
                >
                  <ScreenshotPlaceholder label={feature.screenshot} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
