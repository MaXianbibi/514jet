"use client"

import React, { JSX, useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardButton from './DashboardButton';

/**
 * Header component that renders a fixed navigation bar at the top of the page.
 * The header disappears when scrolling down and reappears when scrolling up.
 * Optimized for SEO with semantic structure, keywords, and accessibility.
 * 
 * @returns {JSX.Element} The header element containing navigation links.
 * 
 * @remarks
 * - Fixed at the top with z-index 50 for visibility.
 * - Uses Tailwind CSS with mobile-first design and SEO-friendly keywords.
 * - Enhanced accessibility for better UX and SEO in 2025.
 */
export default function Header(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Écouter l'événement de scroll pour déterminer la direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll vers le bas : masquer le header
        setIsVisible(false);
      } else {
        // Scroll vers le haut : afficher le header
        setIsVisible(true);
      }

      // Mettre à jour la dernière position de scroll
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-screen font-normal min-h-8 
        bg-[var(--background)] sm:pt-2 sm:px-0.5 transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}
    >
      <nav className="flex px-3 text-base text-[var(--link)] py-3 lg:text-base sm:mx-3 items-center justify-between bg-white h-full sm:rounded-t-xl">
        {/* Logo avec mots-clés */}
        <Link
          href="/"
          className="text-[var(--foreground)] font-[600] hover:underline shrink-0"
          aria-label="514Jet Montreal Web Development"
        >
          <span className="block lg:hidden">514Jet</span>
          <span className="hidden lg:block">514Jet | Montreal Web Development</span>
        </Link>

        {/* Navigation centrée avec mots-clés optimisés */}
        <ul className="gap-15 justify-center grow hidden md:flex">
          <li>
            <Link href="/About" className="hover:underline" aria-label="About Us">
              <span className="block lg:hidden">À PROPOS</span>
              <span className="hidden lg:block">ABOUT</span>
            </Link>
          </li>
          <li>
            <Link href="/Services" className="hover:underline" aria-label="Web Services">
              <span className="block lg:hidden">SERVICES</span>
              <span className="hidden lg:block">SERVICES WEB</span>
            </Link>
          </li>
          <li>
            <Link href="/Portfolio" className="hover:underline" aria-label="Our Portfolio">
              <span className="block lg:hidden">PORTFOLIO</span>
              <span className="hidden lg:block">NOTRE PORTFOLIO</span>
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:underline" aria-label="SEO Blog">
              <span className="block lg:hidden">BLOG</span>
              <span className="hidden lg:block">BLOG</span>
            </Link>
          </li>
        </ul>

        {/* Contact avec mot-clé */}
        <div className="flex gap-2">
          <Link href="/Contact" className="hover:underline shrink-0" aria-label="Contact Our Team">
            <span className="block lg:hidden">CONTACT</span>
            <span className="hidden lg:block">CONTACT OUR TEAM</span>
          </Link>
          <div className="md:hidden">
            <DashboardButton />
          </div>
        </div>
      </nav>
    </header>
  );
}