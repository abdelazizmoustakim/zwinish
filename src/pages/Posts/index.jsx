import client from '../../../lib/contentful/client'
import PostCard from '@/components/posts/PostCard'
import Head from 'next/head'

const Posts = ({ posts }) => {
  const [featuredPost, ...restPosts] = posts

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Blog Posts | Zwinish - Beautiful Blogging Platform for Thoughtful Readers</title>
        <meta name="description" content="Discover thoughtful articles, lifestyle tips, and meaningful stories on Zwinish. A beautiful blogging platform designed for mature readers who appreciate quality content and engaging narratives." />
        <meta name="keywords" content="blog posts, thoughtful articles, lifestyle content, mature readers, quality writing, engaging stories, zwinish blog, meaningful content" />
        <link rel="canonical" href="https://zwinish.com/Posts" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog Posts | Zwinish - Beautiful Blogging Platform" />
        <meta property="og:description" content="Discover thoughtful articles, lifestyle tips, and meaningful stories on Zwinish. A beautiful blogging platform designed for mature readers who appreciate quality content." />
        <meta property="og:image" content="https://zwinish.com/og-image.png" />
        <meta property="og:url" content="https://zwinish.com/Posts" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zwinish" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Posts | Zwinish" />
        <meta name="twitter:description" content="Discover thoughtful articles and meaningful stories on Zwinish." />
        <meta name="twitter:image" content="https://zwinish.com/og-image.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Zwinish Blog",
              "description": "A beautiful blogging platform for thoughtful readers who appreciate quality content",
              "url": "https://zwinish.com/Posts",
              "publisher": {
                "@type": "Organization",
                "name": "Zwinish",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://zwinish.com/logo.png"
                }
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Mature readers who appreciate quality content"
              }
            })
          }}
        />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Head>

      <section className="dark:bg-white dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* Featured post */}
          <PostCard post={featuredPost} featured />

          {/* Grid of other posts */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post) => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          </div>

          {/* Load more button (optional) */}
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-white dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'zwinish' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts;