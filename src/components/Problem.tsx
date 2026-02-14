import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section className="relative px-6 py-32">
      {/* Faded code texture */}
      <div className="pointer-events-none absolute right-8 top-16 select-none font-mono text-[10px] leading-relaxed text-muted-foreground/[0.07] md:text-xs">
        <pre>{`- async function processQueue(items) {
-   for (const item of items) {
-     await handle(item);
-   }
+ async function processQueue(items) {
+   const results = await Promise.all(
+     items.map(item => handle(item))
+   );
+   return results.filter(Boolean);`}</pre>
      </div>

      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-lg font-semibold uppercase tracking-widest text-primary">
            The Problem
          </h2>
          <p className="text-2xl leading-relaxed text-foreground md:text-3xl">
            When you run 4+ agents in parallel, you lose track.{" "}
            <span className="text-gradient font-semibold">What changed? Why?</span>{" "}
            The diff doesn't show the reasoning, the failed attempts, or the
            three rewrites before the final commit. You need the full transcript
            — annotated and searchable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
