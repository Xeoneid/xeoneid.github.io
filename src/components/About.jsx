import { motion } from 'framer-motion'

const stats = [
  { number: '7+', label: 'Years in the industry' },
  { number: '10+', label: 'Shipped titles' },
  { number: '5+', label: 'Companies' },
  { number: '∞', label: 'Bugs fixed' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="section-label">About</span>
            <h2 className="section-title">Gameplay Engineer<br />by trade, gamer by heart</h2>
            <p>
              I&apos;m a Game Engineer based in Buenos Aires with over 7 years of experience
              shipping mobile and online games. My journey spans level design at an indie
              studio all the way up to leading cross-disciplinary teams and architecting
              core gameplay systems at established studios.
            </p>
            <p>
              At Etermax I worked across Trivia Crack&apos;s family of titles — implementing
              multiplayer networking, backend integrations, and even a WebGL/React+Unity
              NFT feature. At Honey B Games I led the technical delivery of{' '}
              <em>Focus Friend</em>, a Hank Green-backed productivity app, from zero to
              shipped MVP in four months.
            </p>
            <p>
              I care deeply about clean architecture, TDD, and code that other engineers
              actually enjoy working with. Currently engineering at Trick Studios on Marvel
              Strike Force.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="number">{s.number}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
