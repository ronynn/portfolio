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
      header: 'Code Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'ronynn/weather',
          'ronynn/cat-gen',
          'ronynn/potato-peace',
          'ronynn/helper-of-humanity',
          'ronynn/ronynn.github.io',
          'ronynn/Game-Jam-Submissions',
          'ronynn/Front-End-Projects',
          'ronynn/prototypes',
          'ronynn/Graphics-Experiments',
          'ronynn/blog',
        ], // List of repository names to display.example: ['arifszn/my-project1', 'arifszn/my-project2'],
      },
    },
    external: {
      header: 'Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Unstable Vampire',
          description:
            'A typing game where you type run and dodge to escape a vampire chasing you, very tough. Made for ludumdare 49.',
          imageUrl: 'https://ronynn.github.io/assets/images/type.jpg',
          link: 'https://dobryncat.itch.io/unstable-vampire',
        },
        {
          title: 'Kineplifier',
          description:
            'A kinetic sculpture changing poses based on heartbeat measurement of observer through guessing their emotional state.',
          imageUrl: 'https://ronynn.github.io/assets/images/camera.jpg',
          link: '',
        },
        {
          title: 'WebGL Rain Weather App',
          description: 'Experience a rain simulation using WebGL technology.',
          imageUrl: 'https://ronynn.github.io/assets/images/oldcomputer.jpg',
          link: 'https://ronynn.github.io/prototypes/old-weather/demo',
        },
        {
          title: 'CatGPT',
          description: 'Converse with an AI Cat.',
          imageUrl: 'https://ronynn.github.io/assets/images/cat.jpg',
          link: 'https://ronynn.github.io/prototypes/catgpt',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ronynn',
    description:
      'Ronynn has made many projects over the years for science exhibitions, games for game jams, and apps to amuse his friends.',
    imageURL: 'https://ronynn.github.io/assets/images/tablepen.jpg',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
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
    'Vanilla JavaScript',
    'Ruby on Rails',
    'Developing Text-based Games and Simulations',
    'Tech Journalism',
    'Teaching and Presentations',
  ],
  experiences: [
    {
      company: 'Coaching',
      position: 'Teacher',
      from: '',
      to: '2024',
      companyLink: '',
    },
    {
      company: 'Coaching',
      position: 'Teacher',
      from: '',
      to: '2023',
      companyLink: '',
    },
    {
      company: 'Freelance Work',
      position: 'Pencil Sketch Artist',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'AI for Educators',
      body: 'Microsoft Learn',
      year: 'November 2024',
      link: 'https://learn.microsoft.com',
    },
        {
      name: 'Microsoft Azure AI Fundamentals',
      body: 'Microsoft Learn',
      year: 'November 2024',
      link: 'https://learn.microsoft.com',
    },
    {
      name: 'Foundational C#',
      body: 'Freecodecamp',
      year: 'October 2024',
      link: 'https://freecodecamp.com',
    },
    {
      name: 'Teacher Eligibility Test',
      body: '',
      year: '2024',
      link: '',
    },
    {
      name: 'Front End Libraries',
      body: 'Freecodecamp',
      year: 'September 2021',
      link: 'https://freecodecamp.com',
    },
    {
      name: 'Javascript Algorithms and Data Structures',
      body: 'Freecodecamp',
      year: 'August 2021',
      link: 'https://freecodecamp.com',
    },
  ],
  educations: [
    {
      institution: 'University',
      degree: 'Teaching Qualification',
      from: '',
      to: '2024',
    },
    {
      institution: 'University',
      degree: 'Masters (Humanities)',
      from: '',
      to: '',
    },
    {
      institution: 'University',
      degree: 'Masters (Art Preservation)',
      from: '',
      to: 'Unfinished',
    },
    {
      institution: 'University',
      degree: 'Graduation (Humanities)',
      from: '',
      to: '',
    },
    {
      institution: 'Delhi College of Art',
      degree: 'Classical and Digital Art',
      from: '',
      to: '2016',
    },
  ],
  publications: [
    {
      title: 'On emerging trends in teacher education.',
      conferenceName: '',
      journalName: '',
      authors: 'Ronynn',
      link: '',
      description:
        'Primarily focussed on HCI and on survey data on what technological advances might lead to better adoption of technology in classroom.',
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
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

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
  footer: ``, // `Visit <a href="https://ronynn.github.io">ronynn</a> at his <a href="https://github.com/ronynn">Github</a>page.`,

  enablePWA: false,
};

export default CONFIG;
