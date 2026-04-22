import { motion } from 'framer-motion'
import PixelCard from './PixelCard'

const projects = [
  {
    title: 'Marvel Strike Force',
    company: 'Trick Studios',
    description:
      'RPG squad game featuring iconic Marvel heroes. Contributed to WebGL platform security research, feature development for Alliance Raid social mechanics, and general gameplay bug fixes.',
    tags: ['Unity 2022', 'C#', 'Node.js', 'MongoDB', 'Jenkins', 'Perforce'],
    link: 'https://marvelstrikeforce.com',
  },
  {
    title: 'Nitro Racers',
    company: 'RIZ Games',
    description:
      'Mobile kart racer. Led a 5-person team, built the driving system, vehicle customization, bot AI, lootbox/progression mechanics, and the full track-creation technical pipeline.',
    tags: ['Unity 2021', 'Easy Roads', 'Bakery', 'Unity CCD', 'Crashlytics'],
    link: 'https://play.google.com/store/apps/details?id=com.palermo.carslam',
  },
  {
    title: 'Focus Friend',
    company: 'Honey B Games',
    description:
      'Gamified productivity app by Hank Green. Led technical development from scratch, delivered an MVP in four months. Architected state management, rendering optimizations, and a custom UI orientation tool.',
    tags: ['Unity 2022', 'Spine', 'Firebase', 'Crashlytics'],
    link: 'https://www.bubbleteagame.com/focus-friend',
  },
  {
    title: 'Boba Story',
    company: 'Honey B Games',
    description:
      'Casual mobile boba tea shop simulator. Improved ARPDAU metrics, reduced bug count, enhanced code flexibility for live ops and A/B testing, and oversaw live game operations.',
    tags: ['Unity 2020', 'Spine', 'Firebase', 'AppLovin', 'AdMob'],
    link: 'https://apps.apple.com/ca/app/boba-story/id1563575361',
  },
  {
    title: 'Trivia Crack Pro League / Question NFT',
    company: 'Etermax',
    description:
      'Built real-time multiplayer prototypes using Photon that formed the production foundation. Created a WebGL feature integrating a React crypto-wallet UI with Unity for the company\'s first NFT initiative.',
    tags: ['Unity', 'Photon Quantum', 'React', 'WebGL'],
  },
  {
    title: 'Puzzle Party',
    company: 'Etermax',
    description:
      'Real-time team-based multiplayer prototype. Implemented reconnection, bot takeover, client compensation, and late-join sync on an in-house multiplayer server.',
    tags: ['Unity', 'Kotlin', 'DynamoDB'],
  },
  {
    title: 'Trivia Crack Adventure & Explorers',
    company: 'Etermax',
    description:
      'Saga-map casual spin-offs of the Trivia Crack franchise. Contributed gameplay features, backend integrations, and cross-discipline collaboration with TDD practices.',
    tags: ['Unity', 'Kotlin', 'DynamoDB', 'Docker', 'Kubernetes'],
    link: 'https://apps.apple.com/us/app/adventure-trivia-crack/id1527770686',
  },
  {
    title: 'Words & Ladders',
    company: 'Etermax',
    description:
      'Word-based puzzle game. Built a "cartridge" system enabling rapid gameplay mechanic swapping without rebuilding core systems, which became key for rapid iteration across the team.',
    tags: ['Unity', 'Kotlin', 'DynamoDB'],
    link: 'https://apps.apple.com/us/app/words-ladders/id1455396801',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Games &amp; shipped products</h2>
          <p className="section-subtitle">
            A selection of titles I&apos;ve engineered across studios — from indie to AAA-adjacent.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <PixelCard
                colors="#6366f1,#818cf8,#a5b4fc"
                gap={6}
                speed={30}
                style={{ width: '100%', height: '320px' }}
              >
                <div
                  className="pixel-card-content"
                  onClick={() => project.link && window.open(project.link, '_blank')}
                  style={{ cursor: project.link ? 'pointer' : 'default' }}
                >
                  <div className="pixel-card-header">
                    <span className="project-company">{project.company}</span>
                    {project.link && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
