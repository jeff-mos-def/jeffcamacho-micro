import { useEffect, useRef } from "react";
import ChartJS from "chart.js/auto";

// global singletons keyed by chartId
function getStore() {
  if (typeof window === "undefined") return { mounts: new Map(), charts: new Map() };
  if (!window.__chartStore) window.__chartStore = { mounts: new Map(), charts: new Map() };
  return window.__chartStore;
}
function destroyForCanvas(cnv) {
  if (!cnv) return;
  const inst = ChartJS.getChart ? ChartJS.getChart(cnv) : null;
  if (inst) inst.destroy();
}

export default function Chart({
  type = "line",
  labels = [],
  datasets = [],
  options = {},
  plugins = [],
  bgColor = "#ffffff",
  chartId = "chart",
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const store = getStore();
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // enforce one container per chartId
    const prevContainer = store.mounts.get(chartId);
    if (prevContainer && prevContainer !== container) {
      const prevChart = store.charts.get(chartId);
      if (prevChart) prevChart.destroy();
      store.charts.delete(chartId);
      if (prevContainer.isConnected) prevContainer.remove();
    }

    // second-pass DOM sweep for stray duplicates (StrictMode/HMR/SSR)
    const dupes = document.querySelectorAll(`[data-chart-id="${chartId}"]`);
    dupes.forEach((n) => {
      if (n !== container) {
        destroyForCanvas(n.querySelector("canvas"));
        if (n.isConnected) n.remove();
      }
    });

    // clean any chart bound to this canvas
    destroyForCanvas(canvas);

    const bgPlugin = {
      id: "bgfill",
      beforeDraw(chart) {
        const { ctx, canvas } = chart;
        ctx.save();
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      },
    };

    const chart = new ChartJS(canvas, {
      type,
      data: { labels, datasets },
      options: { responsive: true, maintainAspectRatio: false, ...options },
      plugins: [bgPlugin, ...plugins],
    });

    store.mounts.set(chartId, container);
    store.charts.set(chartId, chart);

    // microtask sweep in case a twin appears after this mount
    setTimeout(() => {
      const twins = document.querySelectorAll(`[data-chart-id="${chartId}"]`);
      twins.forEach((n) => {
        if (n !== container) {
          destroyForCanvas(n.querySelector("canvas"));
          if (n.isConnected) n.remove();
        }
      });
    }, 0);

    return () => {
      const s = getStore();
      const inst = s.charts.get(chartId);
      if (inst) inst.destroy();
      s.charts.delete(chartId);
      if (s.mounts.get(chartId) === container) s.mounts.delete(chartId);
      destroyForCanvas(canvas);
    };
  }, [type, labels, datasets, options, plugins, bgColor, chartId]);

  return (
    <div
      ref={containerRef}
      data-chart-id={chartId}
      style={{ width: "100%", maxWidth: "600px", height: "400px" }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
