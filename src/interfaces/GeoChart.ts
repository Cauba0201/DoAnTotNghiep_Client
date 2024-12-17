export interface ChartGeoState {
  series: Array<{
    name: string;
    data: number[];
  }>;
  regionCode: string;
  // selectedDate: string;
}
