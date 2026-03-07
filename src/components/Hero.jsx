import { motion } from 'framer-motion'
import Silk from './Silk'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div style={{ position: 'absolute', inset: 0 }}>
        <Silk speed={4} scale={1.2} color="#1a1040" noiseIntensity={1.5} rotation={0} />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-tag"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Buenos Aires, Argentina
          </motion.div>

          <motion.h1
            className="hero-name"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Blas <span className="accent">Ingiulla</span>
          </motion.h1>

          <motion.p
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Game Engineer
          </motion.p>

          <motion.p
            className="hero-desc"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            10+ years building mobile games, multiplayer systems, and Unity-based
            products. Specialized in gameplay engineering, team leadership, and
            shipping titles from prototype to production.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
