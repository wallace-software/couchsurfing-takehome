import { getPosts } from "@/lib/api";
import { FeedItem } from "@/components/posts/FeedItem";

export async function Feed() {
  const posts = await getPosts();

  return (
    <section className="w-full px-4 pt-80 flex flex-col gap-6 max-w-3xl xl:max-w-4xl overflow-y-auto">
      {posts.map((p) => (
        <FeedItem key={p.id} post={p} />
      ))}
    </section>
  );
}
