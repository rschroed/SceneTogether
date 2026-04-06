export type GroupMember = {
  id: string;
  name: string;
  vibe: string;
};

export type MemberSignal = {
  memberName: string;
  verdict: "In" | "Maybe" | "Out";
};

export type MovieCandidate = {
  id: string;
  title: string;
  posterLabel: string;
  logline: string;
  runtime: string;
  showtimeHint: string;
  signalTone: "primary" | "secondary" | "warning";
  memberSignals: MemberSignal[];
};

export type ActivePlan = {
  title: string;
  timeLabel: string;
  locationLabel: string;
  confirmationSummary: string;
  confirmations: Array<{
    memberName: string;
    status: "Confirmed" | "Pending";
  }>;
};

export type GroupShellData = {
  slug: string;
  groupName: string;
  strapline: string;
  members: GroupMember[];
  candidates: MovieCandidate[];
  activePlan: ActivePlan;
};
