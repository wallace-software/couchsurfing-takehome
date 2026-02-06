import { Post } from "@/types/Post";

type PostDetailsProps = {
  post: Post | null;
};

export async function PostDetails({ post }: PostDetailsProps) {
  return (
    <div className="group flex flex-col gap-4 overflow-y-auto">
      <p className="text-lg text-white/80 ">{post?.body}</p>

      <div className="flex gap-2">
        {post?.createdAt && (
          <p className="text-xs text-white/40">{post.createdAt}</p>
        )}
        {post?.location && (
          <p className="text-xs text-white/40">{post.location}</p>
        )}
      </div>
    </div>
  );
}
