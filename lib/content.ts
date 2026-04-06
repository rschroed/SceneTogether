import type { GroupShellData } from "./types";

const fridayNight: GroupShellData = {
  slug: "friday-night",
  groupName: "Friday Night Crew",
  strapline: "Three friends, one call: lock a movie before the group chat goes soft.",
  members: [
    { id: "maya", name: "Maya", vibe: "wants something electric" },
    { id: "jules", name: "Jules", vibe: "pushing for a late show" },
    { id: "nico", name: "Nico", vibe: "needs a clean yes-or-no plan" },
  ],
  candidates: [
    {
      id: "neon-rush",
      title: "Neon Rush",
      posterLabel: "NR",
      logline: "A kinetic city thriller with enough style to make the night feel like an event.",
      runtime: "1h 48m",
      showtimeHint: "Best 8:40pm",
      signalTone: "primary",
      memberSignals: [
        { memberName: "Maya", verdict: "In" },
        { memberName: "Jules", verdict: "Maybe" },
        { memberName: "Nico", verdict: "In" },
      ],
    },
    {
      id: "midnight-signal",
      title: "Midnight Signal",
      posterLabel: "MS",
      logline: "A moody sci-fi chamber piece that feels smarter than the average popcorn swing.",
      runtime: "2h 03m",
      showtimeHint: "Best 9:15pm",
      signalTone: "secondary",
      memberSignals: [
        { memberName: "Maya", verdict: "Maybe" },
        { memberName: "Jules", verdict: "In" },
        { memberName: "Nico", verdict: "Maybe" },
      ],
    },
    {
      id: "last-laugh",
      title: "Last Laugh",
      posterLabel: "LL",
      logline: "A sharper comedy option for the group if energy is good but brains are tired.",
      runtime: "1h 36m",
      showtimeHint: "Best 7:20pm",
      signalTone: "warning",
      memberSignals: [
        { memberName: "Maya", verdict: "Out" },
        { memberName: "Jules", verdict: "In" },
        { memberName: "Nico", verdict: "Maybe" },
      ],
    },
    {
      id: "velvet-sky",
      title: "Velvet Sky",
      posterLabel: "VS",
      logline: "A glossy romantic noir that wins when the group wants atmosphere over action.",
      runtime: "1h 55m",
      showtimeHint: "Best 8:05pm",
      signalTone: "secondary",
      memberSignals: [
        { memberName: "Maya", verdict: "In" },
        { memberName: "Jules", verdict: "Out" },
        { memberName: "Nico", verdict: "Maybe" },
      ],
    },
  ],
  activePlan: {
    title: "Neon Rush",
    timeLabel: "Tonight, 8:40pm",
    locationLabel: "Grandview Cinema",
    confirmationSummary: "2 confirmed, 1 still circling the yes.",
    confirmations: [
      { memberName: "Maya", status: "Confirmed" },
      { memberName: "Nico", status: "Confirmed" },
      { memberName: "Jules", status: "Pending" },
    ],
  },
};

const groups: Record<string, GroupShellData> = {
  [fridayNight.slug]: fridayNight,
};

export function getGroupShellData(slug: string) {
  return groups[slug];
}
