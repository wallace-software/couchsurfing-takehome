import { UserProfile } from "@/components/profile/UserProfile";
import { getUser } from "@/lib/api";
import { Suspense } from "react";
import { Loading } from "@/components/posts/Loading";
import { Feed } from "@/components/posts/Feed";

export default async function Home() {
  const user = await getUser();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-start py-16 lg:py-32 px-8 lg:px-16 bg-background">
        <UserProfile user={user} />
        <Suspense fallback={<Loading />}>
          <Feed />
        </Suspense>
      </main>
    </div>
  );
}
