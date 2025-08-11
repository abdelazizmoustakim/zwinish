import client from '../../lib/contentful/client'

const EXTERNAL_DATA_URL = 'https://zwinish.com'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Main pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/Posts</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/learn-more</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/Zwinish+</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/Faq</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/login</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.5</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/signup</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.5</priority>
     </url>
     ${posts
       .map((post) => {
         const lastmod = post.fields.date 
           ? new Date(post.fields.date).toISOString()
           : new Date().toISOString()
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/Posts/${post.fields.slug}</loc>
           <lastmod>${lastmod}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
}

export async function getServerSideProps({ res }) {
  // Fetch all posts from Contentful
  const response = await client.getEntries({ 
    content_type: 'zwinish',
    order: '-sys.createdAt'
  })

  const posts = response.items

  // Generate the XML sitemap
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
