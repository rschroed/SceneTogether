import { notFound } from "next/navigation";

import { GroupBoard } from "@/components/group/GroupBoard";
import { getGroupShellData } from "@/lib/content";

export function generateStaticParams() {
  return [{ slug: "friday-night" }];
}

export default async function GroupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = getGroupShellData(slug);

  if (!group) {
    notFound();
  }

  return <GroupBoard group={group} />;
}
