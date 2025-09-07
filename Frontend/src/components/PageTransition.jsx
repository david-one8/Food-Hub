import React, { useEffect, useRef } from 'react'

/**
 * PageTransition: Minimal mount transition (opacity + translateY) to smooth route switches.
 * Usage: <PageTransition><YourContent /></PageTransition>
 */
const PageTransition = ({ children, className = '' }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rAF = requestAnimationFrame(() => {
      el.classList.add('rt-ready')
    })
    return () => cancelAnimationFrame(rAF)
  }, [])

  return (
    <div ref={ref} className={`route-transition ${className}`}>
      {children}
    </div>
  )
}

export default PageTransition
