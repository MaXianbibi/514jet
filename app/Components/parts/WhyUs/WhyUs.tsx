"use client"

// app/components/WhyUs.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdOutlineArrowOutward } from 'react-icons/md';
import { FaBoltLightning, FaHouse } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import Link from 'next/link';

import "./WhyUs.css"; // Import your CSS file for tilt effect

const whyUsData = [
  {
    title: 'Montreal web agency',
    description: 'Easy solution for creating the best web app for your company',
    icon: <FaHouse className="text-3xl text-link group-hover:scale-110 group-hover:text-link-light transition-all duration-300" />,
  },
  {
    title: 'Response in 24h',
    description: 'Contacter nous pour recevoir une réponse en moins de 24h !',
    icon: <MdEmail className="text-3xl text-link group-hover:scale-110 group-hover:text-link-light transition-all duration-300" />,
    link: 'Get a free personalised demo',
  },
  {
    title: 'Cutting edge technology',
    description:
      'We use the best, most modern technology, for your app to be the fastest, SEO optimized, and aesthetically pleasing',
    icon: <FaBoltLightning className="text-3xl text-link group-hover:scale-110 group-hover:text-link-light transition-all duration-300" />,
  },
  {
    title: 'Vous obtenez tous le code',
    description:
      'Vous obtenez l’intégralité du projet, pour le modifier, héberger ou partager, comme vous le souhaiter',
    icon: <FaHouse className="text-3xl text-link group-hover:scale-110 group-hover:text-link-light transition-all duration-300" />,
  },
  {
    title: '100% Personalisable',
    description: 'On personnalise à 100% votre app, pour vos préférences et besoins.',
    icon: <IoMdSettings className="text-3xl text-link group-hover:scale-110 group-hover:text-link-light transition-all duration-300" />,
  },
  {
    title: 'Get a free demo',
    description: 'We give you a free demo of what your web app could look like and work',
    icon: <MdOutlineArrowOutward className="text-3xl text-link group-hover:scale-110 group-hover:text-link-light transition-all duration-300" />,
    link: 'Contacter nous maintenant',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-background py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground font-poppins"
        >
          Why 514Jet?
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-6 flex flex-col gap-4 shadow-sm tilt-3d"
            >
              {/* Icon and Title */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground font-poppins">
                  {item.title}
                </h3>
                <div>{item.icon}</div>
              </div>

              {/* Description */}
              <p className="text-sub text-sm sm:text-base font-poppins">{item.description}</p>

              {/* CTA */}
              {item.link && (
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-link rounded-full text-link hover:bg-link hover:text-white hover:shadow-md transition-all duration-300 font-poppins"
                  aria-label={item.link}
                >
                  {item.link}
                  <MdOutlineArrowOutward size={20} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}