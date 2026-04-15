import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Palette, MapPin, Mail, FolderGit2 } from 'lucide-react';
import styles from './LandingPage.module.css';
import profilePic from '../../assets/profile.jpg';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.photoContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.placeholderPhoto}>
             <img src={profilePic} alt="Tyrone Hattingh" className={styles.profileImage} />
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.accentText}>Tyrone.</span>
          </h1>
          <p className={styles.lead}>
            Senior Software & AI Engineer. 20+ years in tech and development, I architect high-scale systems and applications with a focus on stability and creative, aesthetically pleasing user experiences. I've held a lifelong passion for creating software, platforms, and stories.
          </p>

          <div className={styles.skills}>
            <span className={styles.skillsTitle}>Key Skills:</span>
            <div className={styles.skillsList}>
              <span>React</span>
              <span>Python</span>
              <span>Django</span>
              <span>FastAPI</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>AI Engineering</span>
            </div>
          </div>

          <div className={styles.obsessions}>
            <span className={styles.obsessionTitle}>Current Obsessions:</span>
            <span className={styles.obsessionText}>VR, Narrat Engine, & AI Manipulation</span>
          </div>
          
          <div className={styles.contactChips}>
            <span className={styles.chip}><MapPin size={16} /> Pescara, Italy</span>
            <span className={styles.chip}><Mail size={16} /> tyrone.hattingh@gmail.com</span>
          </div>

          <div className={styles.heroActions}>
            <Link to="/projects" className={styles.primaryBtn}>
              <FolderGit2 size={20} /> View Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Social Links */}
      <footer className={styles.socialFooter}>
        <a href="https://github.com/tB0nE" target="_blank" rel="noreferrer">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/tyrone-hattingh-84720957/" target="_blank" rel="noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="https://www.deviantart.com/negative-chi" target="_blank" rel="noreferrer">
          <Palette size={24} />
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
