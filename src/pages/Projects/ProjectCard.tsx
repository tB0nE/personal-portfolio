import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronUp, Cpu, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from './projectsData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  // Handle opening/closing the full-screen image view
  // Stop propagation to prevent triggering the card expansion
  const toggleFullImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFullImage(!showFullImage);
  };

  // Define the modal overlay to be rendered at the body level
  // This prevents clipping issues caused by 'overflow: hidden' on parent containers
  const modal = (
    <AnimatePresence>
      {showFullImage && project.image && (
        <motion.div 
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleFullImage}
        >
          <motion.button 
            className={styles.closeModal}
            onClick={toggleFullImage}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            aria-label="Close full screen image"
          >
            <X size={32} />
          </motion.button>
          <motion.img 
            src={project.image} 
            alt={project.title}
            className={styles.modalImage}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}>
      <div 
        className={styles.cardHeader} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.headerLeft}>
          {project.image ? (
            <div 
              className={styles.projectImageContainer}
              onClick={toggleFullImage}
              title="Click to enlarge"
              style={{ cursor: 'zoom-in' }}
            >
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            </div>
          ) : (
            <div className={`${styles.projectImageContainer} ${styles.imagePlaceholder}`}>
               <Cpu size={32} />
            </div>
          )}
        </div>

        <div className={styles.headerMain}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{project.title}</h3>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.projectLink}
                onClick={(e) => e.stopPropagation()}
                title="Visit Project"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <p className={styles.shortDescription}>{project.shortDescription}</p>
          <div className={styles.metaRow}>
            <span className={styles.year}>{project.year}</span>
            <span className={styles.categoryBadge}>{project.category}</span>
            {project.isCurrent && (
              <span className={styles.currentBadge}>Current</span>
            )}
          </div>
        </div>

        <button className={styles.expandButton} aria-label="Toggle details">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className={styles.cardBody}>
          <div className={styles.expandedContent}>
            <section className={styles.techSection}>
              <h4 className={styles.sectionTitle}>Key Technologies & Skills</h4>
              <div className={styles.techGrid}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </section>

            <section className={styles.descriptionSection}>
              <h4 className={styles.sectionTitle}>Project Overview</h4>
              <p className={styles.fullDescription}>{project.fullDescription}</p>
            </section>

            {project.gallery && project.gallery.length > 0 && (
              <section className={styles.gallerySection}>
                <h4 className={styles.sectionTitle}>Gallery</h4>
                <div className={styles.galleryGrid}>
                  {project.gallery.map((img, index) => (
                    <div key={index} className={styles.galleryItem}>
                      <img src={img} alt={`${project.title} gallery ${index}`} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      )}

      {createPortal(modal, document.body)}
    </div>
  );
};
