import React from 'react'
import client from '../../../lib/contentful/client'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

const renderOptions = {
  renderNode: {
    [BLOCKS.DOCUMENT]: (_, children) => <>{children}</>,
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-gray-900 leading-tight tracking-tight">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-3xl md:text-4xl font-semibold mb-5 mt-10 text-gray-900 leading-tight tracking-tight">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-gray-900 leading-tight">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="text-xl md:text-2xl font-medium mb-3 mt-6 text-gray-900 leading-tight">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <h5 className="text-lg md:text-xl font-medium mb-3 mt-5 text-gray-900 leading-tight">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_, children) => (
      <h6 className="text-base md:text-lg font-medium mb-2 mt-4 text-gray-900 leading-tight">{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="mb-6 leading-7 text-gray-700 text-lg font-light">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="border-l-4 border-blue-500 italic pl-6 my-8 text-gray-700 text-lg font-light bg-gray-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-12 border-t border-gray-200" />,
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 text-lg font-light">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700 text-lg font-light">{children}</ol>
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
    <article className="max-w-4xl mx-auto px-6 py-12 mt-8">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
          {title}
        </h1>
        <div className="flex items-center text-gray-500 text-lg font-light mb-8">
          <time dateTime={date} className="text-gray-600">
            {formattedDate}
          </time>
        </div>
      </header>

      {imageUrl && (
        <div className="relative w-full h-96 md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
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