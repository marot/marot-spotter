import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section className="relative px-6 py-32">
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
            You see the diff. You don't see the{" "}
            <span className="text-gradient font-semibold">reasoning</span>, the
            failed attempts, or the three rewrites that happened before the final
            commit. Reviewing AI-generated code blind is how bugs ship.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
