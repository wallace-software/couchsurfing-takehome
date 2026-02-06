import { PostDetails } from "@/components/posts/PostDetails";
import { FriendProfile } from "@/components/profile/FriendProfile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getFriend, getPost } from "@/lib/api";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch post and friend data based on page id

  const post = await getPost(id);
  const friend = post ? await getFriend(post.authorId) : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      {!post ? (
        <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-10 py-16 lg:py-32 px-8 lg:px-16 bg-background">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="underline">
              Go back home
            </Link>
          </div>
        </main>
      ) : (
        <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start gap-10 py-16 lg:py-32 px-8 lg:px-16 bg-background">
          <FriendProfile friend={friend} />
          <Separator />
          <PostDetails post={post} />
          <Separator />
          <Button asChild variant="secondary">
            <Link href="/">Back</Link>
          </Button>
        </main>
      )}
    </div>
  );
}
