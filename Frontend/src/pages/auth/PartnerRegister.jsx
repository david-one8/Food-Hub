import React from 'react'
import '../../styles/auth.css'
import { Link } from 'react-router-dom'
import VTLink from '../../components/VTLink'
import PageTransition from '../../components/PageTransition'

const PartnerRegister = () => {
  return (
    <div className="auth-shell">
      <PageTransition>
      <div className="auth-card" role="region" aria-label="Food partner registration form">
        <div className="brand" aria-hidden>
          <div className="brand-logo" />
          <div className="brand-title">FoodHub Partners</div>
        </div>
        <div className="title-row">
          <h1 className="auth-title">Partner with FoodHub</h1>
          <span className="tag tag--partner" aria-label="Registration type is food partner"><span className="dot" aria-hidden></span>Food partner</span>
        </div>
        <p className="auth-subtitle">Grow your business by reaching more customers.</p>

        <form onSubmit={(e)=>e.preventDefault()} className="auth-grid">
          <div className="field">
            <label className="label" htmlFor="restaurantName">Business name</label>
            <input className="input" id="restaurantName" name="restaurantName" placeholder="Spice Villa" />
          </div>

          <div className="row">
            <div className="field">
              <label className="label" htmlFor="city">City</label>
              <input className="input" id="city" name="city" placeholder="Bengaluru" autoComplete="address-level2" />
            </div>
            <div className="field">
              <label className="label" htmlFor="cuisine">Cuisine</label>
              <input className="input" id="cuisine" name="cuisine" placeholder="North Indian, Chinese" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label className="label" htmlFor="email">Business email</label>
              <input className="input" id="email" name="email" type="email" placeholder="contact@spicevilla.com" autoComplete="email" />
            </div>
            <div className="field">
              <label className="label" htmlFor="phone">Phone</label>
              <input className="input" id="phone" name="phone" type="tel" placeholder="98765 43210" autoComplete="tel" />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
          </div>

          <div className="actions">
            <button className="btn-primary" type="submit">Create partner account</button>
            <p className="alt">Already a partner? <VTLink to="/food-partner/login" className="link">Sign in</VTLink></p>
            <div className="divider" />
            <p className="alt">Want a user account instead? <VTLink to="/user/register" className="link">Register as a user</VTLink></p>
          </div>
        </form>
  </div>
  </PageTransition>
    </div>
  )
}

export default PartnerRegister
