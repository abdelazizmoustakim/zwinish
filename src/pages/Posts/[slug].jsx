import React from 'react'
import client from '../../../lib/contentful/client'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const renderOptions = {
  renderNode: {
    'paragraph': (node) => <p className="mb-4 leading-relaxed">{node.content[0].value}</p>,
    // You can customize more nodes here if you want (headings, links, etc.)
  },
}

const Post = ({ post }) => {
  if (!post) {
    return <p className="text-center mt-10 text-red-500">Post not found</p>
  }

  const { title, subtitle, date, picture, content } = post.fields

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

  return (
    <article className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-6">{formattedDate}</p>

      {imageUrl && (
        <div className="relative w-full h-96 mb-8 rounded overflow-hidden">
          <Image
            src={imageUrl}
            alt={picture?.fields?.title || title}
            fill
            className="object-cover rounded"
            priority
          />
        </div>
      )}

      {subtitle && <p className="mb-6 text-lg italic">{subtitle}</p>}

      {content ? (
        <section className="prose max-w-none">
          {documentToReactComponents(content, renderOptions)}
        </section>
      ) : (
        <p>No content available.</p>
      )}
    </article>
  )
}

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'zwinish' })

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: 'blocking', // can be 'true' or 'blocking', 'blocking' is best for SEO & UX
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

  return {
    props: {
      post: res.items[0],
    },
    revalidate: 60, // ISR: revalidate page every 60 seconds
  }
}

export default Post
