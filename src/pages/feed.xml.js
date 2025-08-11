import client from '../../lib/contentful/client'

const EXTERNAL_DATA_URL = 'https://zwinish.com'

function generateRssFeed(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>Zwinish Blog</title>
    <atom:link href="${EXTERNAL_DATA_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <link>${EXTERNAL_DATA_URL}</link>
    <description>A beautiful blogging platform for thoughtful readers who appreciate quality content</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>en-US</language>
    <sy:updatePeriod>daily</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    ${posts
      .map((post) => {
        const { title, subtitle, date, picture, content, slug } = post.fields
        const imageUrl = picture?.fields?.file?.url
          ? `https:${picture.fields.file.url}`
          : null
        const postUrl = `${EXTERNAL_DATA_URL}/Posts/${slug}`
        const pubDate = date ? new Date(date).toUTCString() : new Date().toUTCString()
        
        return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${postUrl}</link>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>Zwinish</dc:creator>
      <category>Blog</category>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${subtitle || `Read this thoughtful article about ${title.toLowerCase()} on Zwinish.`}]]></description>
      ${imageUrl ? `<enclosure url="${imageUrl}" type="image/jpeg" />` : ''}
      <content:encoded><![CDATA[${subtitle || `Read this thoughtful article about ${title.toLowerCase()} on Zwinish, a beautiful blogging platform for mature readers who appreciate quality content.`}]]></content:encoded>
    </item>
  `
      })
      .join('')}
  </channel>
</rss>`
}

function RssFeed() {
  // getServerSideProps will handle the XML generation
}

export async function getServerSideProps({ res }) {
  // Fetch all posts from Contentful
  const response = await client.getEntries({ 
    content_type: 'zwinish',
    order: '-sys.createdAt',
    limit: 20 // Limit to 20 most recent posts
  })

  const posts = response.items

  // Generate the XML RSS feed
  const rssFeed = generateRssFeed(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(rssFeed)
  res.end()

  return {
    props: {},
  }
}

export default RssFeed
