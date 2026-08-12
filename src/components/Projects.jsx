import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark px-6 lg:px-8">
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
          className=" hover-effect text-4xl md:text-5xl font-black text-white mb-16  "
        >
          PROJECTS.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute right-0 top-4 bottom-4 w-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <p className="font-mono text-xs text-accent mb-4">
                [{project.id}]
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-white border border-border-light rounded px-4 py-2 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
                  LIVE DEMO
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
