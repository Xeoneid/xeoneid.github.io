import { motion } from 'framer-motion'
import PixelCard from './PixelCard'

export default function Profile() {
  return (
    <section id="profile" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="section-label">Who I am</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Building games<br />people remember</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
              I started in the industry as a level designer and quickly moved into engineering,
              drawn by the craft of making systems that feel alive. Over 10 years and across studios
              like Etermax, Honey B Games, RIZ Games, and now Trick Studios, I&apos;ve built
              everything from real-time multiplayer servers to gamified productivity apps.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
              I lead teams, review PRs, architect gameplay systems, and still enjoy the
              hands-on work of writing clean, tested code. Unity &amp; C# are my main tools,
              but I&apos;m at home across the full stack when the project needs it.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#projects" className="btn btn-primary">See my work</a>
              <a href="#contact" className="btn btn-secondary">Say hello</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <PixelCard
              colors="#6366f1,#818cf8,#a5b4fc"
              gap={5}
              speed={25}
              style={{
                width: '320px',
                height: '460px',
                backgroundImage: 'url(/yugioh-card.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #profile .container > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
