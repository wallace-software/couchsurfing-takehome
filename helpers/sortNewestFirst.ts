import { Post } from "@/types/Post";

// Sort data by time created
export function sortNewestFirst(items: Post[]): Post[] {
  return [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
