import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import CopyCommand from "./CopyCommand";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-glow bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Open source · MIT License
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
          Know what your AI agents{" "}
          <span className="text-gradient">actually changed.</span>
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Spotter visualizes Claude Code transcripts, links commits to
          conversations, and helps you stay on top of every change — even across
          4+ parallel agents.
        </p>

        <div className="w-full max-w-xl">
          <CopyCommand />
        </div>

        <a
          href="https://github.com/marot/spotter"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          View on GitHub
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
