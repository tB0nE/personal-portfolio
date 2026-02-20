import React from 'react';
import TimelineItem from '../../components/TimelineItem';
import { cvDataEn } from '../../data/cvData';
import styles from './ProfessionalPage.module.css';

const ProfessionalPage: React.FC = () => {
  // Professional is newest first
  const experiences = cvDataEn.experience;

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Professional Journey</h1>
        <p className={styles.lead}>
          A timeline of my career from architecture to high-scale API development.
        </p>
      </header>

      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <TimelineItem
            key={idx}
            title={exp.company}
            subtitle={exp.role}
            period={exp.period}
            description={exp.description}
            bullets={exp.bullets}
            technologies={exp.technologies}
            images={exp.images}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalPage;
