import { motion } from "framer-motion";
import { Calendar, Clock, Brain } from "lucide-react";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

const timelineItems = [
  { day: "Today", items: ["Auth module refactor", "API rate limiting"], opacity: 1 },
  { day: "Tomorrow", items: ["Database migration v12"], opacity: 0.8 },
  { day: "In 3 days", items: ["Webhook retry logic"], opacity: 0.6 },
  { day: "Next week", items: ["Cache invalidation", "Error boundaries"], opacity: 0.4 },
];

const SpacedRepetition = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Left: visual timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="relative space-y-4 pl-6">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-primary/40 to-primary/5" />

              {timelineItems.map((group, gi) => (
                <motion.div
                  key={group.day}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.15 }}
                  style={{ opacity: group.opacity }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 mt-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" style={{ opacity: group.opacity }} />
                  <div className="mb-1 font-mono text-xs font-medium text-primary">{group.day}</div>
                  <div className="space-y-1.5">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-md border border-border bg-card px-3 py-2 text-sm text-secondary-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <ScreenshotPlaceholder label="Screenshot: Spaced Repetition Dashboard" />
            </motion.div>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
              Spaced Repetition
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Stay on top of everything.{" "}
              <span className="text-gradient">Even across projects.</span>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground">
              When you're running multiple agents across multiple projects, it's impossible to 
              remember everything that was changed. Code gets merged, reviewed once, and forgotten.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-secondary-foreground">
              Spotter's spaced repetition system surfaces past changes on a schedule — the same 
              technique used for learning languages, applied to code review. Changes you've seen 
              recently fade to the back. Changes you haven't reviewed in a while come forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Scheduled review cards
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Adaptive intervals
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-primary" />
                Cross-project tracking
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpacedRepetition;
