import { Friend } from "@/types/Friend";

export const friends: Friend[] = [
  {
    id: "f_mina",
    name: "Mina",
    username: "mina",
    location: "Guadalajara, MX",
    mutualCount: 12,
    isOnline: true,
  },
  {
    id: "f_andre",
    name: "Andre",
    username: "andre",
    location: "Austin, TX",
    mutualCount: 5,
    isOnline: false,
  },
  {
    id: "f_sara",
    name: "Sara",
    username: "sara",
    // avatarUrl: "/avatars/sara.jpg",
    location: "San Diego, CA",
    mutualCount: 8,
    isOnline: true,
  },
  {
    id: "f_kenji",
    name: "Kenji",
    username: "kenji",
    // avatarUrl: "/avatars/kenji.jpg",
    location: "Tokyo, JP",
    mutualCount: 3,
    isOnline: false,
  },
  {
    id: "f_lena",
    name: "Lena",
    username: "lena",
    // avatarUrl: "/avatars/lena.jpg",
    location: "Berlin, DE",
    mutualCount: 9,
    isOnline: true,
  },
];
