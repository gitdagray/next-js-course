/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://your-domain.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}