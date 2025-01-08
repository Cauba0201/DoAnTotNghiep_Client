
export interface ChartFourState {
  series: Array<{
    name: string;
    data: number[];
  }>;
}

export interface LatencyData {
  local_isp: string;
  avg_latency: string;
}

// Config/ChartFour.ts
export const ChartFourOptions = {
  colors: ['#FF5733', '#33FF57', '#3357FF'], // Example colors
  chart: { toolbar: { show: false } },
  stroke: { curve: 'smooth' },
  xaxis: { type: 'datetime' },
};
