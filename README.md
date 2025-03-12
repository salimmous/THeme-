# City Club WordPress Theme

## Overview
A premium WordPress theme for Morocco's premier fitness network featuring a modern design with animations, interactive elements, and custom post types for clubs, activities, and coaches.

## Features
- Responsive animated header with language switcher
- Dynamic hero section with video background
- Interactive Morocco map showing 50+ club locations
- Activity showcase with category filtering
- Coach profiles with certifications
- Testimonial carousel
- Call-to-action sections with forms
- Multilingual support (French/Arabic)

## Installation

### Prerequisites
- WordPress 6.0+
- PHP 8.0+
- MySQL 5.7+

### Theme Installation
1. Download the `city-club-theme.zip` file
2. Go to WordPress Admin > Appearance > Themes > Add New
3. Click "Upload Theme" and select the downloaded zip file
4. Activate the theme

### Required Plugins
- Advanced Custom Fields Pro
- Custom Post Type UI
- Elementor Pro (or Gutenberg blocks)
- WP Google Maps
- WPML or Polylang (for multilingual support)
- WP Rocket (for performance)

## Theme Setup

### 1. Import Demo Content
- Go to Tools > Import > WordPress
- Upload the provided `city-club-content.xml` file

### 2. Configure Theme Options
- Navigate to Appearance > Customize > City Club Options
- Set up:
  - Logo and favicon
  - Color scheme
  - Social media links
  - Contact information
  - Google Maps API key

### 3. Set Up Custom Post Types

#### Clubs
- Add new clubs via the "Clubs" menu
- Each club requires:
  - Featured image
  - Location (address and coordinates)
  - Features/amenities
  - Opening hours
  - Rating

#### Activities
- Add activities via the "Activities" menu
- Include:
  - Featured image
  - Category (Cardio, Strength, Wellness, etc.)
  - Difficulty level
  - Duration
  - Description

#### Coaches
- Add coaches via the "Coaches" menu
- Include:
  - Profile photo
  - Specializations
  - Certifications
  - Experience
  - Location

#### Testimonials
- Add testimonials via the "Testimonials" menu
- Include:
  - Member photo
  - Rating
  - Testimonial text
  - Member since date
  - Associated club

### 4. Configure Multilingual Support
- Install WPML or Polylang
- Set up French as the primary language
- Add Arabic as a secondary language
- Translate all content, menus, and widgets

### 5. Performance Optimization
- Enable caching via WP Rocket
- Configure image optimization
- Enable lazy loading for images
- Minify CSS/JS files

## Customization

### Modifying the Header
- Edit `header.php` to change navigation structure
- Customize header styles in `assets/css/header.css`
- Modify header animations in `assets/js/header.js`

### Customizing the Hero Section
- Edit hero content via Appearance > Customize > Hero Options
- Change video background in theme options
- Modify hero animations in `assets/js/hero.js`

### Club Map Customization
- Update map markers via the Maps settings
- Customize map styles via the Google Maps API settings
- Edit map interaction in `assets/js/map.js`

### Activity Section Customization
- Modify activity categories via the Activities taxonomy
- Change layout in `template-parts/activities.php`
- Edit filtering behavior in `assets/js/activities.js`

### Coach Section Customization
- Edit coach display options in theme settings
- Modify coach card layout in `template-parts/coaches.php`
- Customize coach profile pages in `single-coach.php`

## Advanced Development

### Theme Structure
```
city-club-theme/
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
├── inc/
│   ├── custom-post-types.php
│   ├── theme-options.php
│   ├── widgets.php
│   └── helpers.php
├── template-parts/
│   ├── hero.php
│   ├── clubs.php
│   ├── activities.php
│   ├── coaches.php
│   └── testimonials.php
├── languages/
├── 404.php
├── archive.php
├── footer.php
├── functions.php
├── header.php
├── index.php
├── page.php
├── screenshot.png
├── single.php
├── style.css
└── README.md
```

### Adding Custom Animations
- Use the included GSAP library for animations
- Add custom animations in `assets/js/animations.js`
- Trigger animations on scroll with `ScrollTrigger`

### Creating Custom Blocks
- Use the included block templates in `inc/blocks/`
- Register new blocks in `inc/blocks/register-blocks.php`
- Style blocks in `assets/css/blocks.css`

## Support
- Documentation: [docs.cityclubtheme.com](https://docs.cityclubtheme.com)
- Support: [support@cityclubtheme.com](mailto:support@cityclubtheme.com)
- Updates: Regular theme updates available via WordPress dashboard

## License
This theme is licensed under the GPL v2 or later.

---

© 2023 City Club Theme. All Rights Reserved.
