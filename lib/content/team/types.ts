export type TeamRole = "author" | "reviewer";

export type TeamMember = {
  slug: string;
  name: string;
  role: TeamRole;
  title: string;
  credentials: string[];
  bio: string[];
  expertise: string[];
};

export type ResolvedTeamMember = TeamMember & {
  profilePath: string;
};
