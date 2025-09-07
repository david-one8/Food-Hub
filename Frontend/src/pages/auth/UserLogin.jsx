import React from 'react'
import '../../styles/auth.css'
import { Link } from 'react-router-dom'
import VTLink from '../../components/VTLink'
import PageTransition from '../../components/PageTransition'

const UserLogin = () => {
  return (
    <div className="auth-shell">
      <PageTransition>
      <div className="auth-card" role="region" aria-label="User login form">
        <div className="brand" aria-hidden>
          <div className="brand-logo" />
          <div className="brand-title">FoodHub</div>
        </div>
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Sign in to continue your foodie journey.</p>

        <form onSubmit={(e)=>e.preventDefault()} className="auth-grid">
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
          </div>

          <div className="actions">
            <button className="btn-primary" type="submit">Sign in</button>
            <p className="alt">New to FoodHub? <VTLink to="/user/register" className="link">Create a user account</VTLink></p>
            <p className="alt">Partner with us? <VTLink to="/food-partner/register" className="link">Register as a food partner</VTLink></p>
          </div>
        </form>
  </div>
  </PageTransition>
    </div>
  )
}

export default UserLogin
