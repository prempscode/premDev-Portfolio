import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import '../index.css'

const CountUp = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const Hero = () => {
  return (
    <section className='min-h-screen bg-dark pt-28 pb-16 px-6 lg:px-8 relative overflow-hidden'>
      {/* Background blue glow */}
      {/* <div className="absolute right-[18%] top-[35%] w-[450px] h-[450px] bg-accent/20 rounded-full blur-[120px]" /> */}

      <div className='max-w-7xl mx-auto w-full relative'>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='font-mono text-xs text-accent tracking-[0.3em] mb-8'
        >
          // SECTION_01
        </motion.p>

        <div className='grid lg:grid-cols-2 gap-8 items-center min-h-175'>
          {/* ================= LEFT ================= */}
          <div className='relative z-10'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]'
            >
              HI ALL,
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className='text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]'
            >
              I'M
            </motion.h1>

            <div className='w-fit'>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-5xl md:text-7xl lg:text-8xl font-black tracking-tight  text-white leading-[1.1] flex items-end'
              >
                {portfolioData.name.toUpperCase()}

                <span className='inline-block w-4 md:w-6 h-3 md:h-4 bg-blue-500 ml-2 mb-3 md:mb-4 animate-blink' />
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='h-0.75 bg-accent mt-3'
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='text-muted text-lg md:text-xl leading-relaxed max-w-xl mt-8'
            >
              {portfolioData.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='flex gap-12 mt-12'
            >
              {portfolioData.stats.map((stat, i) => (
                <div key={i}>
                  <p className='text-3xl md:text-4xl font-bold text-white mb-1'>
                    {stat.value.includes('%') ? (
                      <CountUp end={parseInt(stat.value)} suffix='%' />
                    ) : stat.value.includes('+') ? (
                      <CountUp end={parseInt(stat.value)} suffix='+' />
                    ) : (
                      stat.value
                    )}
                  </p>

                  <p className='font-mono text-[10px] text-muted tracking-[0.2em]'>
                    {stat.label.toUpperCase()}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div className='relative hidden lg:flex items-end justify-center h-175 -translate-y-35'>
            {/* Blue glow behind person */}
            {/* <div
              className="
                absolute
                w-[420px]
                h-[420px]
                bg-blue-600/40
                rounded-full
                blur-[100px]
                top-[180px]
              "
            /> */}

            {/* Decorative blue ring */}
            {/* <div
              className="
                absolute
                w-[500px]
                h-[500px]
                border
                border-blue-500/20
                rounded-full
                top-[130px]
              "
            /> */}

            {/* Portrait */}
            <img
              src={portfolioData.profileImage}
              alt={portfolioData.name}
              className='
                relative
                z-10
                w-125
                h-162.5
                object-cover
                object-top
                mix-blend-lighten
              '
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
