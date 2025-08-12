import React from 'react'
import client from '../../../lib/contentful/client'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

const renderOptions = {
  renderNode: {
    [BLOCKS.DOCUMENT]: (_, children) => <>{children}</>,
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-gray-900 leading-tight tracking-tight">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-2xl md:text-3xl font-semibold mb-5 mt-10 text-gray-900 leading-tight tracking-tight">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8 text-gray-900 leading-tight">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="text-lg md:text-xl font-medium mb-3 mt-6 text-gray-900 leading-tight">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <h5 className="text-base md:text-lg font-medium mb-3 mt-5 text-gray-900 leading-tight">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_, children) => (
      <h6 className="text-sm md:text-base font-medium mb-2 mt-4 text-gray-900 leading-tight">{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="mb-6 leading-7 text-gray-800 text-lg font-normal">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="border-l-4 border-blue-500 italic pl-6 my-8 text-gray-700 text-lg font-light bg-gray-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-12 border-t border-gray-200" />,
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-800 text-lg font-normal">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-800 text-lg font-normal">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <li className="mb-2 leading-7">{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = node?.data?.target?.fields?.file?.url
      const alt = node?.data?.target?.fields?.title || 'Embedded image'
      if (!url) return null

      return (
        <div className="my-8">
          <img
            src={`https:${url}`}
            alt={alt}
            className="rounded-xl shadow-lg mx-auto max-w-full h-auto"
          />
        </div>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline decoration-blue-300 hover:text-blue-800 hover:decoration-blue-600 transition-colors duration-200"
      >
        {children}
      </a>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <a
        href={`/${node.data.target.fields.slug}`}
        className="text-green-600 underline decoration-green-300 hover:text-green-800 hover:decoration-green-600 transition-colors duration-200"
      >
        {children}
      </a>
    ),
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      const url = node.data?.target?.fields?.file?.url
      return url ? (
        <a
          href={`https:${url}`}
          className="text-purple-600 underline decoration-purple-300 hover:text-purple-800 hover:decoration-purple-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        children
      )
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="font-semibold text-gray-900">{text}</strong>
    ),
    [MARKS.ITALIC]: (text) => (
      <em className="italic text-gray-700">{text}</em>
    ),
    [MARKS.UNDERLINE]: (text) => <u className="underline decoration-gray-400">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-100 px-2 py-1 rounded-md text-sm font-mono text-gray-800 border border-gray-200">
        {text}
      </code>
    ),
  },
}

const Post = ({ post, relatedPosts }) => {
  if (!post) {
    return <p className="text-center mt-10 text-gray-700">Post not found</p>
  }

  const { title, subtitle, date, picture, content, slug } = post.fields

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'No date'

  const imageUrl = picture?.fields?.file?.url
    ? `https:${picture.fields.file.url}`
    : null

  // SEO meta tags
  const seoTitle = `${title} | Zwinish - Beautiful Blogging Platform`
  const seoDescription = subtitle || `Read this thoughtful article about ${title.toLowerCase()} on Zwinish, a beautiful blogging platform for mature readers who appreciate quality content.`
  const canonicalUrl = `https://zwinish.com/Posts/${slug}`
  const ogImage = imageUrl || 'https://zwinish.com/og-image.png'

  // Structured data for article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": seoDescription,
    "image": ogImage,
    "author": {
      "@type": "Organization",
      "name": "Zwinish"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zwinish",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zwinish.com/logo.png"
      }
    },
    "datePublished": date,
    "dateModified": date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Mature readers who appreciate quality content"
    }
  }

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${title}, blog, thoughtful content, mature readers, quality articles, zwinish, blogging platform`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Zwinish" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@zwinish" />
        
        {/* Article specific meta */}
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="Zwinish" />
        <meta property="article:section" content="Blog" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zwinish" />
        <meta name="language" content="English" />
      </Head>

      <div className=''>
        <article className="max-w-4xl mx-auto px-6 py-12 mt-8">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
              {title}
            </h1>
            <div className="flex items-center text-gray-500 text-lg font-light mb-8">
              <time dateTime={date} className="text-gray-600">
                {formattedDate}
              </time>
            </div>
          </header>

          {imageUrl && (
            <div className="relative w-full h-64 md:h-80 mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={picture?.fields?.title || title}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          )}

          {subtitle && (
            <p className="mb-10 text-xl md:text-2xl text-gray-600 font-light leading-relaxed italic">
              {subtitle}
            </p>
          )}

          {content ? (
            <section className="prose prose-lg max-w-none">
              {documentToReactComponents(content, renderOptions)}
            </section>
          ) : (
            <p className="text-gray-500 text-lg">No content available.</p>
          )}
        </article>

        {/* Related Posts Section */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => {
                const { title, subtitle, date, picture, slug } = relatedPost.fields
                const relatedImageUrl = picture?.fields?.file?.url
                  ? `https:${picture.fields.file.url}`
                  : null
                const relatedFormattedDate = date
                  ? new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : 'No date'

                return (
                  <Link 
                    key={relatedPost.sys.id} 
                    href={`/Posts/${slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {relatedImageUrl ? (
                        <Image
                          src={relatedImageUrl}
                          alt={picture?.fields?.title || title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <span className="text-4xl text-gray-400">📄</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <time className="text-sm text-gray-500 font-medium">
                        {relatedFormattedDate}
                      </time>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {title}
                      </h3>
                      {subtitle && (
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {subtitle}
                        </p>
                      )}
                      <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                        Read more
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
        
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'zwinish' })

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: false, // ❗️ No ISR, fully static
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const res = await client.getEntries({
    content_type: 'zwinish',
    'fields.slug': slug,
  })

  if (!res.items.length) {
    return {
      notFound: true,
    }
  }

  const currentPost = res.items[0]

  // Fetch related posts (excluding the current post)
  const relatedPostsRes = await client.getEntries({
    content_type: 'zwinish',
    'fields.slug[ne]': slug, // Exclude current post
    limit: 6, // Limit to 6 related posts
    order: '-sys.createdAt', // Most recent first
  })

  return {
    props: {
      post: currentPost,
      relatedPosts: relatedPostsRes.items || [],
    },
  }
}
export default Post;