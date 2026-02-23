import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, PenTool, Database, Cpu, ChevronRight, Github, Linkedin, Palette } from 'lucide-react';
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            I build <span className={styles.accentText}>systems</span> <br />
            and tell <span className={styles.creativeText}>stories.</span>
          </h1>
          <p className={styles.lead}>
            Over 20 years of experience architecting stable, high-scale systems 
            balanced with a lifelong passion for gritty sci-fi and creative tech.
          </p>
          <div className={styles.heroActions}>
            <Link to="/professional" className="btn-primary">
              View Professional Work
            </Link>
            <Link to="/creative" className={styles.secondaryBtn}>
              Explore Creative Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Split Identity Grid */}
      <section className={styles.grid}>
        <motion.div 
          className={`${styles.card} ${styles.engineerCard}`}
          whileHover={{ y: -10 }}
        >
          <div className={styles.cardHeader}>
            <Terminal size={32} />
            <h2>The Engineer</h2>
          </div>
          <p>
            From hospitality platforms to financial APIs serving millions, 
            I specialize in building stable, scalable, and maintainable 
            architectures.
          </p>
          <ul className={styles.tagList}>
            <li><Database size={14} /> PostgreSQL</li>
            <li><Cpu size={14} /> Python/Django</li>
            <li><Cpu size={14} /> React/TS</li>
          </ul>
          <Link to="/professional" className={styles.cardLink}>
            Career Timeline <ChevronRight size={18} />
          </Link>
        </motion.div>

        <motion.div 
          className={`${styles.card} ${styles.creatorCard}`}
          whileHover={{ y: -10 }}
        >
          <div className={styles.cardHeader}>
            <PenTool size={32} />
            <h2>The Creator</h2>
          </div>
          <p>
            Creator of the gritty sci-fi comic <strong>FADE</strong>. 
            Blending narrative storytelling with AI-assisted 
            workflows and game development in Godot.
          </p>
          <div className={styles.genreBadge}>Art • AI • Comics • Storytelling</div>
          <Link to="/creative" className={styles.cardLink}>
            Creative Portfolio <ChevronRight size={18} />
          </Link>
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
