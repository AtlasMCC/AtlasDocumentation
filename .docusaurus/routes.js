import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c91'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '1a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2bd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e70'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '257'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5ab'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '768'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'bd7'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '410'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '245'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '554'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cc5'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '783'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2ac'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ed6'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '0c6'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '3a5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '98f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ff0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '492'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b75'),
            routes: [
              {
                path: '/docs/5min-start/bien-commencer',
                component: ComponentCreator('/docs/5min-start/bien-commencer', '21a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/commencer-en-5-minutes',
                component: ComponentCreator('/docs/category/commencer-en-5-minutes', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/liste-des-commandes',
                component: ComponentCreator('/docs/category/liste-des-commandes', 'cfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/règlement-atlasmc',
                component: ComponentCreator('/docs/category/règlement-atlasmc', 'bdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/commands/Introduction',
                component: ComponentCreator('/docs/commands/Introduction', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/commands/jobs',
                component: ComponentCreator('/docs/commands/jobs', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/commands/slimefun',
                component: ComponentCreator('/docs/commands/slimefun', '3cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/commands/towny',
                component: ComponentCreator('/docs/commands/towny', '9f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reglement-atlasmc/discord',
                component: ComponentCreator('/docs/reglement-atlasmc/discord', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reglement-atlasmc/minecraft',
                component: ComponentCreator('/docs/reglement-atlasmc/minecraft', 'f8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reglement-atlasmc/tos',
                component: ComponentCreator('/docs/reglement-atlasmc/tos', 'ef2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e58'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
