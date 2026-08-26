import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import TargetCursor from './ui/TargetCursor'

const Academics = () => {
  const { academics } = portfolioData

  return (
    <section id='academics' className='py-24 bg-dark px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='font-mono text-xs text-accent tracking-[0.3em] mb-4'
        >
          // SECTION_05
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=' hover-effect text-4xl md:text-5xl font-black text-white mb-12 '
        >
          ACADEMICS.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <div className='cursor-target inline-flex items-baseline gap-3 border-l-2 border-accent pl-8'>
            <span className='text-muted font-mono text-sm tracking-widest uppercase'>
              CGPA
            </span>
            <span className='text-5xl md:text-6xl font-black text-white'>
              {academics.cgpa}
            </span>
            <span className='text-muted text-sm'>/ 10</span>
          </div>
        </motion.div>

        {/* Year-wise Grid */}
        <div className='grid gap-8 md:grid-cols-3'>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
            cursorColor='#ffffff'
            cursorColorOnTarget='#ffffff'
          />
          {academics.years.map((yr, i) => (
            <motion.div
              key={yr.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='cursor-target border border-white/10 rounded-lg p-6 bg-white/[0.02]'
            >
              <h3 className='text-lg font-bold text-white mb-4 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-accent' />
                Year {yr.year}
              </h3>

              <div className='space-y-3'>
                {yr.semesters.map(s => (
                  <div
                    key={s.sem}
                    className='flex items-center justify-between py-2 border-b border-white/5 last:border-0'
                  >
                    <span className='text-muted text-sm font-mono'>
                      Semester {s.sem}
                    </span>
                    <span className='text-white font-bold tabular-nums'>
                      {s.sgpa}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academics
