import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import TiltedCard from "../components/ui/TiltedCard";

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-24 bg-dark px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent tracking-[0.3em] mb-4"
        >
          // SECTION_02
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" hover-effect text-4xl md:text-5xl font-black text-white mb-4  "
        >
          WHAT I DO.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg mb-16 max-w-3xl"
        >
          Full-stack developer building backend systems, APIs, and reliable web
          applications
        </motion.p>

        <div className="space-y-6 px-12 sm:px-16 md:px-20 lg:px-28">
          <div className="flex flex-col gap-6 w-full">
            {portfolioData.services.map((service, index) => (
              <div key={index} className="w-full">
                <TiltedCard
                  altText={service.title}
                  captionText={service.title}
                  containerWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent
                  overlayContent={
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full bg-card border border-border rounded-xl p-7"
                    >
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-mono">
                        <span className="text-accent">&gt;</span>{" "}
                        {service.title}
                      </h3>

                      <ul className="space-y-3 mb-6">
                        {service.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-muted text-sm leading-relaxed flex gap-3"
                          >
                            <span className="text-accent mt-1 flex-shrink-0">
                              -
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-darker border border-border rounded text-xs font-mono text-muted-light"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
