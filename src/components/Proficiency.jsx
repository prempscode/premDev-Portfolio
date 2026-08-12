import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const Proficiency = () => {
  return (
    <section id="proficiency" className="py-24 bg-darker px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent tracking-[0.3em] mb-4"
        >
          // SECTION_03
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" hover-effect text-4xl md:text-5xl font-black text-white mb-4  "
        >
          PROFICIENCY.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg mb-16"
        >
          Focused on full-stack development, backend systems, and core
          programming fundamentals.
        </motion.p>

        <div className="max-w-3xl space-y-8">
          {portfolioData.proficiency.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{item.skill}</span>
                <span className="font-mono text-sm text-accent">
                  {item.level}%
                </span>
              </div>
              <div className="h-1.5 bg-card rounded-full overflow-hidden border border-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full bg-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiency;
