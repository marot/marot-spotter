import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-primary">
            spotter
          </span>
          <span className="rounded-full border border-glow px-2 py-0.5 font-mono text-xs text-muted-foreground">
            MIT
          </span>
        </div>
        <a
          href="https://github.com/marot/spotter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          github.com/marot/spotter
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
