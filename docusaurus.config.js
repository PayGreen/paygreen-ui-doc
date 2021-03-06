module.exports = {
    title: 'PayGreen UI',
    tagline: 'La librairie de composants UI officielle de PayGreen pour React ð¨',
    url: 'https://paygreen.github.io/',
    baseUrl: '/paygreen-ui-doc/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'PayGreen',
    projectName: 'paygreen-ui-doc',
    themeConfig: {
        navbar: {
            title: 'PayGreen UI',
            logo: {
                alt: 'PayGreen Logo',
                src: 'img/e-vert.svg',
            },
            items: [
                {
                    to: 'docs/',
                    label: 'ð La doc',
                },
                {
                    href: 'https://paygreen.github.io/paygreen-ui',
                    label: 'ð¥ï¸ DÃ©mo live',
                },
                {
                    href: 'https://github.com/PayGreen/paygreen-ui',
                    label: 'ð Repo GitHub',
                },
                {
                    href: 'https://github.com/PayGreen/paygreen-ui/releases',
                    label: 'ð©âð» Releases',
                },
            ],
        },
        hideableSidebar: true,
        footer: {
            style: 'dark',
            copyright: `Â© 2018 - ${new Date().getFullYear()} PayGreen <br /> <small>Built with Docusaurus</small>`,
        },
        colorMode: {
            respectPrefersColorScheme: true,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
