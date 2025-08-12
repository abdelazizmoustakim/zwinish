import client from '../../../lib/contentful/client';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await client.getEntries({
      content_type: 'zwinish',
      order: '-sys.createdAt',
      limit: 100 // Get up to 100 posts for search
    });

    const posts = response.items.map(item => ({
      sys: {
        id: item.sys.id
      },
      fields: {
        title: item.fields.title,
        subtitle: item.fields.subtitle,
        slug: item.fields.slug,
        date: item.fields.date
      }
    }));

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
}
