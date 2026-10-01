import { redirect } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

/** Named profile URLs redirect to the editorial policy. */
export default function RetiredAuthorProfilePage() {
  redirect("/editorial-policy");
}
