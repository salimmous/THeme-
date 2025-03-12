/**
 * Animations for City Club Theme
 */

(function () {
  "use strict";

  // Check if GSAP is available
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded. Animations will not work.");
    return;
  }

  // Initialize animations when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    initHeaderAnimations();
    initHeroAnimations();
    initSectionAnimations();
    initElementAnimations();
  });

  /**
   * Header animations
   */
  function initHeaderAnimations() {
    // Animate header elements on page load
    const header = document.querySelector(".site-header");
    if (!header) return;

    const logo = header.querySelector(".site-branding");
    const menuItems = header.querySelectorAll("#primary-menu > li");
    const headerActions = header.querySelector(".header-actions");

    // Create a timeline for header animations
    const headerTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate logo
    if (logo) {
      headerTl.fromTo(
        logo,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 },
      );
    }

    // Animate menu items with stagger
    if (menuItems.length) {
      headerTl.fromTo(
        menuItems,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1 },
        "-=0.3",
      );
    }

    // Animate header actions
    if (headerActions) {
      const actionButtons = headerActions.querySelectorAll("button, a");
      headerTl.fromTo(
        actionButtons,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, stagger: 0.1 },
        "-=0.2",
      );
    }
  }

  /**
   * Hero section animations
   */
  function initHeroAnimations() {
    const heroSection = document.querySelector(".hero-banner");
    if (!heroSection) return;

    const heroTitle = heroSection.querySelector(".hero-title");
    const heroSubtitle = heroSection.querySelector(".hero-subtitle");
    const heroCta = heroSection.querySelector(".hero-cta");
    const heroStats = heroSection.querySelector(".hero-stats");
    const heroScroll = heroSection.querySelector(".hero-scroll");

    // Create a timeline for hero animations
    const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Split text animation for title if it has the animated-text class
    if (heroTitle && heroSection.classList.contains("hero-animated-text")) {
      // Split text animation handled by CSS
    } else if (heroTitle) {
      // Regular animation
      heroTl.fromTo(
        heroTitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
      );
    }

    // Animate subtitle
    if (heroSubtitle) {
      heroTl.fromTo(
        heroSubtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3",
      );
    }

    // Animate CTA button
    if (heroCta) {
      heroTl.fromTo(
        heroCta,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3",
      );
    }

    // Animate stats
    if (heroStats) {
      heroTl.fromTo(
        heroStats,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2",
      );
    }

    // Animate scroll indicator
    if (heroScroll) {
      heroTl.fromTo(
        heroScroll,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2",
      );
    }

    // Add parallax effect to hero background if it has the parallax class
    if (heroSection.classList.contains("hero-parallax")) {
      gsap.to(heroSection, {
        backgroundPosition: `50% ${window.innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }

  /**
   * Section animations on scroll
   */
  function initSectionAnimations() {
    // Animate section titles
    gsap.utils.toArray(".section-title, h2").forEach((title) => {
      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Animate section descriptions
    gsap.utils
      .toArray(".section-description, .section-subtitle, p.lead")
      .forEach((desc) => {
        gsap.fromTo(
          desc,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            scrollTrigger: {
              trigger: desc,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });

    // Animate sections with fade-in class
    gsap.utils.toArray(".fade-in-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Animate sections with slide-up class
    gsap.utils.toArray(".slide-up-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }

  /**
   * Element animations on scroll
   */
  function initElementAnimations() {
    // Animate buttons
    gsap.utils
      .toArray(".btn, button:not(.menu-toggle):not(.search-toggle)")
      .forEach((btn) => {
        gsap.fromTo(
          btn,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            scrollTrigger: {
              trigger: btn,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });

    // Animate images
    gsap.utils
      .toArray(
        "img:not(.site-logo), .wp-block-image, .activity-image-wrapper, .map-image, .coach-image",
      )
      .forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });

    // Animate cards with stagger
    const cardContainers = document.querySelectorAll(
      ".card-container, .grid, .wp-block-columns",
    );
    cardContainers.forEach((container) => {
      const cards = container.querySelectorAll(
        ".card, .wp-block-column, .feature-item, .coach-card, .testimonial-card, .club-card",
      );
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    // Animate list items with stagger
    const lists = document.querySelectorAll(
      "ul.animated-list, ol.animated-list, .benefit-list, .feature-list",
    );
    lists.forEach((list) => {
      const items = list.querySelectorAll("li");
      if (items.length) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            scrollTrigger: {
              trigger: list,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    // Animate counters
    const counters = document.querySelectorAll(".counter-value");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      if (!isNaN(target)) {
        let start = 0;
        const duration = 2;

        ScrollTrigger.create({
          trigger: counter,
          start: "top 80%",
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: duration,
              snap: { innerHTML: 1 },
              ease: "power2.out",
            });
          },
          once: true,
        });
      }
    });
  }
})();
