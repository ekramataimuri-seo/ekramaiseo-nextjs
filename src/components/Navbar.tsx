'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css'; // Import your styles

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Sticky Header Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else if (window.scrollY < 50) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Mobile Accordion Logic
  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  // 3. Toggle Body Scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header id="ekrama-header-gif-style" className={isScrolled ? 'header-scrolled' : ''}>
        
        {/* Top Info Bar - Hides on Scroll */}
        <div className={`top-info-bar ${isScrolled ? 'hidden' : ''}`} style={{ display: isScrolled ? 'none' : 'block' }}>
          <div className="top-info-content">
            <div className="revenue-driven">
              <span className="label">REVENUE DRIVEN FOR OUR CLIENTS</span>
              <span className="value">$10,085,355,239+ <span className="info-icon">ⓘ</span></span>
            </div>
            <div className="contact-info">
              <Link href="/client-login" className="client-login">Client Login</Link>
              <a href="tel:888-601-5359" className="phone-number">888-601-5359</a>
            </div>
          </div>
        </div>

        <nav className="main-nav-bar">
          <div className="nav-content-wrapper">
            <div className="logo-brand">
              <Link href="/" className="logo-text">Ekramaiseo</Link>
              <div className="tagline">Digital Marketing That Drives Revenue®</div>
            </div>

            {/* Hamburger Button */}
            <div 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
              id="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* DESKTOP NAV */}
            <ul className="nav" id="desktop-nav">
              
              {/* 1. Real Estate SEO */}
              <li>
                <Link href="/real-estate-seo/">Real Estate SEO <i className="fa-solid fa-chevron-down nav-arrow"></i></Link>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header"><i className="fa-solid fa-chart-line"></i><span>Services</span></div>
                    <div className="link-list">
                      <Link href="/real-estate-seo/keyword-research">Keyword Research</Link>
                      <Link href="/real-estate-seo/seo-copywriting">SEO Copywriting</Link>
                      <Link href="/real-estate-seo/technical-seo">Technical SEO</Link>
                      <Link href="/real-estate-seo/backlinking">Backlinking</Link>
                      <Link href="/real-estate-seo/local-seo">Local SEO</Link>
                    </div>
                  </div>
                  <Link href="/real-estate-seo/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-rocket section-icon"></i>
                      <h3>Real Estate SEO Strategy</h3>
                      <p>Comprehensive search engine optimization designed specifically for real estate.</p>
                    </div>
                    <span className="btn-blue">View Services</span>
                  </Link>
                  <Link href="/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-database section-icon"></i>
                      <h3>SEO Success Stories</h3>
                      <p>Browse our case studies to see how we have helped real estate agencies dominate their markets.</p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </Link>
                </div>
              </li>

              {/* 2. Content Marketing */}
              <li>
                <Link href="/real-estate-content-marketing/">Content Marketing <i className="fa-solid fa-chevron-down nav-arrow"></i></Link>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header"><i className="fa-solid fa-pen-nib"></i><span>Strategy</span></div>
                    <div className="link-list">
                      <Link href="/real-estate-content-marketing/advertising-strategy/">Content Advertising Strategy</Link>
                      <Link href="/real-estate-content-marketing/topic-clustering/">Pillar Pages & Topic Clustering</Link>
                      <Link href="/real-estate-content-marketing/authority-building/">Guest Blogging & Authority</Link>
                      <Link href="/real-estate-content-marketing/content-promotion-distribution">Content Promotion</Link>
                      <Link href="/real-estate-content-marketing/analytics-reporting-roi/">Analytics & ROI</Link>
                    </div>
                  </div>
                  <Link href="/real-estate-content-marketing/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-paper-plane section-icon"></i>
                      <h3>Strategic Content</h3>
                      <h4>DRIVE TRAFFIC AND CAPTURE LEADS</h4>
                      <p>Engage your audience with high-value content.</p>
                    </div>
                    <span className="btn-blue">Our Approach</span>
                  </Link>
                  <Link href="/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-users section-icon"></i>
                      <h3>Content Campaigns</h3>
                      <p>Explore our portfolio of successful content campaigns.</p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </Link>
                </div>
              </li>

              {/* 3. WordPress */}
              <li>
                <Link href="/real-estate-wordpress-front-end/">WordPress <i className="fa-solid fa-chevron-down nav-arrow"></i></Link>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header"><i className="fa-brands fa-wordpress"></i><span>Development</span></div>
                    <div className="link-list">
                      <Link href="/real-estate-wordpress-front-end/design-conversion-to-wordpress/">Design Conversion</Link>
                      <Link href="/real-estate-wordpress-front-end/theme-setup-customization/">Theme Setup</Link>
                      <Link href="/real-estate-wordpress-front-end/seo-and-mobile-responsive/">SEO & Mobile</Link>
                      <Link href="/real-estate-wordpress-front-end/speed-front-end-optimization/">Speed Optimization</Link>
                    </div>
                  </div>
                  <Link href="/real-estate-wordpress-front-end/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-gauge-high section-icon"></i>
                      <h3>Real Estate WP</h3>
                      <p>Custom WordPress development tailored for real estate.</p>
                    </div>
                    <span className="btn-blue">Check Speed</span>
                  </Link>
                  <Link href="/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-server section-icon"></i>
                      <h3>Web Projects</h3>
                      <p>Check out our development portfolio.</p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </Link>
                </div>
              </li>

              {/* 4. Location */}
              <li>
                <Link href="/location/">Location <i className="fa-solid fa-chevron-down nav-arrow"></i></Link>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header"><i className="fa-solid fa-map-location-dot"></i><span>Regions</span></div>
                    <div className="link-list">
                      <Link href="/united-states/">United States</Link>
                      <Link href="/united-kingdom/">United Kingdom</Link>
                      <Link href="/united-arab-emirates/">United Arab Emirates</Link>
                      <Link href="/canada/">Canada</Link>
                      <Link href="/australia/">Australia</Link>
                    </div>
                  </div>
                  <Link href="/location/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-earth-americas section-icon"></i>
                      <h3>Global Marketing</h3>
                      <p>Localized digital marketing strategies for global reach.</p>
                    </div>
                    <span className="btn-blue">Our Offices</span>
                  </Link>
                  <Link href="/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-handshake section-icon"></i>
                      <h3>International Results</h3>
                      <p>See our international success stories.</p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </Link>
                </div>
              </li>

              {/* 5. About Me */}
              <li>
                <Link href="/about/">About Me <i className="fa-solid fa-chevron-down nav-arrow"></i></Link>
                <div className="mega-menu">
                  <div className="menu-column-list">
                    <div className="menu-header"><i className="fa-solid fa-user-tie"></i><span>Profile</span></div>
                    <div className="link-list">
                      <Link href="/about/approach/">My Approach</Link>
                      <Link href="/about/introduction/">Who Am I</Link>
                      <Link href="/about/story/">My Story</Link>
                    </div>
                  </div>
                  <Link href="/about/" className="menu-column-card theme-blue">
                    <div className="card-content">
                      <i className="fa-solid fa-bullseye section-icon"></i>
                      <h3>Meet Ekrama</h3>
                      <p>Learn about Ekrama’s mission to bring transparency to digital marketing.</p>
                    </div>
                    <span className="btn-blue">Read Mission</span>
                  </Link>
                  <Link href="/portfolio" className="menu-column-card theme-orange">
                    <div className="card-content">
                      <i className="fa-solid fa-envelope section-icon"></i>
                      <h3>Professional Journey</h3>
                      <p>View my professional portfolio.</p>
                    </div>
                    <span className="btn-orange">View Portfolio</span>
                  </Link>
                </div>
              </li>

              <li><Link href="/portfolio">My Portfolio</Link></li>
            </ul>

            <Link href="/contact" className="cta-button-nav">Get a Proposal</Link>
          </div>
        </nav>

        {/* =======================
            MOBILE NAV MENU 
            ======================= */}
        <div className={`mobile-nav-container ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-nav">
          
          {/* Mobile Accordion 1: SEO */}
          <div className="mobile-accordion-item">
            <div 
              className={`mobile-accordion-header ${activeAccordion === 'seo' ? 'active' : ''}`}
              onClick={() => toggleAccordion('seo')}
            >
              Real Estate SEO <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="mobile-accordion-content" style={{ maxHeight: activeAccordion === 'seo' ? '500px' : '0' }}>
              <Link href="/real-estate-seo/ai-seo/" className="mobile-link">AI SEO</Link>
              <Link href="/real-estate-seo/seo-copywriting/" className="mobile-link">SEO Copywriting</Link>
              <Link href="/real-estate-seo/technical-seo/" className="mobile-link">Technical SEO</Link>
              <Link href="/real-estate-seo/backlinking/" className="mobile-link">Backlinking</Link>
              <Link href="/real-estate-seo/local-seo/" className="mobile-link">Local SEO</Link>
              <Link href="/real-estate-seo/" className="mobile-link" style={{color:'#207DE9', fontWeight:600}}>Real Estate SEO</Link>
              <Link href="/portfolio/" className="mobile-link" style={{color:'#f97316', fontWeight:600}}>SEO Success Stories</Link>
            </div>
          </div>

          {/* Mobile Accordion 2: Content */}
          <div className="mobile-accordion-item">
            <div 
              className={`mobile-accordion-header ${activeAccordion === 'content' ? 'active' : ''}`}
              onClick={() => toggleAccordion('content')}
            >
              Content Marketing <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="mobile-accordion-content" style={{ maxHeight: activeAccordion === 'content' ? '500px' : '0' }}>
              <Link href="/real-estate-content-marketing/advertising-strategy/" className="mobile-link">Advertising Strategy</Link>
              <Link href="/real-estate-content-marketing/topic-clustering/" className="mobile-link">Topic Clustering</Link>
              <Link href="/real-estate-content-marketing/authority-building/" className="mobile-link">Authority Building</Link>
              <Link href="/real-estate-content-marketing/analytics-reporting-roi/" className="mobile-link">Analytics & ROI</Link>
              <Link href="/real-estate-content-marketing/" className="mobile-link" style={{color:'#207DE9', fontWeight:600}}>Strategic Content</Link>
              <Link href="/portfolio/" className="mobile-link" style={{color:'#f97316', fontWeight:600}}>Content Campaigns</Link>
            </div>
          </div>

          {/* Mobile Accordion 3: WordPress */}
          <div className="mobile-accordion-item">
            <div 
              className={`mobile-accordion-header ${activeAccordion === 'wp' ? 'active' : ''}`}
              onClick={() => toggleAccordion('wp')}
            >
              WordPress <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="mobile-accordion-content" style={{ maxHeight: activeAccordion === 'wp' ? '500px' : '0' }}>
              <Link href="/real-estate-wordpress-front-end/design-conversion-to-wordpress/" className="mobile-link">Design Conversion</Link>
              <Link href="/real-estate-wordpress-front-end/theme-setup-customization/" className="mobile-link">Theme Setup</Link>
              <Link href="/real-estate-wordpress-front-end/seo-and-mobile-responsive/" className="mobile-link">SEO & Mobile</Link>
              <Link href="/real-estate-wordpress-front-end/speed-front-end-optimization/" className="mobile-link">Speed Optimization</Link>
              <Link href="/real-estate-wordpress-front-end/" className="mobile-link" style={{color:'#207DE9', fontWeight:600}}>Real Estate WP</Link>
              <Link href="/portfolio/" className="mobile-link" style={{color:'#f97316', fontWeight:600}}>Web Projects</Link>
            </div>
          </div>

          {/* Mobile Accordion 4: Location */}
          <div className="mobile-accordion-item">
            <div 
              className={`mobile-accordion-header ${activeAccordion === 'loc' ? 'active' : ''}`}
              onClick={() => toggleAccordion('loc')}
            >
              Location <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="mobile-accordion-content" style={{ maxHeight: activeAccordion === 'loc' ? '500px' : '0' }}>
              <Link href="/united-states/" className="mobile-link">United States</Link>
              <Link href="/united-kingdom/" className="mobile-link">United Kingdom</Link>
              <Link href="/united-arab-emirates/" className="mobile-link">United Arab Emirates</Link>
              <Link href="/canada/" className="mobile-link">Canada</Link>
              <Link href="/australia/" className="mobile-link">Australia</Link>
              <Link href="/ireland/" className="mobile-link">Ireland</Link>
              <Link href="/new-zealand/" className="mobile-link">New Zealand</Link>
            </div>
          </div>

          {/* Mobile Accordion 5: About */}
          <div className="mobile-accordion-item">
            <div 
              className={`mobile-accordion-header ${activeAccordion === 'about' ? 'active' : ''}`}
              onClick={() => toggleAccordion('about')}
            >
              About Me <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="mobile-accordion-content" style={{ maxHeight: activeAccordion === 'about' ? '500px' : '0' }}>
              <Link href="/about/approach/" className="mobile-link">Approach</Link>
              <Link href="/about/introduction/" className="mobile-link">Introduction</Link>
              <Link href="/about/story/" className="mobile-link">Story</Link>
              <Link href="/about/" className="mobile-link" style={{color:'#207DE9', fontWeight:600}}>About</Link>
              <Link href="/portfolio/" className="mobile-link" style={{color:'#f97316', fontWeight:600}}>Professional Journey</Link>
            </div>
          </div>

          <div className="mobile-accordion-item">
            <Link href="/portfolio/" className="mobile-accordion-header" style={{textDecoration:'none'}}>Portfolio</Link>
          </div>

          <div className="mobile-cta-wrapper">
            <Link href="/contact" className="mobile-btn">Get a Proposal</Link>
          </div>
        </div>
      </header>
    </>
  );
}
