import { User } from "@/types/User";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type UserProfileProps = {
  user: User;
};

export function UserProfile({ user }: UserProfileProps) {
  return (
    <section className="flex flex-col gap-3 w-full ">
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
        {user?.location && <Badge variant="secondary"> {user.location}</Badge>}
      </div>
    </section>
  );
}
