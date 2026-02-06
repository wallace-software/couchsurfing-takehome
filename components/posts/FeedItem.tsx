import { Post } from "@/types/Post";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type FeedItemProps = {
  post: Post;
};

// Clickable feed items that open a detailed view of post and poster

export async function FeedItem({ post }: FeedItemProps) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="group flex flex-col gap-4 overflow-y-auto"
    >
      <div className="flex flex-col gap-0">
        <p className="text-lg text-white/80 font-bold transition-colors transition-300 group-hover:text-white">
          {post.authorName}
        </p>
        <p className="text-sm text-white/40 transition-colors transition-300 group-hover:text-blue-500">
          @{post.authorUsername}
        </p>
      </div>
      <p className="text-lg text-white/80 transition-colors transition-300 group-hover:text-white">
        {post.body}
      </p>

      <div className="flex gap-2">
        {post.createdAt && (
          <p className="text-xs text-white/40  transition-colors transition-300 group-hover:text-white/60">
            {post.createdAt}
          </p>
        )}
        {post?.location && (
          <p className="text-xs text-white/40  transition-colors transition-300 group-hover:text-white/60">
            {post.location}
          </p>
        )}
      </div>
      <Separator />
    </Link>
  );
}
