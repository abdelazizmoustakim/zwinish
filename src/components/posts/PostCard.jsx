import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  const { title, subtitle, slug, date, picture } = post.fields

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <li className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link
        href={`/posts/${slug}`}
        className="block"
      >
        {/* Picture */}
        {picture?.fields?.file?.url && (
          <div className="relative h-48 w-full">
            <Image
              src={`https:${picture.fields.file.url}`}
              alt={picture.fields.title || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-stone-800 mb-1">{title}</h2>
          <p className="text-stone-600 mb-2">{subtitle}</p>
          <p className="text-sm text-stone-400">{formattedDate}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostCard;