/**
 * Main JavaScript file for City Club Theme
 */

(function ($) {
  "use strict";

  // Document Ready
  $(document).ready(function () {
    // Initialize components
    initMobileMenu();
    initHeroSlider();
    initSearchToggle();
    initActivitySliders();
    initScrollAnimations();
    initMapInteractions();
  });

  /**
   * Initialize Mobile Menu
   */
  function initMobileMenu() {
    const menuToggle = $(".menu-toggle");
    const primaryMenu = $(".primary-menu-container");

    menuToggle.on("click", function () {
      $(this).toggleClass("active");
      primaryMenu.toggleClass("active");
      $("body").toggleClass("menu-open");
    });

    // Close menu on window resize (desktop)
    $(window).on("resize", function () {
      if ($(window).width() > 991) {
        menuToggle.removeClass("active");
        primaryMenu.removeClass("active");
        $("body").removeClass("menu-open");
      }
    });
  }

  /**
   * Initialize Hero Slider
   */
  function initHeroSlider() {
    const heroSlider = $(".hero-slider");
    if (!heroSlider.length) return;

    let currentSlide = 0;
    const slides = $(".hero-slide");
    const indicators = $(".hero-indicator");
    const totalSlides = slides.length;
    let slideInterval;

    // Function to go to a specific slide
    function goToSlide(index) {
      if (index >= totalSlides) index = 0;
      if (index < 0) index = totalSlides - 1;

      slides.removeClass("active");
      indicators.removeClass("active");

      $(slides[index]).addClass("active");
      $(indicators[index]).addClass("active");

      currentSlide = index;
    }

    // Auto play function
    function startAutoPlay() {
      slideInterval = setInterval(function () {
        goToSlide(currentSlide + 1);
      }, 5000);
    }

    // Initialize auto play
    startAutoPlay();

    // Navigation buttons
    $(".hero-nav-prev").on("click", function () {
      clearInterval(slideInterval);
      goToSlide(currentSlide - 1);
      startAutoPlay();
    });

    $(".hero-nav-next").on("click", function () {
      clearInterval(slideInterval);
      goToSlide(currentSlide + 1);
      startAutoPlay();
    });

    // Indicators
    indicators.on("click", function () {
      clearInterval(slideInterval);
      goToSlide($(this).data("slide"));
      startAutoPlay();
    });

    // Pause on hover
    heroSlider
      .on("mouseenter", function () {
        clearInterval(slideInterval);
      })
      .on("mouseleave", function () {
        startAutoPlay();
      });
  }

  /**
   * Initialize Search Toggle
   */
  function initSearchToggle() {
    const searchToggle = $(".search-toggle");
    const searchModal = $(".search-modal");
    const searchClose = $(".search-close");

    searchToggle.on("click", function () {
      searchModal.addClass("active");
      setTimeout(function () {
        searchModal.find("input").focus();
      }, 300);
    });

    searchClose.on("click", function () {
      searchModal.removeClass("active");
    });

    // Close on escape key
    $(document).on("keydown", function (e) {
      if (e.key === "Escape" && searchModal.hasClass("active")) {
        searchModal.removeClass("active");
      }
    });
  }

  /**
   * Initialize Activity Sliders
   */
  function initActivitySliders() {
    $(".activity-section").each(function (index) {
      const section = $(this);
      const nextBtn = section.find(".activity-next");
      const prevBtn = section.find(".activity-prev");
      const indicators = section.find(".activity-indicator");
      let currentSlide = 0;

      // Set up click handlers if there are multiple images
      // In a real implementation, you would have multiple images per activity
      nextBtn.on("click", function () {
        // Simulate slide change
        currentSlide = (currentSlide + 1) % 4;
        updateIndicators();
      });

      prevBtn.on("click", function () {
        // Simulate slide change
        currentSlide = (currentSlide - 1 + 4) % 4;
        updateIndicators();
      });

      indicators.on("click", function () {
        currentSlide = $(this).index();
        updateIndicators();
      });

      function updateIndicators() {
        indicators.removeClass("active");
        indicators.eq(currentSlide).addClass("active");
      }
    });
  }

  /**
   * Initialize Scroll Animations
   */
  function initScrollAnimations() {
    // Check if GSAP is available
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined")
      return;

    // Animate section titles on scroll
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.from(title, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animate section content on scroll
    gsap.utils.toArray(".section-description").forEach((desc) => {
      gsap.from(desc, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: desc,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animate buttons on scroll
    gsap.utils.toArray(".btn").forEach((btn) => {
      gsap.from(btn, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        delay: 0.4,
        scrollTrigger: {
          trigger: btn,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animate images on scroll
    gsap.utils
      .toArray(".activity-image-wrapper, .map-image, .coach-image")
      .forEach((img) => {
        gsap.from(img, {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
  }

  /**
   * Initialize Map Interactions
   */
  function initMapInteractions() {
    // Check if we're on a page with a map
    if (!$("#club-map").length) return;

    // Initialize map if Google Maps API is loaded
    if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
      initGoogleMap();
    }

    // Club filter functionality
    const filterInputs = $(".club-filter input, .club-filter select");
    filterInputs.on("change", filterClubs);

    function filterClubs() {
      const searchTerm = $("#club-search").val().toLowerCase();
      const selectedCity = $("#club-city").val();
      const selectedFeatures = [];

      $(".feature-filter:checked").each(function () {
        selectedFeatures.push($(this).val());
      });

      $(".club-card").each(function () {
        const card = $(this);
        const clubName = card.data("name").toLowerCase();
        const clubCity = card.data("city");
        const clubFeatures = card.data("features").split(",");

        const matchesSearch = clubName.includes(searchTerm);
        const matchesCity = selectedCity === "all" || clubCity === selectedCity;
        const matchesFeatures =
          selectedFeatures.length === 0 ||
          selectedFeatures.every((feature) => clubFeatures.includes(feature));

        if (matchesSearch && matchesCity && matchesFeatures) {
          card.show();
        } else {
          card.hide();
        }
      });

      // Update count
      const visibleCount = $(".club-card:visible").length;
      $(".club-count").text(visibleCount);
    }
  }

  /**
   * Initialize Google Map
   */
  function initGoogleMap() {
    const mapElement = document.getElementById("club-map");
    if (!mapElement) return;

    // Morocco center coordinates
    const mapCenter = { lat: 31.7917, lng: -7.0926 };

    // Create map
    const map = new google.maps.Map(mapElement, {
      center: mapCenter,
      zoom: 6,
      styles: [
        // Custom map styles would go here
      ],
    });

    // Add markers for each club
    const clubs = window.clubLocations || [];
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();

    clubs.forEach((club) => {
      const position = { lat: parseFloat(club.lat), lng: parseFloat(club.lng) };
      bounds.extend(position);

      const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: club.name,
        icon: {
          url: club.isNew
            ? "/wp-content/themes/city-club/assets/images/marker-new.png"
            : "/wp-content/themes/city-club/assets/images/marker.png",
          scaledSize: new google.maps.Size(32, 32),
        },
        animation: google.maps.Animation.DROP,
      });

      // Info window content
      const content = `
                <div class="map-info-window">
                    <h3>${club.name}</h3>
                    <p>${club.address}</p>
                    <a href="${club.url}" class="btn btn-sm btn-primary">View Details</a>
                </div>
            `;

      // Add click listener to marker
      marker.addListener("click", () => {
        infoWindow.setContent(content);
        infoWindow.open(map, marker);

        // Highlight corresponding club card
        $(".club-card").removeClass("active");
        $(`#club-${club.id}`).addClass("active");
      });

      // Store marker reference for later use
      $(`#club-${club.id}`).data("marker", marker);
    });

    // Fit map to bounds if we have clubs
    if (clubs.length > 0) {
      map.fitBounds(bounds);
    }

    // Click handler for club cards to highlight marker
    $(".club-card").on("click", function () {
      const marker = $(this).data("marker");
      if (marker) {
        google.maps.event.trigger(marker, "click");
        map.panTo(marker.getPosition());
        map.setZoom(14);
      }
    });
  }
})(jQuery);
