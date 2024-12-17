export interface ChartTwoState {
  series: {
    name: string;
    data: { x: string; y: number }[]; // Đổi từ number[] sang dạng ApexCharts
  }[];
  categories: string[];
}
