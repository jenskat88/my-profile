import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subsription">
                <p className="footer-subsrciption-heading">Connect with me!</p>
                <p className="foot-subscription-text">Let's get to work! Reach out and let's see how we can help eachother!</p>
                <div className="input-area">
                    <form>
                        <input type="email"
                        name="email"
                        className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            JE.Designs <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">JE.Designs © 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="linkedin">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link github"
                        to="/"
                        target="_blank"
                        aria-label="Github">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer