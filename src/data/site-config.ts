// src/data/site-config.ts
export const SITE_TITLE = 'Dante Astro Theme';
export const SITE_DESCRIPTION = 'A minimal, slick, responsive and content-focused Astro.js theme for blog and portfolio';
export const SITE_AUTHOR = 'Just Good UI';

export const SITE_AVATAR = '/assets/avatar.jpg';
export const SITE_SUBTITLE = 'Single Author Blog & Portfolio';

export const SITE_NAVIGATION = [
  {
    name: 'Blog',
    url: '/posts'
  },
  {
    name: 'Projects',
    url: '/projects'
  }
];

export const SITE_SOCIAL = {
  twitter: 'https://twitter.com/your-twitter',
  github: 'https://github.com/your-github',
  linkedin: 'https://linkedin.com/in/your-linkedin',
  instagram: 'https://instagram.com/your-instagram'
};

export const HERO_SECTION = {
  title: 'Dante Astro Theme',
  text: 'A minimal, slick, responsive and content-focused Astro.js theme for blog and portfolio',
  image: '/assets/hero.jpg',
  buttons: [
    {
      text: 'Get Started',
      url: '/posts',
      variant: 'primary'
    },
    {
      text: 'View Projects',
      url: '/projects',
      variant: 'secondary'
    }
  ]
};

export const NEWSLETTER = {
  title: 'Subscribe to our newsletter',
  text: 'Get the latest posts delivered right to your inbox',
  provider: 'formspree', // Can be mailchimp, convertkit, etc.
  action: 'https://formspree.io/f/your-form-id',
  emailFieldName: 'email',
  hiddenFields: [],
  honeypot: true
};

export const PAGINATION = {
  postsPerPage: 6,
  projectsPerPage: 6
};

export const COPYRIGHT = '© 2025 Dante Astro Theme. All rights reserved.';
