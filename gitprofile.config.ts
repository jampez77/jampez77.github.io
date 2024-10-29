// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jampez77', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'jampez77/jampez77.github.io', 
            'jampez77/default',
            'jampez77/brands',
            'jampez77/core',
            'jampez77/jampez',
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Claude',
          description:
            'Claude is a dedicated app for patients with intermittent claudication. It has been designed to support improvement in your pain-free walking distance giving you greater freedom and independence. It can also be used to accurately record your progress to share with your healthcare specialist.',
          imageUrl:
            'https://github.com/jampez77/jampez77.github.io/blob/main/public/assets/claude.png',
          link: 'https://play.google.com/store/apps/details?id=uk.co.jampez.claude',
        }
      ],
    },
  },
  seo: {
    title: 'Jamie Nandhra-Pezone',
    description: 'I\'m currently trying to integrate everything I can think of into Home Assistant',
    imageURL: 'https://avatars.githubusercontent.com/u/1823647',
  },
  social: {
    linkedin: 'jampez77',
    twitter: 'jampez77',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'JamiePezone', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '1636266/jampez77', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.jampez.uk',
    phone: '',
    email: 'me@jampez.uk',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'IoT',
    'Kotlin',
    'Java',
    'Python',
    'PHP',
    'HTML',
    'CSS',
    'MySQL',
    'MVVM',
    'Javascript',
  ],
  experiences: [
    {
      company: 'We3World',
      position: 'Senior Android Developer',
      from: 'Jan 2024',
      to: 'Present',
      companyLink: 'https://artlume.io',
    },
    {
      company: 'Hedgehog Lab',
      position: 'Android Developer',
      from: 'Feb 2020',
      to: 'Jan 2024',
      companyLink: 'https://hedgehoglab.com',
    },
    {
      company: 'On-trac',
      position: 'Android Developer',
      from: 'Nov 2014',
      to: 'Feb 2020',
      companyLink: 'https://on-trac.co.uk',
    },
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'University of Sunderland',
      degree: 'BSc Computing',
      from: '2009',
      to: '2012',
    }
  ],
  publications: [
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
