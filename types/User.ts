export type HostingPreference = "host" | "coffee" | "showAround" | "meetup";

export type TravelStatus = "available" | "traveling" | "offline";

export type User = {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  hostingPreferences?: HostingPreference[];
  travelStatus?: TravelStatus;
  memberSince: string;
};
