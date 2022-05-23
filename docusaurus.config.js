/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Texterify',
  tagline: 'Learn how to use Texterify.',
  url: 'https://docs.texterify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'texterify', // Usually your GitHub org/user name.
  projectName: 'texterify-docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Texterify',
      logo: {
        alt: 'Texterify Logo',
        src: 'img/logo_white.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
        },
        {
          href: 'https://github.com/texterify/texterify',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Texterify',
          items: [
            {
              label: 'Home',
              to: 'https://texterify.com/',
            },
            {
              label: 'Pricing',
              to: 'https://texterify.com/pricing',
            },
            {
              label: 'Code',
              to: 'https://github.com/texterify/texterify',
            },
          ],
        },
        {
          title: 'Integrations',
          items: [
            {
              label: 'CLI',
              href: 'https://github.com/texterify/texterify-cli',
            },
            {
              label: 'Visual Studio Code Extension',
              href: 'https://github.com/texterify/texterify-vsc',
            },
            {
              label: 'Android SDK',
              href: 'https://github.com/texterify/texterify-android',
            },
            {
              label: 'iOS SDK',
              href: 'https://github.com/texterify/texterify-ios',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/texterify/texterify',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Texterify. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/texterify/texterify-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/texterify/texterify-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};
