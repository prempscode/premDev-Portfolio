import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-dark pt-28 pb-16 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs text-accent tracking-[0.3em] mb-8"
        >
          // SECTION_01
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-2 leading-[1.1] bg-blue-600  inline-block"
            >
              HI ALL,
            </motion.h1> */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-2 leading-[1.1]"
            >
              I'M
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1] flex items-end"
            >
              {portfolioData.name.toUpperCase()}
              <span className="inline-block w-4 md:w-6 h-3 md:h-4 bg-accent ml-2 mb-3 md:mb-4 animate-blink"></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mt-10 mb-12"
            >
              {portfolioData.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-12"
            >
              {portfolioData.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value.includes("%") ? (
                      <CountUp end={parseInt(stat.value)} suffix="%" />
                    ) : stat.value.includes("+") ? (
                      <>
                        <CountUp end={parseInt(stat.value)} suffix="+" />
                      </>
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="font-mono text-[10px] text-muted tracking-[0.2em]">
                    {stat.label.toUpperCase()}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-accent rounded-full opacity-10 blur-3xl"></div>
              <img
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                className="relative w-full h-full object-cover rounded-full"
                style={{ background: "#3b82f6" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
