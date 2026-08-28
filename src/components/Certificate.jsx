import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import GlareHover from './ui/GlareHover'
import TargetCursor from './ui/TargetCursor'

const Certificate = () => {
  return (
    <section id='certificates' className='py-24 bg-darker px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='font-mono text-xs text-accent tracking-[0.3em] mb-4'
        >
          // SECTION_07
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='hover-effect text-4xl md:text-5xl font-black text-white mb-16'
        >
          CERTIFICATES.
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-6'>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
            cursorColor='#ffffff'
            cursorColorOnTarget='#ffffff'
          />
          {portfolioData.certificates.map((certificate, index) => (
            <GlareHover
              key={index}
              glareColor='#ffffff'
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='cursor-target bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 h-full'
              >
                <div className='flex items-start gap-4 mb-5'>
                  <div className='w-10 h-10 border border-border-light rounded flex items-center justify-center flex-shrink-0 overflow-hidden'>
                    <img
                      src={certificate.logo}
                      alt={`${certificate.company} logo`}
                      className='w-7 h-7 object-contain'
                    />
                  </div>

                  <div>
                    <h3 className='cursor-target text-lg font-bold text-white tracking-wide'>
                      {certificate.company.toUpperCase()}
                    </h3>

                    <p className='font-mono text-xs text-accent tracking-wider mt-1'>
                      {certificate.tag.toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className='flex flex-wrap gap-2 mb-5'>
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className='font-mono text-[10px] tracking-wider text-muted-light border border-border-light rounded px-2 py-1'
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certificate Details */}
                <ul className='space-y-2 mb-6'>
                  {certificate.data.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className='text-muted text-sm leading-relaxed flex gap-2'
                    >
                      <span className='text-accent mt-1 flex-shrink-0 text-xs'>
                        -
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={certificate.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' cursor-target inline-flex items-center gap-2 border border-border-light rounded px-4 py-2 font-mono text-xs text-white hover:border-accent hover:text-accent transition-all duration-300'
                >
                  VIEW CERTIFICATE
                  <span className='text-accent'>↗</span>
                </a>
              </motion.div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate
