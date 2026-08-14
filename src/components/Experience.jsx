import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import GlareHover from "./ui/GlareHover";
import TargetCursor from "./ui/TargetCursor";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-darker px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent tracking-[0.3em] mb-4"
        >
          // SECTION_06
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" hover-effect text-4xl md:text-5xl font-black text-white mb-16 "
        >
          EXPERIENCE.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
            cursorColor="#ffffff"
            cursorColorOnTarget="#ffffff"
          />
          {portfolioData.experience.map((exp, index) => (
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <motion.div
                onClick={window.open(exp.link, "_blank")}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cursor-target bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 border border-border-light rounded flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-sm font-bold text-white">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="cursor-target text-lg font-bold text-white tracking-wide">
                      {exp.company.toUpperCase()}
                    </h3>
                    <p className="font-mono text-xs text-accent tracking-wider mt-0.5">
                      {exp.position.toUpperCase()}
                    </p>
                  </div>
                </div>

                <p className="font-mono text-xs text-accent-light mb-4">
                  {exp.duration}
                </p>

                <p className="text-muted-light text-sm mb-4 leading-relaxed">
                  <span className="text-accent">&gt;</span> {exp.summary}
                </p>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-muted text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-1 flex-shrink-0 text-xs">
                        -
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
