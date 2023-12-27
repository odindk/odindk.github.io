import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'contact',
    title: 'reviews',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Discord Bot Developer',
    icon: ux,
  },
  {
    title: 'Game Server Setup',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'Game server',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
];

const experiences = [
  {
    title: 'Starting make a Discord Bots',
    company_name: 'Fivem servers',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2016 - Present',
  },
  {
    title: 'Starting make a Discord Bots/servers',
    company_name: 'Fivem servers',
    icon: microverse,
    iconBg: '#333333',
    date: '2017 - Present',
  },
  {
    title: 'Starting make a small websites and setup game server',
    company_name: 'Esport organizations',
    icon: kelhel,
    iconBg: '#333333',
    date: '2020 - Present',
  },
  {
    title: ' Freelance Developer',
    company_name: 'Freelancer',
    icon: dcc,
    iconBg: '#333333',
    date: '2021 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Sky Universe 2.0',
    description: 'Fivem RP Sever. I made their discord bot.(they no longer exist)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    //repo: 'https://github.com/shaqdeff/KomiKult',
   demo: 'https://www.facebook.com/skyuniversedk/',
  },
  {
    id: 'project-2',
    name: 'Sky Universe',
    description:
      'Fivem RP Sever. I made their discord bot.(they no longer exist)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
   // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://www.facebook.com/skyuniversedk/',
  },
  {
    id: 'project-3',
    name: 'Atlantic City',
    description: 'Fivem RP Sever. I made their discord bot and Discord server',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    //repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://discord.gg/K7P98dcKup',
  },
  {
    id: 'project-4',
    name: 'Divinity Gaming',
    description: `A Esport organization, I made their website and Discord server`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
   // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://linktr.ee/divinitygamingc',
  },
  {
    id: 'project-5',
    name: 'MatchMastersDK',
    description:
      'Odds Discord server. I made their Discord server',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    //repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://discord.gg/CuX76CdhRq ',
  },
];

export { services, technologies, experiences, projects };
