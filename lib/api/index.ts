import { friends } from "@/data/Friends";
import { posts } from "@/data/Posts";
import { currentUser } from "@/data/User";
import { delay } from "@/helpers/delay";
import { Friend } from "@/types/Friend";
import { Post } from "@/types/Post";
import { User } from "@/types/User";

const NETWORK_DALAY_MS = 250;

export async function getUser(): Promise<User> {
  await delay(NETWORK_DALAY_MS);
  return structuredClone(currentUser);
}

export async function getFriends(): Promise<Friend[]> {
  await delay(NETWORK_DALAY_MS);
  return structuredClone(friends);
}

export async function getPosts(): Promise<Post[]> {
  await delay(NETWORK_DALAY_MS);
  return structuredClone(posts);
}

export async function getPost(id: string): Promise<Post | null> {
  await delay(NETWORK_DALAY_MS);
  const post = posts.find((p) => p.id === id);
  return post ? structuredClone(post) : null;
}
