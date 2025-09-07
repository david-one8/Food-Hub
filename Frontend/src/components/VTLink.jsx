import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * VTLink: Navigates with a smooth cross-fade using the View Transitions API (Chromium).
 * Falls back to normal navigation when unsupported.
 */
const VTLink = ({ to, children, className, role, 'aria-selected': ariaSelected, ...rest }) => {
  const navigate = useNavigate()

  const onClick = (e) => {
    // Respect modified clicks (new tab, etc.) and non-left clicks
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
    e.preventDefault()

    const go = () => navigate(to)

    // Progressive enhancement: smooth transition when available
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      document.startViewTransition(() => {
        go()
      })
    } else {
      go()
    }
  }

  return (
    <a href={to} onClick={onClick} className={className} role={role} aria-selected={ariaSelected} {...rest}>
      {children}
    </a>
  )
}

export default VTLink
