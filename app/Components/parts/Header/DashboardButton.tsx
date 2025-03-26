"use client"

import React from 'react'
import { FiAlignJustify } from 'react-icons/fi'

export default function DashboardButton() {
    return (
        <button
            onClick={() => console.log('clicked')}
            aria-label="Ouvrir le menu de navigation"
            className="focus:outline-none"
        >
            <FiAlignJustify className='text-xl cursor-pointer' />
        </button>
    );
}