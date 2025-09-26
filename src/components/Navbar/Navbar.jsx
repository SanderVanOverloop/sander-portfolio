'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Portfolio
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={`${styles.navLink} ${pathname === '/projects' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="./Sander-Van-Overloop-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className={styles.mobileOverlay} onClick={closeMenu}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
