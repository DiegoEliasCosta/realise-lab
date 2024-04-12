// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import tailwindPlugin from "./plugins/tailwind-config.js";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Exploring the Frontiers of Technology:",
  tagline: "Our Lab's Journey",
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [tailwindPlugin],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      
      ({
        
        
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/logo.png',
         
        },
        items: [
          {
           to: "/team",
            label: "Team",
            position: "left",
          },
          {
            to: "/publications",
             label: "Publications",
             position: "left",
           },
          {
            to: "/contact",
             label: "Contact Us",
             position: "right",
           },
           {
            to: "/projects",
             label: "Projects",
             position: "left",
           },
           {
            to: "/apply",
            label: "Apply",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
      
        links: [
          {
            title: "About Us",
            items: [
              {
                label: "Team",
                to: "/team",
              },
              {
                label: "Partners",
                to: "/partners",
              },
              {
                label: "Publications",
                to: "/publications",
              },
              
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Apply",
                to: "/apply",
              },
             
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "LinkedIn",
                href: "https://github.com/ayonious/console-table-printer",
                
              },
              {
                label: "Facebook",
                href: "https://www.npmjs.com/package/console-table-printer",
              },
            ],
          },
          
          {
            title: "Contact Us",
            items: [
              {
                to: "/contact",
                 label: "Contact Us",
                 position: "right",
               },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} REALISE Lab`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
