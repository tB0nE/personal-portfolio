import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './MainLayout.module.css';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Tyrone's Portfolio • Professional & Playful</p>
      </footer>
    </div>
  );
};

export default MainLayout;
