/**
 * Navigation functionality for City Club Theme
 */

(function () {
  "use strict";

  // Variables
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryMenu = document.querySelector(".primary-menu-container");
  const searchToggle = document.querySelector(".search-toggle");
  const searchModal = document.querySelector(".search-modal");
  const searchClose = document.querySelector(".search-close");
  const searchInput = searchModal
    ? searchModal.querySelector(".search-field")
    : null;
  const subMenuParents = document.querySelectorAll(".menu-item-has-children");

  // Handle header scroll effect
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    if (!menuToggle || !primaryMenu) return;

    menuToggle.addEventListener("click", function () {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      menuToggle.classList.toggle("active");
      primaryMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Handle search functionality
  function handleSearch() {
    if (!searchToggle || !searchModal || !searchClose) return;

    searchToggle.addEventListener("click", function (e) {
      e.preventDefault();
      searchModal.classList.add("active");
      if (searchInput) {
        setTimeout(function () {
          searchInput.focus();
        }, 100);
      }
    });

    searchClose.addEventListener("click", function () {
      searchModal.classList.remove("active");
    });

    // Close search on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && searchModal.classList.contains("active")) {
        searchModal.classList.remove("active");
      }
    });

    // Close search on click outside
    searchModal.addEventListener("click", function (e) {
      if (e.target === searchModal) {
        searchModal.classList.remove("active");
      }
    });
  }

  // Handle submenu accessibility
  function handleSubMenus() {
    if (!subMenuParents.length) return;

    subMenuParents.forEach(function (parent) {
      const link = parent.querySelector("a");
      const submenu = parent.querySelector(".sub-menu");
      const dropdownToggle = document.createElement("button");

      // Create dropdown toggle button
      dropdownToggle.className = "dropdown-toggle";
      dropdownToggle.setAttribute("aria-expanded", "false");
      dropdownToggle.innerHTML =
        '<span class="screen-reader-text">Toggle Submenu</span>';
      link.after(dropdownToggle);

      // Toggle submenu on button click
      dropdownToggle.addEventListener("click", function (e) {
        e.preventDefault();
        const isExpanded =
          dropdownToggle.getAttribute("aria-expanded") === "true";
        dropdownToggle.setAttribute("aria-expanded", !isExpanded);
        submenu.classList.toggle("toggled-on");
        parent.classList.toggle("focus");
      });

      // Handle keyboard navigation
      link.addEventListener("focus", function () {
        parent.classList.add("focus");
      });

      parent.addEventListener(
        "blur",
        function () {
          parent.classList.remove("focus");
        },
        true,
      );
    });
  }

  // Close mobile menu on window resize
  function handleResize() {
    window.addEventListener("resize", function () {
      if (
        window.innerWidth > 991 &&
        primaryMenu &&
        primaryMenu.classList.contains("active")
      ) {
        menuToggle.classList.remove("active");
        primaryMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Initialize navigation functionality
  function init() {
    // Add aria attributes to menu toggle
    if (menuToggle) {
      menuToggle.setAttribute("aria-controls", "primary-menu");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    // Handle scroll effect
    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll(); // Run once on page load

    // Initialize components
    toggleMobileMenu();
    handleSearch();
    handleSubMenus();
    handleResize();
  }

  // Run when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", init);
})();
