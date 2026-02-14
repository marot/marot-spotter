import { useEffect, useRef, useState } from "react";
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
  cx: number;
  cy: number;
}

interface EdgeDef {
  from: string;
  to: string;
}

// All coordinates in a 1000x550 viewBox
const nodes: NodeDef[] = [
  { id: "idea", icon: Lightbulb, label: "Idea", cx: 80, cy: 60 },
  { id: "conversation", icon: MessageSquare, label: "Conversation", cx: 310, cy: 60 },
  { id: "commit", icon: GitCommit, label: "Commit", cx: 560, cy: 60 },
  { id: "hotspots", icon: Flame, label: "Code Hotspots", cx: 120, cy: 220 },
  { id: "product", icon: Package, label: "Product Changes", cx: 370, cy: 220 },
  { id: "transcripts", icon: FileText, label: "Transcripts", sublabel: "rework, failed tools", cx: 630, cy: 220 },
  { id: "prompts", icon: RefreshCw, label: "Repetitive Prompts", cx: 880, cy: 220 },
  { id: "review", icon: Search, label: "Review", cx: 500, cy: 370 },
  { id: "improvement", icon: Settings, label: "Continuous Improvement", sublabel: "rules, hooks, skills", cx: 500, cy: 500 },
];

const edges: EdgeDef[] = [
  { from: "idea", to: "conversation" },
  { from: "conversation", to: "commit" },
  { from: "commit", to: "hotspots" },
  { from: "commit", to: "product" },
  { from: "commit", to: "transcripts" },
  { from: "commit", to: "prompts" },
  { from: "hotspots", to: "review" },
  { from: "product", to: "review" },
  { from: "transcripts", to: "review" },
  { from: "prompts", to: "review" },
  { from: "review", to: "improvement" },
];

// Animation timeline: each step defines which edges fire simultaneously,
// and which node glows when they arrive
const timeline: { edges: number[]; glowNode: string; startTime: number; duration: number }[] = [
  { edges: [], glowNode: "idea", startTime: 0, duration: 0.4 },
  { edges: [0], glowNode: "conversation", startTime: 0.4, duration: 0.8 },
  { edges: [1], glowNode: "commit", startTime: 1.2, duration: 0.8 },
  { edges: [2, 3, 4, 5], glowNode: "", startTime: 2.0, duration: 1.0 },
  // four nodes glow staggered
  { edges: [], glowNode: "hotspots", startTime: 2.6, duration: 0.3 },
  { edges: [], glowNode: "product", startTime: 2.7, duration: 0.3 },
  { edges: [], glowNode: "transcripts", startTime: 2.8, duration: 0.3 },
  { edges: [], glowNode: "prompts", startTime: 2.9, duration: 0.3 },
  { edges: [6, 7, 8, 9], glowNode: "", startTime: 3.2, duration: 1.0 },
  { edges: [], glowNode: "review", startTime: 4.2, duration: 0.5 },
  { edges: [10], glowNode: "improvement", startTime: 4.7, duration: 0.8 },
];

const TOTAL_CYCLE = 7; // seconds for full loop

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

const FlowDiagram = () => {
  const [time, setTime] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - startRef.current) / 1000;
      setTime(elapsed % TOTAL_CYCLE);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  // Determine which nodes are glowing
  const glowingNodes = new Set<string>();
  for (const step of timeline) {
    if (step.glowNode && time >= step.startTime && time < step.startTime + step.duration + 0.5) {
      const progress = (time - step.startTime) / step.duration;
      if (progress >= 0) glowingNodes.add(step.glowNode);
    }
  }

  // Determine edge animation progress (0 = not started, 0-1 = traveling, 1+ = arrived)
  const edgeProgress: number[] = edges.map((_, i) => {
    for (const step of timeline) {
      if (step.edges.includes(i)) {
        const p = (time - step.startTime) / step.duration;
        return Math.max(0, Math.min(1, p));
      }
    }
    return -1;
  });

  return (
    <section ref={sectionRef} className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-2xl">
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
        </div>

        <div className="relative mx-auto mt-16 overflow-x-auto">
          <svg
            viewBox="0 0 1000 550"
            className="w-full"
            style={{ minWidth: 700 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="14" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Edges */}
            {edges.map((edge, i) => {
              const from = nodeMap[edge.from];
              const to = nodeMap[edge.to];
              const progress = edgeProgress[i];
              const isActive = progress > 0;

              return (
                <g key={`edge-${i}`}>
                  {/* Base line */}
                  <line
                    x1={from.cx} y1={from.cy}
                    x2={to.cx} y2={to.cy}
                    stroke="hsl(36 90% 55% / 0.1)"
                    strokeWidth="1.5"
                  />
                  {/* Active line growing */}
                  {isActive && (
                    <line
                      x1={from.cx} y1={from.cy}
                      x2={from.cx + (to.cx - from.cx) * progress}
                      y2={from.cy + (to.cy - from.cy) * progress}
                      stroke="hsl(36 90% 55% / 0.6)"
                      strokeWidth="2"
                    />
                  )}
                  {/* Traveling dot */}
                  {isActive && progress < 1 && (
                    <circle
                      cx={from.cx + (to.cx - from.cx) * progress}
                      cy={from.cy + (to.cy - from.cy) * progress}
                      r="4"
                      fill="hsl(36 90% 55%)"
                      filter="url(#glow)"
                    />
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isGlowing = glowingNodes.has(node.id);
              const Icon = node.icon;
              const halfW = Math.max(60, node.label.length * 5.5 + 20);

              return (
                <g key={node.id}>
                  {/* Glow ring */}
                  {isGlowing && (
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={halfW + 5}
                      fill="none"
                      stroke="hsl(36 90% 55% / 0.3)"
                      strokeWidth="2"
                      filter="url(#glow-strong)"
                    />
                  )}
                  {/* Node background */}
                  <rect
                    x={node.cx - halfW}
                    y={node.cy - 28}
                    width={halfW * 2}
                    height={node.sublabel ? 56 : 48}
                    rx="8"
                    fill={isGlowing ? "hsl(36 90% 55% / 0.12)" : "hsl(0 0% 10%)"}
                    stroke={isGlowing ? "hsl(36 90% 55% / 0.5)" : "hsl(0 0% 20%)"}
                    strokeWidth="1"
                    style={{
                      transition: "fill 0.3s, stroke 0.3s",
                    }}
                  />
                  {/* Icon placeholder (small circle) */}
                  <circle
                    cx={node.cx}
                    cy={node.cy - 8}
                    r="8"
                    fill="none"
                    stroke={isGlowing ? "hsl(36 90% 55%)" : "hsl(0 0% 40%)"}
                    strokeWidth="1.5"
                    style={{ transition: "stroke 0.3s" }}
                  />
                  {/* Label */}
                  <text
                    x={node.cx}
                    y={node.cy + 10}
                    textAnchor="middle"
                    fill={isGlowing ? "hsl(36 90% 90%)" : "hsl(0 0% 70%)"}
                    fontSize="11"
                    fontWeight="500"
                    fontFamily="system-ui, sans-serif"
                    style={{ transition: "fill 0.3s" }}
                  >
                    {node.label}
                  </text>
                  {node.sublabel && (
                    <text
                      x={node.cx}
                      y={node.cy + 23}
                      textAnchor="middle"
                      fill="hsl(0 0% 45%)"
                      fontSize="9"
                      fontFamily="system-ui, sans-serif"
                    >
                      {node.sublabel}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FlowDiagram;
