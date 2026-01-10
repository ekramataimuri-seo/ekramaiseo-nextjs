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
      header id="ekrama-header-gif-style">

    <div classname="top-info-bar">

        <div classname="top-info-content">

            <div classname="revenue-driven">

                <span classname="label">REVENUE DRIVEN FOR OUR CLIENTS</span>

                <span classname="value">$10,085,355,239+ <span classname="info-icon">ⓘ</span></span>

            </div>

            <div classname="contact-info">

                <a href="#" classname="client-login">Client Login</a>

                <a href="tel:888-601-5359" classname="phone-number">888-601-5359</a>

            </div>

        </div>

    </div>



    <nav classname="main-nav-bar">

        <div classname="nav-content-wrapper">

            <div classname="logo-brand">

                <div classname="logo-text">Ekramaiseo</div>

                <div classname="tagline">Digital Marketing That Drives Revenue®</div>

            </div>



            <div classname="hamburger" id="hamburger-btn">

                <span></span>

                <span></span>

                <span></span>

            </div>



            <ul classname="nav" id="desktop-nav">

                <li>

<a href="https://ekramaiseo.com/real-estate-seo/">Real Estate SEO <i classname="fa-solid fa-chevron-down nav-arrow"></i></a> 

                    <div classname="mega-menu">

                        <div classname="menu-column-list">

                            <div classname="menu-header"><i classname="fa-solid fa-chart-line"></i><span>Services</span></div>

                            <div classname="link-list">

                                <a href="https://ekramaiseo.com/real-estate-seo/keyword-research">Keyword Research</a>

                                <a href="https://ekramaiseo.com/real-estate-seo/seo-copywriting">Seo Copywriting</a>

                                <a href="https://ekramaiseo.com/real-estate-seo/technical-seo">Technical Seo</a>

                                <a href="https://ekramaiseo.com/real-estate-seo/backlinking">Backlinking</a>

                                <a href="https://ekramaiseo.com/real-estate-seo/local-seo">Local Seo</a>

                            </div>

                        </div>

                        <a href="https://ekramaiseo.com/real-estate-seo/" classname="menu-column-card theme-blue">

                            <div classname="card-content">

                                <i classname="fa-solid fa-rocket section-icon"></i>

                                <h3>Real Estate SEO Strategy</h3>

                                <p>Comprehensive search engine optimization designed specifically for real estate. We drive organic traffic and qualified leads through technical audits, local optimization, and authority building strategies.</p>

                            </div>

                            <span classname="btn-blue">View Services</span>

                        </a>

                        <a href="https://ekramaiseo.com/portfolio" classname="menu-column-card theme-orange">

                            <div classname="card-content">

                                <i classname="fa-solid fa-database section-icon"></i>

                                <h3>SEO Success Stories</h3>

                                <p>Browse our case studies to see how we have helped real estate agencies dominate their markets and achieve measurable ROI through targeted SEO campaigns.</p>

                            </div>

                            <span classname="btn-orange">View Portfolio</span>

                        </a>

                    </div>

                </li>



                <li>

<a href="https://ekramaiseo.com/real-estate-content-marketing/">Content Marketing <i classname="fa-solid fa-chevron-down nav-arrow"></i></a> 

                    <div classname="mega-menu">

                        <div classname="menu-column-list">

                            <div classname="menu-header"><i classname="fa-solid fa-pen-nib"></i><span>Strategy</span></div>

                            <div classname="link-list">

                                <a href="https://ekramaiseo.com/real-estate-content-marketing/content-advertising-strategy">Content Advertising Strategy</a>

                                <a href="https://ekramaiseo.com/real-estate-content-marketing/pillar-pages-and-topic-clustering">Pillar Pages And Topic Clustering</a>

                                <a href="https://ekramaiseo.com/real-estate-content-marketing/guest-blogging-&amp;-authority-building">Guest Blogging &amp; Authority Building</a>

                                <a href="https://ekramaiseo.com/real-estate-content-marketing/content-promotion-&amp;-distribution">Content Promotion &amp; Distribution</a>

                                <a href="https://ekramaiseo.com/real-estate-content-marketing/analytics-reporting-&amp;-content-roi">Analytics Reporting &amp; Content Roi</a>

                            </div>

                        </div>

                        <a href="https://ekramaiseo.com/real-estate-content-marketing/" classname="menu-column-card theme-blue">

                            <div classname="card-content">

                                <i classname="fa-solid fa-paper-plane section-icon"></i>

                                <h3>Strategic Content Marketing</h3>

                                <h4> DRIVE TRAFFIC AND CAPTURE LEADS </h4>



                                <p> Engage your audience with high-value content. From blog posts to email drips, we create strategies that nurture leads and establish your agency as a market authority. </p></div>

                            <span classname="btn-blue">Our Approach</span>

                        </a>

                        <a href="https://ekramaiseo.com/portfolio" classname="menu-column-card theme-orange">

                            <div classname="card-content">

                                <i classname="fa-solid fa-users section-icon"></i>

                                <h3>Content Campaigns</h3>

                                <p>Explore our portfolio of successful content campaigns that have increased engagement, built brand trust, and converted readers into active property buyers.</p>

                            </div>

                            <span classname="btn-orange">View Portfolio</span>

                        </a>

                    </div>

                </li>



                <li>

<a href="https://ekramaiseo.com/real-estate-wordpress-front-end/">WordPress <i classname="fa-solid fa-chevron-down nav-arrow"></i></a> 

                    <div classname="mega-menu">

                        <div classname="menu-column-list">

                            <div classname="menu-header"><i classname="fa-brands fa-wordpress"></i><span>Development</span></div>

                            <div classname="link-list">

                                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/design-conversion-to-wordpress">Design Conversion To Wordpress</a>

                                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/theme-setup-&amp;-customization">Theme Setup &amp; Customization</a>

                                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/seo-and-mobile-responsive">Seo And Mobile Responsive</a>

                                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/speed-&amp;-front-end-optimization">Speed &amp; Front End Optimization</a>

                                <a href="#">Maintenance Plans</a>

                            </div>

                        </div>

                        <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/" classname="menu-column-card theme-blue">

                            <div classname="card-content">

                                <i classname="fa-solid fa-gauge-high section-icon"></i>

                                <h3>Real Estate WordPress Dev</h3>

                                <p>Custom WordPress development tailored for real estate. We build fast, secure, and mobile-responsive websites that showcase properties beautifully and capture leads effectively.</p>

                            </div>

                            <span classname="btn-blue">Check Speed</span>

                        </a>

                        <a href="https://ekramaiseo.com/portfolio" classname="menu-column-card theme-orange">

                            <div classname="card-content">

                                <i classname="fa-solid fa-server section-icon"></i>

                                <h3>Web Development Projects</h3>

                                <p>Check out our development portfolio featuring high-performance real estate websites with custom themes, IDX integration, and seamless user experiences.</p>

                            </div>

                            <span classname="btn-orange">View Portfolio</span>

                        </a>

                    </div>

                </li>



                <li>

<a href="https://ekramaiseo.com/location/">Location <i classname="fa-solid fa-chevron-down nav-arrow"></i></a> 

                    <div classname="mega-menu">

                        <div classname="menu-column-list">

                            <div classname="menu-header"><i classname="fa-solid fa-map-location-dot"></i><span>Regions</span></div>

                            <div classname="link-list">

                                <a href="https://ekramaiseo.com/location/united-states-of-america">United States Of America</a>

                                <a href="https://ekramaiseo.com/location/united-kingdom">United Kingdom</a>

                                <a href="https://ekramaiseo.com/location/united-arab-emirates">United Arab Emirates</a>

                                <a href="#">Canada</a>

                                <a href="#">Australia</a>

                            </div>

                        </div>

                        <a href="https://ekramaiseo.com/location/" classname="menu-column-card theme-blue">

                            <div classname="card-content">

                                <i classname="fa-solid fa-earth-americas section-icon"></i>

                                <h3>Global Real Estate Marketing</h3>

                                <p>Localized digital marketing strategies for global reach. Whether targeting clients in the UK, UAE, or USA, we tailor our approach to regional market nuances.</p>

                            </div>

                            <span classname="btn-blue">Our Offices</span>

                        </a>

                        <a href="https://ekramaiseo.com/portfolio" classname="menu-column-card theme-orange">

                            <div classname="card-content">

                                <i classname="fa-solid fa-handshake section-icon"></i>

                                <h3>International Results</h3>

                                <p>See our international success stories. We have successfully helped clients expand their footprint and drive revenue in diverse competitive markets worldwide.</p>

                            </div>

                            <span classname="btn-orange">View Portfolio</span>

                        </a>

                    </div>

                </li>



                <li>

<a href="https://ekramaiseo.com/about-me/">About Me <i classname="fa-solid fa-chevron-down nav-arrow"></i></a> 

                    <div classname="mega-menu">

                        <div classname="menu-column-list">

                            <div classname="menu-header"><i classname="fa-solid fa-user-tie"></i><span>Profile</span></div>

                            <div classname="link-list">

                                <a href="https://ekramaiseo.com/about-me/my-approach">My Approach</a>

                                <a href="https://ekramaiseo.com/about-me/who-am-i">Who Am I</a>

                                <a href="https://ekramaiseo.com/about-me/my-story">My Story</a>

                                <a href="#">Careers</a>

                                <a href="#">Contact</a>

                            </div>

                        </div>

                        <a href="https://ekramaiseo.com/about-me/" classname="menu-column-card theme-blue">

                            <div classname="card-content">

                                <i classname="fa-solid fa-bullseye section-icon"></i>

                                <h3>Meet Ekrama</h3>

                                <p>Learn about Ekrama’s mission to bring transparency to digital marketing. Discover the core values and strategic approach that drive client success and revenue growth.</p>

                            </div>

                            <span classname="btn-blue">Read Mission</span>

                        </a>

                        <a href="https://ekramaiseo.com/portfolio" classname="menu-column-card theme-orange">

                            <div classname="card-content">

                                <i classname="fa-solid fa-envelope section-icon"></i>

                                <h3>Professional Journey</h3>

                                <p>View my professional portfolio showcasing a history of successful projects, from technical SEO audits to full-scale web development and content strategies.</p>

                            </div>

                            <span classname="btn-orange">View Portfolio</span>

                        </a>

                    </div>

                </li>



                <li><a href="https://ekramaiseo.com/portfolio">My Portfolio</a></li>

            </ul>



            <a href="#" classname="cta-button-nav">Get a Proposal</a>

        </div>

    </nav>



<div classname="mobile-nav-container" id="mobile-nav">

        <div classname="mobile-accordion-item">
            <div classname="mobile-accordion-header">Real Estate SEO <i classname="fa-solid fa-chevron-down"></i></div>
            <div classname="mobile-accordion-content">
                <a href="https://ekramaiseo.com/real-estate-seo/ai-seo/" classname="mobile-link">AI SEO</a>
                <a href="https://ekramaiseo.com/real-estate-seo/seo-copywriting/" classname="mobile-link">SEO Copywriting</a>
                <a href="https://ekramaiseo.com/real-estate-seo/technical-seo/" classname="mobile-link">Technical SEO</a>
                <a href="https://ekramaiseo.com/real-estate-seo/backlinking/" classname="mobile-link">Backlinking</a>
                <a href="https://ekramaiseo.com/real-estate-seo/local-seo/" classname="mobile-link">Local SEO</a>
                <a href="https://ekramaiseo.com/real-estate-seo/" classname="mobile-link" style="color:#207DE9; font-weight:600;">Real Estate SEO</a>
                <a href="https://ekramaiseo.com/portfolio/" classname="mobile-link" style="color:#f97316; font-weight:600;">SEO Success Stories</a>
            </div>
        </div>

        <div classname="mobile-accordion-item">
            <div classname="mobile-accordion-header">Content Marketing <i classname="fa-solid fa-chevron-down"></i></div>
            <div classname="mobile-accordion-content">
                <a href="https://ekramaiseo.com/real-estate-content-marketing/advertising-strategy/" classname="mobile-link">Advertising Strategy</a>
                <a href="https://ekramaiseo.com/real-estate-content-marketing/topic-clustering/" classname="mobile-link">Topic Clustering</a>
                <a href="https://ekramaiseo.com/real-estate-content-marketing/authority-building/" classname="mobile-link">Authority Building</a>
                <a href="https://ekramaiseo.com/real-estate-content-marketing/analytics-reporting-roi/" classname="mobile-link">Analytics Reporting ROI</a>
                <a href="https://ekramaiseo.com/real-estate-content-marketing/" classname="mobile-link" style="color:#207DE9; font-weight:600;">Real Estate Content Marketing</a>
                <a href="https://ekramaiseo.com/portfolio/" classname="mobile-link" style="color:#f97316; font-weight:600;">Content Campaigns</a>
            </div>
        </div>

        <div classname="mobile-accordion-item">
            <div classname="mobile-accordion-header">WordPress <i classname="fa-solid fa-chevron-down"></i></div>
            <div classname="mobile-accordion-content">
                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/design-conversion-to-wordpress/" classname="mobile-link">Design Conversion to WordPress</a>
                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/theme-setup-customization/" classname="mobile-link">Theme Setup Customization</a>
                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/seo-and-mobile-responsive/" classname="mobile-link">SEO and Mobile Responsive</a>
                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/speed-front-end-optimization/" classname="mobile-link">Speed Front End Optimization</a>
                <a href="https://ekramaiseo.com/real-estate-wordpress-front-end/" classname="mobile-link" style="color:#207DE9; font-weight:600;">Real Estate WordPress Front End</a>
                <a href="https://ekramaiseo.com/portfolio/" classname="mobile-link" style="color:#f97316; font-weight:600;">Web Projects</a>
            </div>
        </div>

        <div classname="mobile-accordion-item">
            <div classname="mobile-accordion-header">Location <i classname="fa-solid fa-chevron-down"></i></div>
            <div classname="mobile-accordion-content">
                <a href="https://ekramaiseo.com/united-states/" classname="mobile-link">United States</a>
                <a href="https://ekramaiseo.com/united-kingdom/" classname="mobile-link">United Kingdom</a>
                <a href="https://ekramaiseo.com/united-arab-emirates/" classname="mobile-link">United Arab Emirates</a>
                <a href="https://ekramaiseo.com/canada/" classname="mobile-link">Canada</a>
                <a href="https://ekramaiseo.com/australia/" classname="mobile-link">Australia</a>
                <a href="https://ekramaiseo.com/ireland/" classname="mobile-link">Ireland</a>
                <a href="https://ekramaiseo.com/new-zealand/" classname="mobile-link">New Zealand</a>
                <a href="https://ekramaiseo.com/portfolio/" classname="mobile-link" style="color:#f97316; font-weight:600;">International Results</a>
            </div>
        </div>

        <div classname="mobile-accordion-item">
            <div classname="mobile-accordion-header">About Me <i classname="fa-solid fa-chevron-down"></i></div>
            <div classname="mobile-accordion-content">
                <a href="https://ekramaiseo.com/about/approach/" classname="mobile-link">Approach</a>
                <a href="https://ekramaiseo.com/about/introduction/" classname="mobile-link">Introduction</a>
                <a href="https://ekramaiseo.com/about/story/" classname="mobile-link">Story</a>
                <a href="https://ekramaiseo.com/about/" classname="mobile-link" style="color:#207DE9; font-weight:600;">About</a>
                <a href="https://ekramaiseo.com/portfolio/" classname="mobile-link" style="color:#f97316; font-weight:600;">Professional Journey</a>
            </div>
        </div>

        <div classname="mobile-accordion-item">
            <a href="https://ekramaiseo.com/portfolio/" classname="mobile-accordion-header" style="text-decoration:none;">Portfolio</a>
        </div>

        <div classname="mobile-cta-wrapper">
            <a href="#" classname="mobile-btn">Get a Proposal</a>
        </div>
    </div>

      </header>
    </>
  );
}
