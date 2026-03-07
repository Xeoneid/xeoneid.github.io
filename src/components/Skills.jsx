import { motion } from 'framer-motion'
import MagicBento from './MagicBento'

const skillItems = [
  { title: 'Unity', description: 'Cross-platform engine for mobile, WebGL & VR. My primary tool for 7+ years.', label: 'Engine' },
  { title: 'C#', description: 'Primary language for Unity gameplay, architecture & backend systems.', label: 'Language' },
  { title: 'Kotlin & TypeScript', description: 'Backend microservices, game servers & web clients across multiple projects.', label: 'Language' },
  { title: 'TDD & Clean Code', description: 'Test-driven development, DDD, YAGNI, Agile — engineering practices I actually live by.', label: 'Practices' },
  { title: 'CI/CD & Cloud', description: 'Docker, Kubernetes, AWS, Azure, Vercel, Jenkins, Perforce & Git workflows.', label: 'DevOps' },
  { title: 'Multiplayer & Networking', description: 'Photon, WebGL/Unity integration, real-time sync, reconnect & late-join systems.', label: 'Networking' },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: 16 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Tools of the trade</h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: '-60px' }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <MagicBento
          items={skillItems}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          clickEffect={true}
          enableMagnetism={true}
        />
      </motion.div>
    </section>
  )
}
