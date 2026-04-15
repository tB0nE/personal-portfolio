import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { projects } from './projectsData';
import type { ProjectCategory } from './projectsData';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsPage.module.css';

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'Web Applications',
    'DevOps',
    'AI Engineering',
    'Games & Comics'
  ];

  const filteredProjects = useMemo(() => {
    let result = activeFilter === 'All' 
      ? [...projects] 
      : projects.filter(p => p.category === activeFilter);
    
    // Sort by year descending (take end year for ranges)
    return result.sort((a, b) => {
      const getYear = (y: string) => {
        const parts = y.split('-');
        return parseInt(parts[parts.length - 1], 10);
      };
      return getYear(b.year) - getYear(a.year);
    });
  }, [activeFilter]);

  return (
    <div className={styles.projectsContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A selection of work spanning full-stack development, AI, infrastructure, and interactive media.
        </p>
      </header>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader}>
          <Filter size={20} />
          <span>Filter by category</span>
        </div>
        <div className={styles.filterChips}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.chip} ${activeFilter === category ? styles.activeChip : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectsList}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <div className={styles.noResults}>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
