import { motion } from 'framer-motion'

export default function SectionTitle({ number, eyebrow, children, dark = false }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`section-kicker ${dark ? 'light' : ''}`}>
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{children}</h2>
    </motion.div>
  )
}
