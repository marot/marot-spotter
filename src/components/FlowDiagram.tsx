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

interface NodeDef {
  id: string;
  icon: React.ElementType;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  highlight?: boolean;
}

interface EdgeDef {
  from: string;
  to: string;
  delay: number;
}

const nodes: NodeDef[] = [
  { id: "idea", icon: Lightbulb, label: "Idea", x: 8, y: 12 },
  { id: "conversation", icon: MessageSquare, label: "Conversation", x: 35, y: 12 },
  { id: "commit", icon: GitCommit, label: "Commit", x: 65, y: 12, highlight: true },
  { id: "hotspots", icon: Flame, label: "Code Hotspots", x: 12, y: 38 },
  { id: "product", icon: Package, label: "Product Changes", x: 35, y: 38 },
  { id: "transcripts", icon: FileText, label: "Transcripts", sublabel: "rework, failed tools", x: 62, y: 38 },
  { id: "prompts", icon: RefreshCw, label: "Repetitive Prompts", x: 88, y: 38 },
  { id: "review", icon: Search, label: "Review", x: 50, y: 64, highlight: true },
  { id: "improvement", icon: Settings, label: "Continuous Improvement", sublabel: "rules, hooks, skills", x: 50, y: 90, highlight: true },
];

const edges: EdgeDef[] = [
  { from: "idea", to: "conversation", delay: 0 },
  { from: "conversation", to: "commit", delay: 1.2 },
  { from: "commit", to: "hotspots", delay: 2.4 },
  { from: "commit", to: "product", delay: 2.7 },
  { from: "commit", to: "transcripts", delay: 3.0 },
  { from: "commit", to: "prompts", delay: 3.3 },
  { from: "hotspots", to: "review", delay: 4.2 },
  { from: "product", to: "review", delay: 4.5 },
  { from: "transcripts", to: "review", delay: 4.8 },
  { from: "prompts", to: "review", delay: 5.1 },
  { from: "review", to: "improvement", delay: 6.0 },
];

// Convert percentage positions to SVG coordinates (on a 1000x600 viewBox)
const toSvg = (xPct: number, yPct: number) => ({ x: xPct * 10, y: yPct * 6 });

const DiagramNode = ({ node, index }: { node: NodeDef; index: number }) => {
  const Icon = node.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="absolute"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`flex flex-col items-center gap-1 rounded-lg border px-3 py-2 text-center transition-all sm:gap-1.5 sm:px-4 sm:py-3 ${
          node.highlight
            ? "border-primary/40 bg-primary/10 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
            : "border-border bg-card"
        }`}
      >
        <Icon
          className={`h-4 w-4 sm:h-5 sm:w-5 ${
            node.highlight ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <span className="whitespace-nowrap text-[9px] font-medium leading-tight sm:text-xs">
          {node.label}
        </span>
        {node.sublabel && (
          <span className="whitespace-nowrap text-[8px] leading-tight text-muted-foreground sm:text-[10px]">
            {node.sublabel}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const FlowDiagram = () => {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

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
            Spotter tracks the full lifecycle of every AI-assisted change — from
            the initial prompt through review and back into your tooling.
          </p>
        </motion.div>

        {/* Diagram container */}
        <div className="relative mx-auto mt-16 overflow-x-auto">
          <div className="relative mx-auto" style={{ height: 600, minWidth: 700 }}>
            {/* SVG edges with pulse animations */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              style={{ zIndex: 0 }}
            >
              <defs>
                {/* Pulse dot gradient */}
                <radialGradient id="pulse-dot">
                  <stop offset="0%" stopColor="hsl(36 90% 55%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(36 90% 55%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {edges.map((edge, i) => {
                const from = nodeMap[edge.from];
                const to = nodeMap[edge.to];
                const p1 = toSvg(from.x, from.y);
                const p2 = toSvg(to.x, to.y);
                const edgeId = `edge-${edge.from}-${edge.to}`;

                return (
                  <g key={edgeId}>
                    {/* Static line */}
                    <line
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke="hsl(36 90% 55% / 0.15)"
                      strokeWidth="1.5"
                    />
                    {/* Animated pulse line overlay */}
                    <line
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke="hsl(36 90% 55% / 0.6)"
                      strokeWidth="2"
                      strokeDasharray="8 40"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="48"
                        to="0"
                        dur="2s"
                        begin={`${edge.delay}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                    {/* Traveling dot */}
                    <circle r="4" fill="url(#pulse-dot)">
                      <animateMotion
                        dur="2s"
                        begin={`${edge.delay}s`}
                        repeatCount="indefinite"
                        path={`M${p1.x},${p1.y} L${p2.x},${p2.y}`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.8;1"
                        dur="2s"
                        begin={`${edge.delay}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Node pulse rings on highlighted nodes */}
              {nodes
                .filter((n) => n.highlight)
                .map((node) => {
                  const p = toSvg(node.x, node.y);
                  return (
                    <circle
                      key={`ring-${node.id}`}
                      cx={p.x}
                      cy={p.y}
                      r="8"
                      fill="none"
                      stroke="hsl(36 90% 55% / 0.4)"
                      strokeWidth="1.5"
                    >
                      <animate
                        attributeName="r"
                        values="8;24;8"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.5;0;0.5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}
            </svg>

            {/* Nodes */}
            <div className="relative h-full" style={{ zIndex: 1 }}>
              {nodes.map((node, i) => (
                <DiagramNode key={node.id} node={node} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowDiagram;
