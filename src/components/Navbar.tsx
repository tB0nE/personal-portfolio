import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, FileText } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Download CV', path: '/cv', icon: FileText },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            <item.icon size={20} className={styles.icon} />
            <span className={styles.linkText}>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
