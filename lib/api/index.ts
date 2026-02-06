import { friends } from "@/data/Friends";
import { posts } from "@/data/Posts";
import { currentUser } from "@/data/User";
import { delay } from "@/helpers/delay";
import { Friend } from "@/types/Friend";
import { Post } from "@/types/Post";
import { User } from "@/types/User";

const NETWORK_DELAY_MS = 250;

export async function getUser(): Promise<User> {
  await delay(NETWORK_DELAY_MS);
  return structuredClone(currentUser);
}

export async function getPosts(): Promise<Post[]> {
  await delay(NETWORK_DELAY_MS * 6);
  return structuredClone(posts);
}

export async function getPost(id: string): Promise<Post | null> {
  await delay(NETWORK_DELAY_MS);

  const post = posts.find((p) => p.id === id);
  return post ? structuredClone(post) : null;
}

export async function getFriend(id: string): Promise<Friend | null> {
  await delay(NETWORK_DELAY_MS);

  const friend = friends.find((p) => p.id === id);
  return friend ? structuredClone(friend) : null;
}
