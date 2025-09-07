import React from 'react'
import '../../styles/auth.css'
import { Link } from 'react-router-dom'
import VTLink from '../../components/VTLink'
import PageTransition from '../../components/PageTransition'

const UserRegister = () => {
  return (
    <div className="auth-shell">
      <PageTransition>
      <div className="auth-card" role="region" aria-label="User registration form">
        <div className="brand" aria-hidden>
          <div className="brand-logo" />
          <div className="brand-title">FoodHub</div>
        </div>
        <div className="title-row">
          <h1 className="auth-title">Create your account</h1>
          <span className="tag tag--user" aria-label="Registration type is user"><span className="dot" aria-hidden></span>User</span>
        </div>
        <p className="auth-subtitle">Join FoodHub for personalized recommendations and faster checkout.</p>

        <form onSubmit={(e)=>e.preventDefault()} className="auth-grid">
          <div className="row">
            <div className="field">
              <label className="label" htmlFor="firstName">First name</label>
              <input className="input" id="firstName" name="firstName" placeholder="Alex" autoComplete="given-name" />
            </div>
            <div className="field">
              <label className="label" htmlFor="lastName">Last name</label>
              <input className="input" id="lastName" name="lastName" placeholder="Johnson" autoComplete="family-name" />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
            <span className="hint">Use 8+ characters with a mix of letters, numbers & symbols.</span>
          </div>

          <div className="actions">
            <button className="btn-primary" type="submit">Create account</button>
            <p className="alt">Already have an account? <VTLink to="/user/login" className="link">Sign in</VTLink></p>
            <div className="divider" />
            <p className="alt">Prefer partnering with us? <VTLink to="/food-partner/register" className="link">Register as a food partner</VTLink></p>
          </div>
        </form>
  </div>
  </PageTransition>
    </div>
  )
}

export default UserRegister
