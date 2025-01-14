
export interface ChartTwoSeries {
  name: string;
  data: number[];
}

export interface ChartTwoState {
  series: ChartTwoSeries[];
  categories: string[];
}
