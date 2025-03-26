import React, { JSX } from 'react'

/**
 * A wrapper component that renders its children inside a styled `<section>` element.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * @returns {JSX.Element} A styled section element containing the provided children.
 */

export default function SectionWrapper({children, className, hidden, style, sectionClassName}: {children: React.ReactNode, className?: string, hidden?: string, style?: object, sectionClassName?: string}) : JSX.Element {
  return (
    <section className={` ${sectionClassName} min-h-fit min-w-fit py-0.5 max-w-screen px-0.5 sm:px-3.5 sm:py-0 sm:pb-1.5  ${hidden ? hidden+"hidden" : ''}`}
    style={style}
    >
      <div className={`bg-white w-full h-full rounded-xl p-3 ${className || ''} ${hidden ? hidden+"hidden" : ''}`}>

        {children}
      </div>
    </section>
  )
}
