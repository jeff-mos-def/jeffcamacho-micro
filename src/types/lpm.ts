export type EpicState =
  | "funnel"
  | "reviewing"
  | "analyzing"
  | "backlog"
  | "implementing"
  | "done";

export type EpicType = "business" | "enabler";

/**
 * SAFe Portfolio Vision horizons.
 * 3 Evaluating, 2 Emerging, 1 Investing & Extracting, 0 Retiring.
 */
export type Horizon = 0 | 1 | 2 | 3;

export interface WsjfScore {
  /** User and Business Value */
  ubv: number;
  /** Time Criticality */
  tc: number;
  /** Risk Reduction and Opportunity Enablement */
  rroe: number;
  /** Job Size */
  jobSize: number;
}

export interface Epic {
  id: string;
  title: string;
  summary?: string;
  state: EpicState;
  /** id of the owning value stream */
  valueStream: string;
  type: EpicType;
  horizon: Horizon;
  wsjf: WsjfScore;
  /** forecast spend in whole dollars */
  cost: number;
  owner?: string;
}

export interface ValueStream {
  id: string;
  name: string;
  /** percent of the lean budget, 0 to 100 */
  allocation: number;
}

export interface PortfolioData {
  name?: string;
  /** total lean budget for the planning horizon, whole dollars */
  totalBudget: number;
  /** epics costing more than this share of the budget need LPM approval */
  approvalThreshold?: number;
  /** target investment mix by horizon, percent, keyed "0" to "3" */
  horizonTargets?: Record<string, number>;
  /** target split between business and enabler work, percent enabler */
  enablerTarget?: number;
  wipLimits?: Partial<Record<EpicState, number>>;
  valueStreams: ValueStream[];
  epics: Epic[];
}

export const STATE_ORDER: EpicState[] = [
  "funnel",
  "reviewing",
  "analyzing",
  "backlog",
  "implementing",
  "done",
];

export const STATE_LABELS: Record<EpicState, string> = {
  funnel: "Funnel",
  reviewing: "Reviewing",
  analyzing: "Analyzing",
  backlog: "Portfolio Backlog",
  implementing: "Implementing",
  done: "Done",
};

export const STATE_HINTS: Record<EpicState, string> = {
  funnel: "Every idea enters here. No commitment, no limit.",
  reviewing: "Refine the hypothesis and size the opportunity.",
  analyzing: "Build the lean business case and a lightweight MVP plan.",
  backlog: "Approved and ranked by WSJF. Pull from the top when capacity frees up.",
  implementing: "Funded and in flight across one or more ARTs.",
  done: "MVP evaluated. Persevere or pivot decision recorded.",
};

export const HORIZON_LABELS: Record<Horizon, string> = {
  3: "Evaluating",
  2: "Emerging",
  1: "Investing & Extracting",
  0: "Retiring",
};

/** Modified Fibonacci, the scale SAFe uses for relative WSJF inputs. */
export const FIB = [1, 2, 3, 5, 8, 13, 20] as const;

/** WSJF = Cost of Delay / Job Size, where CoD = UBV + TC + RR|OE. */
export function costOfDelay(w: WsjfScore): number {
  return w.ubv + w.tc + w.rroe;
}

export function wsjfScore(w: WsjfScore): number {
  if (!w.jobSize) return 0;
  return costOfDelay(w) / w.jobSize;
}

export function rankByWsjf(epics: Epic[]): Epic[] {
  return [...epics].sort((a, b) => wsjfScore(b.wsjf) - wsjfScore(a.wsjf));
}

export function formatMoney(n: number): string {
  if (Math.abs(n) >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (Math.abs(n) >= 1_000) {
    return `$${Math.round(n / 1_000)}K`;
  }
  return `$${n}`;
}

export function formatScore(n: number): string {
  return n.toFixed(2);
}
