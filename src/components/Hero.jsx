import { motion } from 'framer-motion'

const orbs = [
  { color: '#6366f1', width: 700, height: 500, top: '-15%', left: '-10%', duration: 22 },
  { color: '#8b5cf6', width: 500, height: 500, top: '10%', right: '-5%', duration: 28 },
  { color: '#0ea5e9', width: 400, height: 400, top: '55%', left: '30%', duration: 18 },
]

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
      {/* Animated aurora background */}
      <div className="hero-bg">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="hero-orb"
            style={{
              width: orb.width,
              height: orb.height,
              background: orb.color,
              top: orb.top,
              left: orb.left,
              right: orb.right,
            }}
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -40, 60, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
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
