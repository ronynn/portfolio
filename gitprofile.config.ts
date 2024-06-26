// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ronynn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'ronynn/weather',
          'ronynn/ronynn.github.io',
          'ronynn/potato-peace',
          'ronynn/helper-of-humanity',
          'ronynn/portfolio',
          'ronynn/blog',
          'ronynn/cat-gen',
          'ronynn/Game-Jam-Submissions',
          'ronynn/Front-End-Projects',
          'ronynn/prototypes',
          'ronynn/Graphics-Experiments',
          'ronynn/minimal-neon',
        ], // List of repository names to display.example: ['arifszn/my-project1', 'arifszn/my-project2'],
      },
    },
    external: {
      header: 'My Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Unstable Vampire',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://dobryncat.itch.io/unstable-vampire',
        },
        {
          title: 'Kineplifier',
          description:
            'A kinetic sculpture changing poses based on heartbeat measurement of observer through guessing their emotional state.',
          imageUrl: 'sculpture.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ronynn',
    description:
      'Ronynn has made many projects over the years but is unable to decide the best projects he made.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: 'overlyanalytic',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ronynn.github.io',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Typescript',
    'JavaScript',
    'Digital Art',
    'Developing Text-based Games',

    'Fiddling with new code editors',
  ],
  experiences: [
    {
      company: 'Freelance Work',
      position: 'Pencil Sketch Artist',
      from: 'September 2018',
      to: 'April 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Front End Developer',
      body: 'Freecodecamp',
      year: 'March 2020',
      link: 'https://freecodecamp.com',
    },
  ],
  educations: [
    {
      institution: 'College of Art',
      degree: 'Degree Course',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-MDG8SVY9GB', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      //'light',
      //'dark',
      'cupcake',
      //'bumblebee',
      //'emerald',
      //'corporate',
      //'synthwave',
      'retro',
      //'cyberpunk',
      'valentine',
      //'halloween',
      'garden',
      //'forest',
      //'aqua',
      //'lofi',
      'pastel',
      //'fantasy',
      //'wireframe',
      //'black',
      //'luxury',
      'dracula',
      //'cmyk',
      //'autumn',
      //'business',
      //'acid',
      //'lemonade',
      //'night',
      //'coffee',
      //'winter',
      //'dim',
      'nord',
      //'sunset',
      //'procyon',
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
  footer: `Visit <a href="https://ronynn.github.io">ronynn</a> at his <a href="https://github.com/ronynn">Github</a>page.`,

  enablePWA: false,
};

export default CONFIG;
