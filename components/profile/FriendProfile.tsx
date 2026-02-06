import { Friend } from "@/types/Friend";
import { Badge } from "@/components/ui/badge";

type FriendProfileProps = {
  friend: Friend | null;
};

export function FriendProfile({ friend }: FriendProfileProps) {
  return (
    <section className="flex flex-col gap-3 w-full ">
      <div>
        <p className="text-xl text-white/90 font-bold">{friend?.name ?? ""}</p>
        <p className="text-sm text-white/50">@{friend?.username ?? ""}</p>
      </div>

      <div className="flex gap-2">
        {friend?.location && (
          <Badge variant="secondary"> {friend.location}</Badge>
        )}
      </div>
    </section>
  );
}
