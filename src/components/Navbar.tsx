"use client";

import React, { useState } from "react";
import Link from "next/link"; 
import "./Navbar.css"; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <header id="ekrama-header-gif-style">
        <div className="top-info-bar">
          <div className="top-info-content">
            <div className="revenue-driven">
              <span className="label">REVENUE DRIVEN FOR OUR CLIENTS</span>
              <span className="value">
                $10,085,355,239+ <span className="info-icon">ⓘ</span>
              </span>
            </div>

            <div className="contact-info">
              <a href="#" className="client-login">
                Client Login
              </a>
              <a href="tel:888-601-5359" className="phone-number">
                888-601-5359
              </a>
            </div>
          </div>
        </div>

        <nav className="main-nav-bar">
          <div className="nav-content-wrapper">
            <div className="logo-brand">
              <div className="logo-text">WPFEDEV</div>
              <div className="tagline">Digital Marketing That Drives Revenue®</div>
            </div>

            <div
              className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
              id="hamburger-btn"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Desktop Navigation */}
            <ul className="nav" id="desktop-nav">
              {/* 1. FRONT END TECHNOLOGIES */}
              <li>
                <a href="https://wpfedev.com/front-end-technologies">
                  Front End Tech <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-code"></i>
                      <span>Languages</span>
                    </div>
                    <div className="link-list">
                      <a href="https://wpfedev.com/front-end-technologies/HMTL">HTML</a>
                      <a href="https://wpfedev.com/front-end-technologies/CSS">CSS</a>
                      <a href="https://wpfedev.com/front-end-technologies/Javascript">Javascript</a>
                      <a href="https://wpfedev.com/front-end-technologies/page-builders">Page Builders</a>
                      <a href="https://wpfedev.com/front-end-technologies/nextjs-with-typescript">Next.js with Typescript</a>
                    </div>
                  </div>

                  <a href="https://wpfedev.com/front-end-technologies" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-layer-group section-icon"></i>
                      <h3>Front End Strategy</h3>
                      <p>
                        Comprehensive front-end solutions using the latest technologies. We create responsive, accessible, and performant interfaces using HTML, CSS, and Modern JavaScript.
                      </p>
                    </div>
                    <span className="btn-blue">View Technologies</span>
                  </a>

                  <a href="https://wpfedev.com/portfolio/" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-database section-icon"></i>
                      <h3>Dev Success Stories</h3>
                      <p>
                        Browse our case studies to see how we have helped clients achieve pixel-perfect designs and interactive user experiences.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              {/* 2. TRADITIONAL WORDPRESS */}
              <li>
                <a href="https://wpfedev.com/traditional-wordpress-front-end/">
                  Traditional WP <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-brands fa-wordpress"></i>
                      <span>Development</span>
                    </div>
                    <div className="link-list">
                      <a href="https://wpfedev.com/traditional-wordpress-front-end/design-conversion/">Design Conversion</a>
                      <a href="https://wpfedev.com/traditional-wordpress-front-end/seo-and-mobile-responsive/">SEO & Mobile Responsive</a>
                      <a href="https://wpfedev.com/traditional-wordpress-front-end/speed-front-end-optimization/">Speed Optimization</a>
                      <a href="https://wpfedev.com/traditional-wordpress-front-end/theme-setup-customization/">Theme Setup & Customization</a>
                    </div>
                  </div>

                  <a href="https://wpfedev.com/traditional-wordpress-front-end/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-pen-nib section-icon"></i>
                      <h3>Traditional WordPress</h3>
                      <h4> ROBUST & RELIABLE </h4>
                      <p>
                        Expert theme development and customization. We convert your designs into fully functional WordPress themes with a focus on SEO and Speed.
                      </p>
                    </div>
                    <span className="btn-blue">Our Approach</span>
                  </a>

                  <a href="https://wpfedev.com/portfolio/" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-users section-icon"></i>
                      <h3>WP Campaigns</h3>
                      <p>
                        Explore our portfolio of successful WordPress sites that have increased engagement and built brand trust.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              {/* 3. WEB APP FRONT END */}
              <li>
                <a href="https://wpfedev.com/wep-app-front-end/">
                  Web App Front End <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-laptop-code"></i>
                      <span>Application</span>
                    </div>
                    <div className="link-list">
                      <a href="https://wpfedev.com/wep-app-front-end/design-conversion/">Design Conversion</a>
                      <a href="https://wpfedev.com/wep-app-front-end/seo-and-mobile-responsive/">SEO & Mobile Responsive</a>
                      <a href="https://wpfedev.com/wep-app-front-end/speed-optimization/">Speed Optimization</a>
                      <a href="https://wpfedev.com/wep-app-front-end/theme-setup-customization/">Theme Setup & Customization</a>
                    </div>
                  </div>

                  <a href="https://wpfedev.com/wep-app-front-end/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-gauge-high section-icon"></i>
                      <h3>Web App Development</h3>
                      <p>
                        Custom Web Application interfaces. We build fast, secure, and mobile-responsive web apps that provide seamless user experiences.
                      </p>
                    </div>
                    <span className="btn-blue">Check Speed</span>
                  </a>

                  <a href="https://wpfedev.com/portfolio/" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-server section-icon"></i>
                      <h3>App Projects</h3>
                      <p>
                        Check out our development portfolio featuring high-performance web applications with custom functionality.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              {/* 4. HEADLESS WORDPRESS */}
              <li>
                <a href="https://wpfedev.com/headless-wordpress-front-end/">
                  Headless WP <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-bolt"></i>
                      <span>Headless</span>
                    </div>
                    <div className="link-list">
                      <a href="https://wpfedev.com/headless-wordpress-front-end/design-conversion/">Design Conversion</a>
                      <a href="https://wpfedev.com/headless-wordpress-front-end/seo-and-mobile-responsive/">SEO & Mobile Responsive</a>
                      <a href="https://wpfedev.com/headless-wordpress-front-end/speed-front-end-optimization/">Speed Optimization</a>
                      <a href="https://wpfedev.com/headless-wordpress-front-end/theme-setup-customization/">Theme Setup & Customization</a>
                    </div>
                  </div>

                  <a href="https://wpfedev.com/headless-wordpress-front-end/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-rocket section-icon"></i>
                      <h3>Headless Architecture</h3>
                      <p>
                        Decoupled front-end strategies for ultimate speed and security. We leverage Next.js and WordPress APIs for a modern web experience.
                      </p>
                    </div>
                    <span className="btn-blue">Our Services</span>
                  </a>

                  <a href="https://wpfedev.com/portfolio/" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-handshake section-icon"></i>
                      <h3>Headless Results</h3>
                      <p>
                        See our headless success stories. We have successfully helped clients modernize their stack and drive performance.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              {/* 5. ABOUT */}
              <li>
                <a href="https://wpfedev.com/about/">
                  About <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-user-tie"></i>
                      <span>Company</span>
                    </div>
                    <div className="link-list">
                      <a href="https://wpfedev.com/about/approach/">Our Approach</a>
                      <a href="https://wpfedev.com/about/introduction/">Introduction</a>
                      <a href="https://wpfedev.com/about/story/">Our Story</a>
                      <a href="https://wpfedev.com/contact/">Contact</a>
                      <a href="https://wpfedev.com/terms-and-conditions/">Terms</a>
                    </div>
                  </div>

                  <a href="https://wpfedev.com/about/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-bullseye section-icon"></i>
                      <h3>Meet WPFEDEV</h3>
                      <p>
                        Learn about our mission to bring transparency to web development. Discover the core values and strategic approach that drive client success.
                      </p>
                    </div>
                    <span className="btn-blue">Read Mission</span>
                  </a>

                  <a href="https://wpfedev.com/portfolio/" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-envelope section-icon"></i>
                      <h3>Professional Journey</h3>
                      <p>
                        View our professional portfolio showcasing a history of successful projects, from technical audits to full-scale web development.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://wpfedev.com/portfolio/">Portfolio</a>
              </li>
            </ul>

            <a href="https://wpfedev.com/contact/" className="cta-button-nav">
              Get a Proposal
            </a>
          </div>
        </nav>

        {/* --- MOBILE NAV CONTAINER (UPDATED) --- */}
        <div className={`mobile-nav-container ${isMobileMenuOpen ? "active" : ""}`} id="mobile-nav">
           
          {/* Item 1 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 1 ? "active" : ""}`}
              onClick={() => toggleAccordion(1)}
            >
              Front End Tech <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 1 ? "open" : ""}`}>
              <a href="https://wpfedev.com/front-end-technologies/HMTL" className="mobile-link">HTML</a>
              <a href="https://wpfedev.com/front-end-technologies/CSS" className="mobile-link">CSS</a>
              <a href="https://wpfedev.com/front-end-technologies/Javascript" className="mobile-link">Javascript</a>
              <a href="https://wpfedev.com/front-end-technologies/page-builders" className="mobile-link">Page Builders</a>
              <a href="https://wpfedev.com/front-end-technologies/nextjs-with-typescript" className="mobile-link">Next.js with Typescript</a>
              <a href="https://wpfedev.com/front-end-technologies" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>All Technologies</a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 2 ? "active" : ""}`}
              onClick={() => toggleAccordion(2)}
            >
              Traditional WP <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 2 ? "open" : ""}`}>
              <a href="https://wpfedev.com/traditional-wordpress-front-end/design-conversion/" className="mobile-link">Design Conversion</a>
              <a href="https://wpfedev.com/traditional-wordpress-front-end/seo-and-mobile-responsive/" className="mobile-link">SEO & Mobile Responsive</a>
              <a href="https://wpfedev.com/traditional-wordpress-front-end/speed-front-end-optimization/" className="mobile-link">Speed Optimization</a>
              <a href="https://wpfedev.com/traditional-wordpress-front-end/theme-setup-customization/" className="mobile-link">Theme Setup</a>
              <a href="https://wpfedev.com/traditional-wordpress-front-end/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>Traditional WP Services</a>
            </div>
          </div>

          {/* Item 3 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 3 ? "active" : ""}`}
              onClick={() => toggleAccordion(3)}
            >
              Web App Front End <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 3 ? "open" : ""}`}>
              <a href="https://wpfedev.com/wep-app-front-end/design-conversion/" className="mobile-link">Design Conversion</a>
              <a href="https://wpfedev.com/wep-app-front-end/seo-and-mobile-responsive/" className="mobile-link">SEO & Mobile Responsive</a>
              <a href="https://wpfedev.com/wep-app-front-end/speed-optimization/" className="mobile-link">Speed Optimization</a>
              <a href="https://wpfedev.com/wep-app-front-end/theme-setup-customization/" className="mobile-link">Theme Setup</a>
              <a href="https://wpfedev.com/wep-app-front-end/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>Web App Services</a>
            </div>
          </div>

          {/* Item 4 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 4 ? "active" : ""}`}
              onClick={() => toggleAccordion(4)}
            >
              Headless WP <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 4 ? "open" : ""}`}>
              <a href="https://wpfedev.com/headless-wordpress-front-end/design-conversion/" className="mobile-link">Design Conversion</a>
              <a href="https://wpfedev.com/headless-wordpress-front-end/seo-and-mobile-responsive/" className="mobile-link">SEO & Mobile Responsive</a>
              <a href="https://wpfedev.com/headless-wordpress-front-end/speed-front-end-optimization/" className="mobile-link">Speed Optimization</a>
              <a href="https://wpfedev.com/headless-wordpress-front-end/theme-setup-customization/" className="mobile-link">Theme Setup</a>
              <a href="https://wpfedev.com/headless-wordpress-front-end/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>Headless Services</a>
            </div>
          </div>

          {/* Item 5 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 5 ? "active" : ""}`}
              onClick={() => toggleAccordion(5)}
            >
              About <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 5 ? "open" : ""}`}>
              <a href="https://wpfedev.com/about/approach/" className="mobile-link">Approach</a>
              <a href="https://wpfedev.com/about/introduction/" className="mobile-link">Introduction</a>
              <a href="https://wpfedev.com/about/story/" className="mobile-link">Story</a>
              <a href="https://wpfedev.com/contact/" className="mobile-link">Contact</a>
              <a href="https://wpfedev.com/about/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>About</a>
            </div>
          </div>

          <div className="mobile-accordion-item">
            <a href="https://wpfedev.com/portfolio/" className="mobile-accordion-header" style={{ textDecoration: "none" }}>
              Portfolio
            </a>
          </div>

          <div className="mobile-cta-wrapper">
            <a href="https://wpfedev.com/contact/" className="mobile-btn">
              Get a Proposal
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
