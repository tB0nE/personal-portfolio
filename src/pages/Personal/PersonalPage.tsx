import React from 'react';
import TimelineItem from '../../components/TimelineItem';
import { cvDataEn } from '../../data/cvData';
import styles from './PersonalPage.module.css';

const PersonalPage: React.FC = () => {
  // Personal projects: oldest first
  const projects = [...cvDataEn.projects].sort((a, b) => {
    return (a.year || '').localeCompare(b.year || '');
  });

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Creative & Personal</h1>
        <p className={styles.lead}>
          A chronological journey of creative experiments, from narrative comics 
          to AI-assisted development.
        </p>
      </header>

      <div className={styles.timeline}>
        {projects.map((proj, idx) => (
          <TimelineItem
            key={idx}
            title={proj.title}
            period={proj.year}
            description={proj.description}
            technologies={proj.technologies}
            images={proj.images}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalPage;
