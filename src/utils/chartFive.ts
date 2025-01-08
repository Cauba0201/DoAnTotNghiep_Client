import { LatencyData, ChartSeries } from '../interfaces/ChartFive';

export const processLatencyData = (data: LatencyData[]): ChartSeries[] => {
  const viettelData: number[][] = [];
  const vnptData: number[][] = [];
  const fptData: number[][] = [];

  let viettelCount = 0;
  let vnptCount = 0;
  let fptCount = 0;

  data.forEach(({ avg_latency, local_isp }) => {
    if (local_isp.toLowerCase().includes('viettel') && viettelCount <= 23) {
      viettelData.push([viettelCount++, avg_latency]);
    } else if (local_isp.toLowerCase().includes('vnpt') && vnptCount <= 23) {
      vnptData.push([vnptCount++, avg_latency]);
    } else if (local_isp.toLowerCase().includes('fpt') && fptCount <= 23) {
      fptData.push([fptCount++, avg_latency]);
    }
  });

  return [
    { name: 'Viettel', data: viettelData },
    { name: 'VNPT', data: vnptData },
    { name: 'FPT', data: fptData },
  ];
};
