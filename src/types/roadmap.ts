/**
 * Single source of truth for the roadmap components.
 *
 * To add, remove or rename a status, edit STATUSES below and nothing else.
 * No component hardcodes a status id, so every view picks the change up:
 * the board gains or loses a column, the timeline colours bars accordingly,
 * and the cards relabel their badges.
 */

export type RoadmapStatus = string;

export interface RoadmapItem {
  /** Unique. Wires timeline bars to their detail panel. */
  id: string;
  /** Must match a StatusConfig id in STATUSES. */
  status: RoadmapStatus;
  /** Swimlane on the timeline. Falls back to DEFAULT_TRACK. */
  track?: string;
  /** `YYYY-MM`. Drives sort order and timeline position. */
  sortKey: string;
  /** `YYYY-MM`. Omit for a point milestone, drawn one quarter wide. */
  end?: string;
  /** Optional override. Left out, a label is derived from the dates. */
  displayDate?: string;
  title: string;
  summary: string;
  /** Monospace bullet list on the card. */
  details?: string[];
  /** Pill tags on the card. */
  tags?: string[];
}

export interface StatusConfig {
  id: RoadmapStatus;
  /** Badge text on cards. */
  label: string;
  /** CSS custom property holding this status' colour. */
  token: string;
  /** Board column heading. */
  columnHeading: string;
  /** Board column subheading. */
  columnNote: string;
  /** Renders bars dashed and hatched, for work that is not committed. */
  provisional?: boolean;
}

export const STATUSES: StatusConfig[] = [
  {
    id: 'completed',
    label: 'Completed',
    token: '--hr-completed',
    columnHeading: 'History',
    columnNote: 'Built and running',
  },
  {
    id: 'in-progress',
    label: 'In progress',
    token: '--hr-progress',
    columnHeading: 'In progress',
    columnNote: 'Underway now',
  },
  {
    id: 'planned',
    label: 'Planned',
    token: '--hr-planned',
    columnHeading: 'Planned',
    columnNote: 'Queued up next',
    provisional: true,
  },
];

export const DEFAULT_TRACK = 'General';

const FALLBACK_STATUS: StatusConfig = {
  id: 'unknown',
  label: 'Unknown',
  token: '--hr-line',
  columnHeading: 'Unknown',
  columnNote: '',
};

/** Never throws on bad data. An unrecognised status renders greyed out. */
export function getStatus(id: RoadmapStatus): StatusConfig {
  return STATUSES.find((status) => status.id === id) ?? FALLBACK_STATUS;
}

/** Inline custom property so no component needs per-status CSS rules. */
export function statusVar(id: RoadmapStatus): string {
  return `--status-color: var(${getStatus(id).token});`;
}

/** Chronological order by `sortKey`. */
export function sortItems(items: RoadmapItem[]): RoadmapItem[] {
  return items.slice().sort((a, b) => a.sortKey.localeCompare(b.sortKey));
}

const MS_PER_DAY = 86400000;

interface ParsedKey {
  date: Date;
  /** True when the key carried a day, e.g. `2026-07-20` rather than `2026-07`. */
  hasDay: boolean;
}

function parseKey(key: string): ParsedKey {
  const parts = key.split('-').map(Number);
  const [year, month, day] = parts;
  return {
    date: new Date(Date.UTC(year, (month || 1) - 1, day || 1)),
    hasDay: parts.length >= 3,
  };
}

const MONTH = (d: Date) =>
  d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });

/**
 * Builds the date label from the dates themselves, so it can never drift
 * out of step with them the way a hand-written string does.
 *
 *   2026-07                    -> Jul 2026
 *   2026-07 .. 2026-08         -> Jul 2026          (exactly one month)
 *   2026-07 .. 2026-10         -> Jul to Sep 2026
 *   2026-08-01 .. 2026-09-01   -> Aug 1 to Sep 1, 2026
 *   2026-12-08 .. 2026-12-22   -> Dec 8 to 22, 2026
 *   2026-07-20 .. 2026-08-12   -> Jul 20 to Aug 12, 2026
 *   2026-12-08 .. 2027-01-15   -> Dec 8, 2026 to Jan 15, 2027
 */
export function formatDateRange(sortKey: string, end?: string): string {
  const from = parseKey(sortKey);
  const startYear = from.date.getUTCFullYear();

  if (!end) {
    return from.hasDay
      ? `${MONTH(from.date)} ${from.date.getUTCDate()}, ${startYear}`
      : `${MONTH(from.date)} ${startYear}`;
  }

  const to = parseKey(end);
  // Day precision in the data means day precision in the label.
  const dayPrecision = from.hasDay || to.hasDay;

  if (!dayPrecision) {
    // `end` is the boundary the bar stops at, so step back a day to name
    // the last month actually covered.
    const last = new Date(to.date.getTime() - MS_PER_DAY);
    const lastYear = last.getUTCFullYear();

    if (startYear === lastYear && from.date.getUTCMonth() === last.getUTCMonth()) {
      return `${MONTH(from.date)} ${startYear}`;
    }
    if (startYear === lastYear) {
      return `${MONTH(from.date)} to ${MONTH(last)} ${startYear}`;
    }
    return `${MONTH(from.date)} ${startYear} to ${MONTH(last)} ${lastYear}`;
  }

  const endYear = to.date.getUTCFullYear();
  const startDay = from.date.getUTCDate();
  const endDay = to.date.getUTCDate();

  if (startYear !== endYear) {
    return `${MONTH(from.date)} ${startDay}, ${startYear} to ${MONTH(to.date)} ${endDay}, ${endYear}`;
  }
  if (from.date.getUTCMonth() === to.date.getUTCMonth()) {
    return `${MONTH(from.date)} ${startDay} to ${endDay}, ${startYear}`;
  }
  return `${MONTH(from.date)} ${startDay} to ${MONTH(to.date)} ${endDay}, ${startYear}`;
}

/** The label shown on cards and bar tooltips. */
export function dateLabel(item: RoadmapItem): string {
  return item.displayDate ?? formatDateRange(item.sortKey, item.end);
}
