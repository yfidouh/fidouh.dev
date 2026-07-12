import { getCollection } from 'astro:content';

/** All non-draft posts, newest first. Drafts are visible in dev only. */
export async function getPublishedPosts() {
  const posts = await getCollection(
    'blog',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}
