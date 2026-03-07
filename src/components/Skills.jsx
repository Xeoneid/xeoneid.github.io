import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Languages',
    skills: ['C#', 'Kotlin', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    title: 'Engines & Frameworks',
    skills: ['Unity', 'Node.js', 'React', 'Angular', 'Three.js'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Git', 'Git LFS', 'Perforce', 'CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Vercel', 'Jenkins'],
  },
  {
    title: 'Practices',
    skills: ['TDD', 'DDD', 'Clean Code', 'Agile', 'YAGNI', 'Code Review', 'Tech Leadership'],
  },
  {
    title: 'Platforms & Tools',
    skills: ['Unity Cloud Content Delivery', 'Firebase', 'Crashlytics', 'Photon', 'Spine', 'Jira', 'Rider'],
  },
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
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Tools of the trade</h2>
        </motion.div>

        <div className="skills-categories">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="skill-category-title">{cat.title}</p>
              <div className="skills-row">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: ci * 0.05 + si * 0.04 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
