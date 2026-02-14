import { motion } from "framer-motion";
import {
  Lightbulb,
  MessageSquare,
  GitCommit,
  Search,
  Flame,
  Package,
  RefreshCw,
  FileText,
  Settings,
} from "lucide-react";

interface NodeProps {
  icon: React.ElementType;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  delay: number;
  highlight?: boolean;
}

const DiagramNode = ({ icon: Icon, label, sublabel, x, y, delay, highlight }: NodeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
  >
    <div
      className={`flex flex-col items-center gap-1.5 rounded-lg border px-3 py-2.5 text-center transition-all sm:px-4 sm:py-3 ${
        highlight
          ? "border-primary/40 bg-primary/10 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
          : "border-border bg-card"
      }`}
    >
      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${highlight ? "text-primary" : "text-muted-foreground"}`} />
      <span className="text-[10px] font-medium leading-tight sm:text-xs">{label}</span>
      {sublabel && (
        <span className="text-[9px] leading-tight text-muted-foreground sm:text-[10px]">{sublabel}</span>
      )}
    </div>
  </motion.div>
);

const FlowDiagram = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 max-w-2xl"
        >
          <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
            The Pipeline
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            From idea to continuous improvement.
          </p>
          <p className="mt-4 text-muted-foreground">
            Spotter tracks the full lifecycle of every AI-assisted change — from the initial prompt through review and back into your tooling.
          </p>
        </motion.div>

        {/* Diagram container */}
        <div className="relative mx-auto mt-16 hidden md:block" style={{ height: 520 }}>
          {/* SVG connecting lines */}
          <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(36 90% 55% / 0.4)" />
                <stop offset="100%" stopColor="hsl(36 90% 55% / 0.1)" />
              </linearGradient>
            </defs>
            {/* Idea -> Conversation */}
            <line x1="12%" y1="15%" x2="30%" y2="15%" stroke="url(#line-grad)" strokeWidth="1.5" />
            {/* Conversation -> Commit */}
            <line x1="42%" y1="15%" x2="60%" y2="15%" stroke="url(#line-grad)" strokeWidth="1.5" />
            {/* Commit -> Review */}
            <line x1="67%" y1="20%" x2="50%" y2="38%" stroke="hsl(36 90% 55% / 0.3)" strokeWidth="1.5" />
            {/* Review -> branches */}
            <line x1="42%" y1="45%" x2="15%" y2="62%" stroke="hsl(36 90% 55% / 0.2)" strokeWidth="1" />
            <line x1="48%" y1="48%" x2="38%" y2="62%" stroke="hsl(36 90% 55% / 0.2)" strokeWidth="1" />
            <line x1="53%" y1="48%" x2="62%" y2="62%" stroke="hsl(36 90% 55% / 0.2)" strokeWidth="1" />
            <line x1="56%" y1="45%" x2="85%" y2="62%" stroke="hsl(36 90% 55% / 0.2)" strokeWidth="1" />
            {/* Branches -> Continuous Improvement */}
            <line x1="15%" y1="72%" x2="45%" y2="90%" stroke="hsl(36 90% 55% / 0.15)" strokeWidth="1" />
            <line x1="38%" y1="72%" x2="48%" y2="88%" stroke="hsl(36 90% 55% / 0.15)" strokeWidth="1" />
            <line x1="62%" y1="72%" x2="52%" y2="88%" stroke="hsl(36 90% 55% / 0.15)" strokeWidth="1" />
            <line x1="85%" y1="72%" x2="55%" y2="90%" stroke="hsl(36 90% 55% / 0.15)" strokeWidth="1" />
          </svg>

          {/* Nodes */}
          <div className="relative h-full" style={{ zIndex: 1 }}>
            {/* Top row: linear flow */}
            <DiagramNode icon={Lightbulb} label="Idea" x={8} y={15} delay={0} />
            <DiagramNode icon={MessageSquare} label="Conversation" x={35} y={15} delay={0.1} />
            <DiagramNode icon={GitCommit} label="Commit" x={65} y={15} delay={0.2} highlight />

            {/* Review node */}
            <DiagramNode icon={Search} label="Review" x={50} y={42} delay={0.35} highlight />

            {/* Branch nodes */}
            <DiagramNode icon={Flame} label="Code Hotspots" x={15} y={67} delay={0.5} />
            <DiagramNode icon={Package} label="Product Changes" x={38} y={67} delay={0.55} />
            <DiagramNode icon={FileText} label="Transcripts" sublabel="rework, failed tools" x={62} y={67} delay={0.6} />
            <DiagramNode icon={RefreshCw} label="Repetitive Prompts" x={85} y={67} delay={0.65} />

            {/* Continuous Improvement */}
            <DiagramNode
              icon={Settings}
              label="Continuous Improvement"
              sublabel="rules, hooks, skills"
              x={50}
              y={92}
              delay={0.8}
              highlight
            />
          </div>
        </div>

        {/* Mobile: simplified vertical list */}
        <div className="mt-12 space-y-3 md:hidden">
          {[
            { icon: Lightbulb, label: "Idea" },
            { icon: MessageSquare, label: "Conversation" },
            { icon: GitCommit, label: "Commit" },
            { icon: Search, label: "Review" },
            { icon: Flame, label: "Code Hotspots / Product Changes / Transcripts / Repetitive Prompts" },
            { icon: Settings, label: "Continuous Improvement — rules, hooks, skills" },
          ].map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                <node.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-secondary-foreground">{node.label}</span>
              {i < 5 && (
                <span className="ml-auto font-mono text-xs text-muted-foreground/40">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowDiagram;
