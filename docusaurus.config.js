// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AtlasNation',
  tagline: 'Le monde n\'attend que vous !',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://atlasmcc.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AtlasDocumentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'atlasmcc', // Usually your GitHub org/user name.
  projectName: 'AtlasDocumentation', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://discord.gg/ySA7wrcYrj',
        },
        //blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://discord.gg/ySA7wrcYrj',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/atlasmc-social-card.jpg',
      navbar: {
        title: 'AtlasNation',
        logo: {
          alt: 'AtlasNation Logo',
          src: 'img/ArrondiAtlas-removebg-preview.png',
        },
        items: [
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'tutorialSidebar',
          //  position: 'left',
          //  label: 'Documentation',
          //},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://atlasnation.fr/map',
            label: '🗺️ Voir la map',
          },
          {
            href: 'https://discord.gg/yfDJfcBv',
            className: 'header-discord-link',
            'aria-label': 'Discord',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/atlasmc_off/',
            className: 'header-instagram-link',
            'aria-label': 'Instagram',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Bien commencer',
                to: '/5min-start/bien-commencer',
              },
              {
                label: 'Commandes utiles',
                to:'/category/fonctionnalités',
              }
            ],
          },
          {
            title: 'AtlasNation',
            items: [
              //{
              //  label: 'Site internet',
              //  href: 'https://blank.org',
              //},
              {
                label: 'Discord',
                href: 'https://discord.gg/ySA7wrcYrj',
              },
              {
                label: 'Adresse IP',
                href: '/5min-start/rejoindre-le-serveur',
              },
            ],
          },
          //{
          //  title: 'Pages',
          //  items: [
          //    {
          //      label: 'Blog',
          //      to: '/blog',
          //    },
          //  ],
          //},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AtlasMC. Construit avec amour ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
