// export interface ChartFiveState {
//   series: {
//     name: string;
//     data: number[][];
//   }[];
// }

export interface LatencyData {
  avg_latency: number;
  local_isp: string;
}

export interface ChartSeries {
  name: string;
  data: number[][];
}
