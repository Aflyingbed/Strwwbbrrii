module.exports = {
    siteUrl: 'https://strwwbbrrii.vercel.app',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 7000,
    robotsTxtOptions: {
      additionalSitemaps: [],
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };