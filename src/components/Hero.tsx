import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import CopyCommand from "./CopyCommand";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] px-6 pt-24 pb-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-glow bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open source · MIT License
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-6xl">
            Know what your AI agents{" "}
            <span className="text-gradient">actually changed.</span>
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Spotter visualizes Claude Code transcripts, links commits to
            conversations, and helps you stay on top of every change — even across
            4+ parallel agents.
          </p>

          <div className="max-w-lg">
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

        {/* Right: screenshot placeholder, slightly rotated */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
            <div className="relative">
              <ScreenshotPlaceholder label="Screenshot: Spotter Dashboard" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
