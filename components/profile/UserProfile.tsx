import { User } from "@/types/User";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type UserProfileProps = {
  user: User;
};

// Main user profile that shows on landing page

export function UserProfile({ user }: UserProfileProps) {
  return (
    <section className="flex flex-col items-center justify-centerw-full fixed top-0 inset-x-0 bg-background">
      <div className="py-16 px-8 lg:px-16 flex flex-col gap-3 max-w-6xl w-full">
        <Avatar size="lg">
          <AvatarImage src={`/images/${user.avatarUrl}`} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-xl text-white/90 font-bold">{user.name}</p>
          <p className="text-sm text-white/50">@{user.username}</p>
        </div>

        <p className="text-lg text-white/70">{user.bio}</p>

        <div className="flex gap-2">
          {user?.travelStatus && <Badge> {user.travelStatus}</Badge>}
          {user?.location && (
            <Badge variant="secondary"> {user.location}</Badge>
          )}
        </div>
      </div>
      <Separator className="" />
    </section>
  );
}
