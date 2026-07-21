import { useMemo } from "react";

function getYearProgress() {
  const now = new Date();
  const year = now.getFullYear();
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const totalDays = isLeap ? 366 : 365;
  const msPerDay = 86400000;
  const dayOfYear =
    Math.floor(
      (Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
        Date.UTC(year, 0, 1)) /
        msPerDay,
    ) + 1;
  return { year, totalDays, dayOfYear };
}

function formatDay(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const ROWS = 7;

export default function YearLedger() {
  const { year, totalDays, dayOfYear } = useMemo(getYearProgress, []);
  const percent = Math.round((dayOfYear / totalDays) * 100);

  const cells = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, 0, i);
      let status: "past" | "today" | "future" = "future";
      if (i < dayOfYear) status = "past";
      else if (i === dayOfYear) status = "today";
      arr.push({ index: i, date, status });
    }
    return arr;
  }, [year, totalDays, dayOfYear]);

  // column index (0-based) that each month's 1st day lands in,
  // used to position the ruler ticks/labels above the grid
  const monthTicks = useMemo(() => {
    const ticks: { label: string; col: number }[] = [];
    let dayCounter = 1;
    for (let m = 0; m < 12; m++) {
      const col = Math.floor((dayCounter - 1) / ROWS);
      ticks.push({ label: MONTH_LABELS[m], col });
      const daysInMonth = new Date(year, m + 1, 0).getDate();
      dayCounter += daysInMonth;
    }
    return ticks;
  }, [year]);

  const totalCols = Math.ceil(totalDays / ROWS);

  return (
    <div className="year-ledger" data-reveal>
         <div className="section-title" id="ledger-heading">
          Year Ledger
          <span className="hint">
            <span className="hint-hover">— a visual representation of the year</span>
            <span className="hint-touch">— a visual representation of the year</span>
            <span className="hint-kbd">
              — focus a project and press Enter to open it
            </span>
          </span>
        </div>
         <div className="section-sub">
          where I've been, and what I build with Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat, incidunt odio quaerat beatae
          voluptate, quidem soluta max
        </div>
   

      <div className="year-ruler-wrap">
        <div
          className="year-ruler"
          style={{ gridTemplateColumns: `repeat(${totalCols}, var(--cell))` }}
        >
          {monthTicks.map((tick) => (
            <span
              key={tick.label}
              className="year-tick"
              style={{ gridColumnStart: tick.col + 1 }}
            >
              {tick.label}
            </span>
          ))}
        </div>

        <div
          className="year-grid"
          role="img"
          aria-label={`${percent}% of ${year} elapsed — day ${dayOfYear} of ${totalDays}`}
          style={{
            gridTemplateColumns: `repeat(${totalCols}, var(--cell))`,
            gridTemplateRows: `repeat(${ROWS}, var(--cell))`,
          }}
        >
          {cells.map((cell) => (
            <span
              key={cell.index}
              className={`year-cell is-${cell.status}`}
              title={
                cell.status === "today"
                  ? `Today — ${formatDay(cell.date)}`
                  : formatDay(cell.date)
              }
            />
          ))}
        </div>
      </div>

      <div className="year-ledger-legend">
        <span className="legend-item">
          <span className="legend-swatch is-past" /> passed
        </span>
        <span className="legend-item">
          <span className="legend-swatch is-today" /> today
        </span>
        <span className="legend-item">
          <span className="legend-swatch is-future" /> ahead
        </span>
      </div>
    </div>
  );
}