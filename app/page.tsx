import { UserProfile } from "@/components/profile/UserProfile";
import { getUser } from "@/lib/api";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const user = await getUser();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex min-h-screen w-full max-w-4xl xl:max-w-5xl flex-col items-center justify-start py-32 px-16 bg-background">
        <UserProfile user={user} />
        <Separator className="my-10" />
      </main>
    </div>
  );
}
