import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import styles from './AboutPage.module.css';
import profilePic from '../../assets/profile.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.hero}>
        <div className={styles.photoContainer}>
          <div className={styles.placeholderPhoto}>
             <img src={profilePic} alt="Tyrone Hattingh" className={styles.profileImage} />
          </div>
        </div>
        
        <div className={styles.intro}>
          <h1>Hi, I'm Tyrone.</h1>
          <p className={styles.lead}>
            Senior Software Engineer & Creative Problem Solver
          </p>
          <div className={styles.contactChips}>
            <span className={styles.chip}><MapPin size={16} /> Penne, Italy</span>
            <span className={styles.chip}><Mail size={16} /> tyrone.hattingh@gmail.com</span>
          </div>
        </div>
      </section>

      <section className={styles.bio}>
        <h2>The Story So Far</h2>
        <p>
          With over two decades in the industry, my journey has taken me from the early days of 
          web development to architecting complex financial APIs and modern impact-driven platforms. 
          I've spent 20+ years building systems that matter—from hospitality management 
          software serving global clients to fintech infrastructure powering millions of mobile transactions.
        </p>
        
        <p>
          My approach combines senior-level technical discipline with a lifelong passion for 
          creative experimentation. Whether I'm implementing high-performance React workflows or 
          exploring the boundaries of AI-assisted creativity, I thrive on the intersection of 
          logic and imagination.
        </p>

        <p>
          Currently, I am focused on leveraging my experience to build sustainable, high-impact 
          technology. When I'm not in front of a terminal, you'll likely find me sketching out 
          a new comic, exploring the Italian countryside, or experimenting with game development 
          prototypes in Godot.
        </p>

        <div className={styles.socialLinks}>
          <a href="https://github.com/tB0nE" target="_blank" rel="noreferrer" className="btn-primary">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tyrone-hattingh-84720957/" target="_blank" rel="noreferrer" className="btn-primary">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
