import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

const MIN_VISIBLE_MS = 420;
const PROGRESS_STEPS = [
  { at: 0, value: 18 },
  { at: 120, value: 42 },
  { at: 260, value: 68 },
  { at: 420, value: 86 },
];

export default function PageLoader() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const timers = useRef<number[]>([]);
  const mountedAt = useRef(Date.now());
  const firstRender = useRef(true);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const runLoader = () => {
    clearTimers();
    mountedAt.current = Date.now();
    setVisible(true);
    setProgress(6);

    PROGRESS_STEPS.forEach(({ at, value }) => {
      timers.current.push(window.setTimeout(() => setProgress(value), at));
    });

    timers.current.push(
      window.setTimeout(() => {
        const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - mountedAt.current));
        timers.current.push(
          window.setTimeout(() => {
            setProgress(100);
            timers.current.push(window.setTimeout(() => setVisible(false), 260));
          }, wait)
        );
      }, 480)
    );
  };

  // initial mount / hard reload
  useEffect(() => {
    runLoader();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // subsequent route changes
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setIsFirstLoad(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    runLoader();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

if (!visible) return null;

return (
  <div
    className={`route-loader${isFirstLoad ? " route-loader--boot" : ""}`}
    aria-hidden="true"
  >
    <div
      className="route-loader-bar"
      style={{
        transform: `scaleX(${progress / 100})`,
        opacity: progress >= 100 ? 0 : 1,
      }}
    />
    {isFirstLoad && (
      <div className="route-loader-boot">
        <div className="route-loader-mark">A</div>
      </div>
    )}
  </div>
);
}