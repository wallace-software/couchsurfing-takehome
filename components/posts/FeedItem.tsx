import { Post } from "@/types/Post";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type FeedItemProps = {
  post: Post;
};
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
      <p className="text-lg text-white/60 transition-colors transition-300 group-hover:text-white">
        {post.body}
      </p>
      <Separator />
    </Link>
  );
}
