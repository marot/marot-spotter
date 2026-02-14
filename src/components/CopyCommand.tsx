import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

const CopyCommand = () => {
  const [copied, setCopied] = useState(false);
  const command = "curl -sSL https://spotter.sh/install | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="group relative cursor-pointer rounded-lg border border-glow bg-muted/50 px-5 py-4 font-mono text-sm transition-all hover:border-primary/40 hover:glow-amber"
    >
      <div className="flex items-center gap-3">
        <Terminal className="h-4 w-4 shrink-0 text-primary" />
        <span className="text-muted-foreground">$</span>
        <code className="text-foreground">{command}</code>
        <div className="ml-auto">
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CopyCommand;
