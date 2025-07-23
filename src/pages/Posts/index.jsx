import client from '../../../lib/contentful/client'
import PostCard from '@/components/posts/PostCard'

const Posts = ({ posts }) => {
  const [featuredPost, ...restPosts] = posts

  return (
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

export default Posts
