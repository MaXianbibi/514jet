import React, { JSX } from 'react';
import Link from 'next/link';
import DashboardButton from './DashboardButton';

/**
 * Header component that renders a fixed navigation bar at the top of the page.
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
  return (
    <header className="fixed top-0 left-0 z-50 w-screen font-normal min-h-8 bg-[var(--background)] sm:pt-2 sm:px-0.5">
      <nav className="flex px-3 text-base text-[var(--link)] py-3  lg:text-base sm:mx-3 items-center justify-between bg-white h-full sm:rounded-t-xl">
        {/* Logo avec mots-clés */}
        <Link href="/" className="text-[var(--foreground)] font-[600] hover:underline shrink-0 ">
          <span className="block lg:hidden">514Jet</span>
          <span className="hidden lg:block" aria-label="514Jet Montreal Web Development">
            514Jet. | Montreal Web Development
          </span>
        </Link>

        {/* Navigation centrée avec mots-clés optimisés */}
        <ul className="gap-15 justify-center grow hidden md:flex">
          <li>
            <Link href="/About" className="hover:underline" aria-label="About Us">
              <span className="block lg:hidden">ABOUT</span>
              <span className="hidden lg:block">ABOUT US</span>
            </Link>
          </li>
          <li>
            <Link href="/Services" className="hover:underline" aria-label="Web Services">
              <span className="block lg:hidden">SERVICES</span>
              <span className="hidden lg:block">WEB SERVICES</span>
            </Link>
          </li>
          <li>
            <Link href="/Portfolio" className="hover:underline" aria-label="Our Portfolio">
              <span className="block lg:hidden">PORTFOLIO</span>
              <span className="hidden lg:block">OUR PORTFOLIO</span>
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:underline" aria-label="SEO Blog">
              <span className="block lg:hidden">BLOG</span>
              <span className="hidden lg:block">BLOG</span> {/* Mot-clé enrichi */}
            </Link>
          </li>
        </ul>

        {/* Contact avec mot-clé */}
        <div className='flex gap-2'>
          <Link href="/Contact" className="hover:underline shrink-0" aria-label="Contact Our Team">
            <span className="block lg:hidden">CONTACT</span>
            <span className="hidden lg:block">CONTACT OUR TEAM</span> {/* Plus descriptif */}
          </Link>
          <div className='md:hidden'>
            <DashboardButton />
          </div>
        </div>
      </nav>
    </header>
  );
}