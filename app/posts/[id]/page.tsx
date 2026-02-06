import { FriendProfile } from "@/components/profile/FriendProfile";
import { Button } from "@/components/ui/button";
import { getFriend, getPost } from "@/lib/api";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);
  const friend = post ? await getFriend(post.authorId) : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-start justify-start gap-10 py-32 px-16 bg-background">
        <FriendProfile friend={friend} />
        <Button asChild variant="secondary">
          <Link href="/">Back</Link>
        </Button>
      </main>
    </div>
  );
}
