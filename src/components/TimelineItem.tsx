import React from 'react';
import { motion } from 'framer-motion';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  bullets?: string[];
  technologies?: string[];
  images?: string[];
  reverse?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  bullets,
  technologies,
  images,
  reverse
}) => {
  return (
    <motion.div 
      className={`${styles.container} ${reverse ? styles.reverse : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          {period && <span className={styles.period}>{period}</span>}
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        </div>
        
        <p className={styles.description}>{description}</p>
        
        {bullets && (
          <ul className={styles.bullets}>
            {bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
        
        {technologies && (
          <div className={styles.techStack}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        )}
      </div>

      {images && images.length > 0 && (
        <div className={styles.imageGrid}>
          {images.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img src={img} alt={`${title} screenshot ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TimelineItem;
