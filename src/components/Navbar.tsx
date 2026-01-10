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
              <div className="logo-text">Ekramaiseo</div>
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
              <li>
                <a href="https://ekramaiseo.com/real-estate-seo/">
                  Real Estate SEO <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-chart-line"></i>
                      <span>Services</span>
                    </div>
                    <div className="link-list">
                      <a href="https://ekramaiseo.com/real-estate-seo/keyword-research">Keyword Research</a>
                      <a href="https://ekramaiseo.com/real-estate-seo/seo-copywriting">Seo Copywriting</a>
                      <a href="https://ekramaiseo.com/real-estate-seo/technical-seo">Technical Seo</a>
                      <a href="https://ekramaiseo.com/real-estate-seo/backlinking">Backlinking</a>
                      <a href="https://ekramaiseo.com/real-estate-seo/local-seo">Local Seo</a>
                    </div>
                  </div>

                  <a href="https://ekramaiseo.com/real-estate-seo/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-rocket section-icon"></i>
                      <h3>Real Estate SEO Strategy</h3>
                      <p>
                        Comprehensive search engine optimization designed specifically for real estate. We drive organic traffic and qualified leads through technical audits, local optimization, and authority building strategies.
                      </p>
                    </div>
                    <span className="btn-blue">View Services</span>
                  </a>

                  <a href="https://ekramaiseo.com/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-database section-icon"></i>
                      <h3>SEO Success Stories</h3>
                      <p>
                        Browse our case studies to see how we have helped real estate agencies dominate their markets and achieve measurable ROI through targeted SEO campaigns.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://ekramaiseo.com/real-estate-content-marketing/">
                  Content Marketing <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-pen-nib"></i>
                      <span>Strategy</span>
                    </div>
                    <div className="link-list">
                      <a href="https://ekramaiseo.com/real-estate-content-marketing/content-advertising-strategy">Content Advertising Strategy</a>
                      <a href="https://ekramaiseo.com/real-estate-content-marketing/pillar-pages-and-topic-clustering">Pillar Pages And Topic Clustering</a>
                      <a href="https://ekramaiseo.com/real-estate-content-marketing/guest-blogging-&-authority-building">Guest Blogging &amp; Authority Building</a>
                      <a href="https://ekramaiseo.com/real-estate-content-marketing/content-promotion-&-distribution">Content Promotion &amp; Distribution</a>
                      <a href="https://ekramaiseo.com/real-estate-content-marketing/analytics-reporting-&-content-roi">Analytics Reporting &amp; Content Roi</a>
                    </div>
                  </div>

                  <a href="https://ekramaiseo.com/real-estate-content-marketing/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-paper-plane section-icon"></i>
                      <h3>Strategic Content Marketing</h3>
                      <h4> DRIVE TRAFFIC AND CAPTURE LEADS </h4>
                      <p>
                        Engage your audience with high-value content. From blog posts to email drips, we create strategies that nurture leads and establish your agency as a market authority.
                      </p>
                    </div>
                    <span className="btn-blue">Our Approach</span>
                  </a>

                  <a href="https://ekramaiseo.com/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-users section-icon"></i>
                      <h3>Content Campaigns</h3>
                      <p>
                        Explore our portfolio of successful content campaigns that have increased engagement, built brand trust, and converted readers into active property buyers.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/">
                  WordPress <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-brands fa-wordpress"></i>
                      <span>Development</span>
                    </div>
                    <div className="link-list">
                      <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/design-conversion-to-wordpress">Design Conversion To Wordpress</a>
                      <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/theme-setup-&-customization">Theme Setup &amp; Customization</a>
                      <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/seo-and-mobile-responsive">Seo And Mobile Responsive</a>
                      <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/speed-&-front-end-optimization">Speed &amp; Front End Optimization</a>
                      <a href="#">Maintenance Plans</a>
                    </div>
                  </div>

                  <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-gauge-high section-icon"></i>
                      <h3>Real Estate WordPress Dev</h3>
                      <p>
                        Custom WordPress development tailored for real estate. We build fast, secure, and mobile-responsive websites that showcase properties beautifully and capture leads effectively.
                      </p>
                    </div>
                    <span className="btn-blue">Check Speed</span>
                  </a>

                  <a href="https://ekramaiseo.com/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-server section-icon"></i>
                      <h3>Web Development Projects</h3>
                      <p>
                        Check out our development portfolio featuring high-performance real estate websites with custom themes, IDX integration, and seamless user experiences.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://ekramaiseo.com/location/">
                  Location <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-map-location-dot"></i>
                      <span>Regions</span>
                    </div>
                    <div className="link-list">
                      <a href="https://ekramaiseo.com/location/united-states-of-america">United States Of America</a>
                      <a href="https://ekramaiseo.com/location/united-kingdom">United Kingdom</a>
                      <a href="https://ekramaiseo.com/location/united-arab-emirates">United Arab Emirates</a>
                      <a href="#">Canada</a>
                      <a href="#">Australia</a>
                    </div>
                  </div>

                  <a href="https://ekramaiseo.com/location/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-earth-americas section-icon"></i>
                      <h3>Global Real Estate Marketing</h3>
                      <p>
                        Localized digital marketing strategies for global reach. Whether targeting clients in the UK, UAE, or USA, we tailor our approach to regional market nuances.
                      </p>
                    </div>
                    <span className="btn-blue">Our Offices</span>
                  </a>

                  <a href="https://ekramaiseo.com/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-handshake section-icon"></i>
                      <h3>International Results</h3>
                      <p>
                        See our international success stories. We have successfully helped clients expand their footprint and drive revenue in diverse competitive markets worldwide.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://ekramaiseo.com/about-me/">
                  About Me <i className="fa-solid fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header">
                      <i className="fa-solid fa-user-tie"></i>
                      <span>Profile</span>
                    </div>
                    <div className="link-list">
                      <a href="https://ekramaiseo.com/about-me/my-approach">My Approach</a>
                      <a href="https://ekramaiseo.com/about-me/who-am-i">Who Am I</a>
                      <a href="https://ekramaiseo.com/about-me/my-story">My Story</a>
                      <a href="#">Careers</a>
                      <a href="#">Contact</a>
                    </div>
                  </div>

                  <a href="https://ekramaiseo.com/about-me/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-bullseye section-icon"></i>
                      <h3>Meet Ekrama</h3>
                      <p>
                        Learn about Ekrama’s mission to bring transparency to digital marketing. Discover the core values and strategic approach that drive client success and revenue growth.
                      </p>
                    </div>
                    <span className="btn-blue">Read Mission</span>
                  </a>

                  <a href="https://ekramaiseo.com/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-envelope section-icon"></i>
                      <h3>Professional Journey</h3>
                      <p>
                        View my professional portfolio showcasing a history of successful projects, from technical SEO audits to full-scale web development and content strategies.
                      </p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </a>
                </div>
              </li>

              <li>
                <a href="https://ekramaiseo.com/portfolio">My Portfolio</a>
              </li>
            </ul>

            <a href="#" className="cta-button-nav">
              Get a Proposal
            </a>
          </div>
        </nav>

        {/* --- MOBILE NAV CONTAINER (REPAIRED) --- */}
        <div className={`mobile-nav-container ${isMobileMenuOpen ? "active" : ""}`} id="mobile-nav">
          
          {/* Item 1 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 1 ? "active" : ""}`}
              onClick={() => toggleAccordion(1)}
            >
              Real Estate SEO <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 1 ? "open" : ""}`}>
              <a href="https://ekramaiseo.com/real-estate-seo/ai-seo/" className="mobile-link">AI SEO</a>
              <a href="https://ekramaiseo.com/real-estate-seo/seo-copywriting/" className="mobile-link">SEO Copywriting</a>
              <a href="https://ekramaiseo.com/real-estate-seo/technical-seo/" className="mobile-link">Technical SEO</a>
              <a href="https://ekramaiseo.com/real-estate-seo/backlinking/" className="mobile-link">Backlinking</a>
              <a href="https://ekramaiseo.com/real-estate-seo/local-seo/" className="mobile-link">Local SEO</a>
              <a href="https://ekramaiseo.com/real-estate-seo/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>Real Estate SEO</a>
              <a href="https://ekramaiseo.com/portfolio/" className="mobile-link" style={{ color: "#f97316", fontWeight: 600 }}>SEO Success Stories</a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 2 ? "active" : ""}`}
              onClick={() => toggleAccordion(2)}
            >
              Content Marketing <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 2 ? "open" : ""}`}>
              <a href="https://ekramaiseo.com/real-estate-content-marketing/advertising-strategy/" className="mobile-link">Advertising Strategy</a>
              <a href="https://ekramaiseo.com/real-estate-content-marketing/topic-clustering/" className="mobile-link">Topic Clustering</a>
              <a href="https://ekramaiseo.com/real-estate-content-marketing/authority-building/" className="mobile-link">Authority Building</a>
              <a href="https://ekramaiseo.com/real-estate-content-marketing/analytics-reporting-roi/" className="mobile-link">Analytics Reporting ROI</a>
              <a href="https://ekramaiseo.com/real-estate-content-marketing/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>Real Estate Content Marketing</a>
              <a href="https://ekramaiseo.com/portfolio/" className="mobile-link" style={{ color: "#f97316", fontWeight: 600 }}>Content Campaigns</a>
            </div>
          </div>

          {/* Item 3 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 3 ? "active" : ""}`}
              onClick={() => toggleAccordion(3)}
            >
              WordPress <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 3 ? "open" : ""}`}>
              <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/design-conversion-to-wordpress/" className="mobile-link">Design Conversion to WordPress</a>
              <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/theme-setup-customization/" className="mobile-link">Theme Setup Customization</a>
              <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/seo-and-mobile-responsive/" className="mobile-link">SEO and Mobile Responsive</a>
              <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/speed-front-end-optimization/" className="mobile-link">Speed Front End Optimization</a>
              <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>Real Estate WordPress Front End</a>
              <a href="https://ekramaiseo.com/portfolio/" className="mobile-link" style={{ color: "#f97316", fontWeight: 600 }}>Web Projects</a>
            </div>
          </div>

          {/* Item 4 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 4 ? "active" : ""}`}
              onClick={() => toggleAccordion(4)}
            >
              Location <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 4 ? "open" : ""}`}>
              <a href="https://ekramaiseo.com/united-states/" className="mobile-link">United States</a>
              <a href="https://ekramaiseo.com/united-kingdom/" className="mobile-link">United Kingdom</a>
              <a href="https://ekramaiseo.com/united-arab-emirates/" className="mobile-link">United Arab Emirates</a>
              <a href="https://ekramaiseo.com/canada/" className="mobile-link">Canada</a>
              <a href="https://ekramaiseo.com/australia/" className="mobile-link">Australia</a>
              <a href="https://ekramaiseo.com/ireland/" className="mobile-link">Ireland</a>
              <a href="https://ekramaiseo.com/new-zealand/" className="mobile-link">New Zealand</a>
              <a href="https://ekramaiseo.com/portfolio/" className="mobile-link" style={{ color: "#f97316", fontWeight: 600 }}>International Results</a>
            </div>
          </div>

          {/* Item 5 */}
          <div className="mobile-accordion-item">
            <div
              className={`mobile-accordion-header ${openAccordion === 5 ? "active" : ""}`}
              onClick={() => toggleAccordion(5)}
            >
              About Me <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={`mobile-accordion-content ${openAccordion === 5 ? "open" : ""}`}>
              <a href="https://ekramaiseo.com/about/approach/" className="mobile-link">Approach</a>
              <a href="https://ekramaiseo.com/about/introduction/" className="mobile-link">Introduction</a>
              <a href="https://ekramaiseo.com/about/story/" className="mobile-link">Story</a>
              <a href="https://ekramaiseo.com/about/" className="mobile-link" style={{ color: "#207DE9", fontWeight: 600 }}>About</a>
              <a href="https://ekramaiseo.com/portfolio/" className="mobile-link" style={{ color: "#f97316", fontWeight: 600 }}>Professional Journey</a>
            </div>
          </div>

          <div className="mobile-accordion-item">
            <a href="https://ekramaiseo.com/portfolio/" className="mobile-accordion-header" style={{ textDecoration: "none" }}>
              Portfolio
            </a>
          </div>

          <div className="mobile-cta-wrapper">
            <a href="#" className="mobile-btn">
              Get a Proposal
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
