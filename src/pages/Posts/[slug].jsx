import React from 'react'
import client from '../../../lib/contentful/client'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

const renderOptions = {
  renderNode: {
    [BLOCKS.DOCUMENT]: (_, children) => <>{children}</>,
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="text-4xl font-extrabold mb-4 mt-8">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-2xl font-semibold mb-3 mt-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="text-xl font-medium mb-2 mt-3">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <h5 className="text-lg font-medium mb-2 mt-2">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_, children) => (
      <h6 className="text-base font-medium mb-1 mt-1">{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="mb-4 leading-relaxed text-gray-800">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="border-l-4 border-gray-400 italic pl-4 my-6 text-gray-700">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc list-inside mb-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="list-decimal list-inside mb-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <li className="mb-1">{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = node?.data?.target?.fields?.file?.url
      const alt = node?.data?.target?.fields?.title || 'Embedded image'
      if (!url) return null

      return (
        <div className="my-6">
          <img
            src={`https:${url}`}
            alt={alt}
            className="rounded-lg shadow-md mx-auto max-w-full h-auto"
          />
        </div>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <a
        href={`/${node.data.target.fields.slug}`}
        className="text-green-600 underline hover:text-green-800"
      >
        {children}
      </a>
    ),
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      const url = node.data?.target?.fields?.file?.url
      return url ? (
        <a
          href={`https:${url}`}
          className="text-purple-600 underline hover:text-purple-800"
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
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">
        {text}
      </code>
    ),
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
      <h1 className="text-black text-4xl font-bold mb-4">{title}</h1>
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
        <section className="max-w-none">
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

  return {
    props: {
      post: res.items[0],
    },
  }
}
export default Post;