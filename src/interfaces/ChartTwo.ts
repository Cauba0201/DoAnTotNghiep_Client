
export interface ChartTwoSeries {
  name: string;
  data: { x: string; y: number }[];
}

export interface ChartTwoState {
  series: ChartTwoSeries[];
  categories: string[];
}
