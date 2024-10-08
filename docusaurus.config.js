// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rumble Help Center',
  tagline: 'Tips, tutorials, and how-to guides for Rumble Video',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://heavyblotto.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/helpcenter/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'heavyblotto', // Update this to your GitHub username
  projectName: 'helpcenter', // Update this to your repository name
  trailingSlash: false, // Add this line

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/heavyblotto/helpcenter/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/heavyblotto/helpcenter/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
        title: 'Help Center',
        logo: {
          alt: 'Help Center Logo',
          src: 'img/rum.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Get Started',
          },
          // Add the new item here
          {
            to: '/docs/find-and-watch-content/watch-videos',
            label: 'Find & Watch Content',
            position: 'left',
          },
          {
            to: '/docs/rumble-premium/premium-overview',
            label: 'Rumble Premium',
            position: 'left',
          },
          {
            to: '/docs/creators/creators-overview',
            label: 'Creator Help',
            position: 'left',
          },
          // {to: '/blog', label: 'Help Blog', position: 'left'},
//          {
//            href: 'https://github.com/heavyblotto/helpcenter/tree/main/',
//            label: 'GitHub',
//            position: 'right',
//          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'Find & Watch Content',
                to: '/docs/find-and-watch-content/watch-videos',
              },
              {
                label: 'Rumble Premium',
                to: '/docs/rumble-premium/premium-overview',
              },
              {
                label: 'Creator Help',
                to: '/docs/creators/creators-overview',
              },
            ],
          },
          {
            title: 'Rumble Links',
            items: [
              {
                label: 'Rumble',
                href: 'https://rumble.com',
              },
              {
                label: 'Support',
                href: 'https://rumblefaq.groovehq.com/help',
              },
              {
                label: 'Truth Social',
                href: 'https://truthsocial.com/@rumble',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/rumblevideo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Help Blog',
                to: '/blog',
              },
//              {
//                label: 'GitHub',
//                href: 'https://github.com/heavyblotto/helpcenter/tree/main/',
//              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // language: ["en", "zh"],
      }),
    ],
  ],
};

export default config;
