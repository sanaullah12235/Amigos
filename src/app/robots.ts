import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/track', '/checkout'],
    },
    sitemap: 'https://amigosfood.com/sitemap.xml',
  }
}
