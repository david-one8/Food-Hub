import React from 'react'
import '../../styles/auth.css'
import { Link } from 'react-router-dom'
import VTLink from '../../components/VTLink'
import PageTransition from '../../components/PageTransition'

const PartnerLogin = () => {
  return (
    <div className="auth-shell">
      <PageTransition>
      <div className="auth-card" role="region" aria-label="Food partner login form">
        <div className="brand" aria-hidden>
          <div className="brand-logo" />
          <div className="brand-title">FoodHub Partners</div>
        </div>
        <h1 className="auth-title">Partner sign in</h1>
        <p className="auth-subtitle">Access your dashboard and manage orders.</p>

        <form onSubmit={(e)=>e.preventDefault()} className="auth-grid">
          <div className="field">
            <label className="label" htmlFor="email">Business email</label>
            <input className="input" id="email" name="email" type="email" placeholder="contact@yourplace.com" autoComplete="email" />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
          </div>

          <div className="actions">
            <button className="btn-primary" type="submit">Sign in</button>
            <p className="alt">New partner? <VTLink to="/food-partner/register" className="link">Create a partner account</VTLink></p>
            <p className="alt">Looking for a user account? <VTLink to="/user/register" className="link">Register as a user</VTLink></p>
          </div>
        </form>
  </div>
  </PageTransition>
    </div>
  )
}

export default PartnerLogin
