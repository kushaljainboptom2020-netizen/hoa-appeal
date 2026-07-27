import { TEAM_MEMBERS } from "./profiles";
import type { ResolvedTeamMember, TeamMember, TeamRole } from "./types";

const bySlug = new Map(TEAM_MEMBERS.map((member) => [member.slug, member]));

export function getAllTeamMembers(): TeamMember[] {
  return TEAM_MEMBERS;
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return bySlug.get(slug);
}

export function getTeamMembersByRole(role: TeamRole): TeamMember[] {
  return TEAM_MEMBERS.filter((member) => member.role === role);
}

export function getAuthors(): TeamMember[] {
  return getTeamMembersByRole("author");
}

export function getReviewers(): TeamMember[] {
  return getTeamMembersByRole("reviewer");
}

export function getAllTeamSlugs(): string[] {
  return TEAM_MEMBERS.map((member) => member.slug);
}

export function resolveTeamMember(slug: string): ResolvedTeamMember | undefined {
  const member = bySlug.get(slug);
  if (!member) return undefined;
  return {
    ...member,
    profilePath: `/authors/${member.slug}`,
  };
}

export function assertTeamMember(slug: string): ResolvedTeamMember {
  const member = resolveTeamMember(slug);
  if (!member) {
    throw new Error(`Unknown team member slug: ${slug}`);
  }
  return member;
}

export type { TeamMember, TeamRole, ResolvedTeamMember } from "./types";
