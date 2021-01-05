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
                        <a className="social-icon-link facebook"
                        href="https://www.facebook.com/JE-Designs-102008255002543/"
                        target="_blank"
                        rel='noreferrer noopener'
                        aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="social-icon-link instagram"
                        href="https://www.instagram.com/dev.jordan88/"
                        target="_blank"
                        rel='noreferrer noopener'
                        aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="social-icon-link linkedin"
                        href="https://www.linkedin.com/in/jordanenskat/"
                        target="_blank"
                        rel='noreferrer noopener'
                        aria-label="linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a className="social-icon-link github"
                        href="https://github.com/jenskat88"
                        target="_blank"
                        rel='noreferrer noopener'
                        aria-label="Github">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer