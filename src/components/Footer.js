import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-heLinkding">
                        <h2>Rajiv Kumar</h2>
                        <p>Passionate about Technologies, Machines, Codings...</p>
                        <div className="footer-form">
                            <input type="text" placeholder="Enter your email" />
                            <button>Try Now</button>
                        </div>
                    </div>

                    <div className="footer-links">
                        <Link to="#">FeLinktures</Link>
                        <Link to="#">PlLinkns & Pricing</Link>
                        <Link to="#">News & Blogs</Link>
                        <Link to="#">CLinkreers</Link>
                        <Link to="#">Linkbout Us</Link>
                        <Link to="#">Terms</Link>
                        <Link to="#">PrivLinkcy</Link>
                        <Link to="#">Cookies</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer