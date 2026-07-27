export type DecisionLink = {
  label: string;
  href: string;
  description: string;
};

export type DecisionTreeOption = {
  label: string;
  /** Advance to another question node. */
  nextId?: string;
  /** Jump to state picker, then show this outcome. */
  outcomeId?: string;
};

export type DecisionTreeNode = {
  id: string;
  prompt: string;
  options: DecisionTreeOption[];
};

/** Static outcome before state-specific links are merged in. */
export type DecisionOutcomeDefinition = {
  id: string;
  title: string;
  summary: string;
  /** Guide slugs resolved to /guides/{slug} with catalog titles. */
  guideSlugs: string[];
  /** Static template links (guides and/or worksheet PDFs). */
  templates: DecisionLink[];
  /** Static tool links; state tool is injected by the resolver. */
  tools: DecisionLink[];
};

export type DecisionTreeDefinition = {
  heading: string;
  intro: string;
  startId: string;
  nodes: DecisionTreeNode[];
  outcomes: DecisionOutcomeDefinition[];
};

/** Fully resolved recommendation set for the results panel. */
export type ResolvedDecisionOutcome = {
  id: string;
  title: string;
  summary: string;
  guides: DecisionLink[];
  states: DecisionLink[];
  templates: DecisionLink[];
  tools: DecisionLink[];
};
