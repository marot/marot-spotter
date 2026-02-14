import { Image } from "lucide-react";

interface ScreenshotPlaceholderProps {
  label: string;
  className?: string;
}

const ScreenshotPlaceholder = ({ label, className = "" }: ScreenshotPlaceholderProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-dashed border-primary/30 bg-gradient-to-br from-muted/80 to-card ${className}`}
    >
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 p-6">
        <Image className="h-8 w-8 text-primary/30" />
        <span className="text-center font-mono text-xs text-muted-foreground/60">
          {label}
        </span>
      </div>
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};

export default ScreenshotPlaceholder;
