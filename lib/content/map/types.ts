export type StateMapDeadline = {
  label: string;
  duration: string;
};

export type StateMapSummary = {
  code: string;
  name: string;
  slug: string;
  href: string;
  overview: string;
  noticeWindow: string;
  appealDeadlines: StateMapDeadline[];
  commonViolations: string[];
  statuteReference: string;
};
