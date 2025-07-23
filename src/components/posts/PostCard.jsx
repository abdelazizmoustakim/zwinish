import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post, featured = false }) => {
  const { title, subtitle, slug, date, picture } = post.fields

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const imageUrl = picture?.fields?.file?.url
    ? `https:${picture.fields.file.url}`
    : 'https://source.unsplash.com/random/480x360?fallback'

  if (featured) {
    return (
      <Link
        href={`/Posts/${slug}`}
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-white"
      >
        <div className="lg:col-span-7">
          <div className="relative w-full h-64 sm:h-96">
            <Image
              src={imageUrl}
              alt={picture?.fields?.title || title}
              fill
              className="object-cover rounded dark:bg-gray-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">{formattedDate}</span>
          <p>{subtitle}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/Posts/${slug}`}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-white"
    >
      <div>
        <div className="relative w-full h-44">
          <Image
            src={imageUrl}
            alt={picture?.fields?.title || title}
            fill
            className="object-cover rounded dark:bg-gray-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">{formattedDate}</span>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  )
}
export default PostCard;