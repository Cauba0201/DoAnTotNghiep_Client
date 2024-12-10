import { LatencyData, ChartSeries } from '../interfaces/ChartFive';

export const processLatencyData = (data: LatencyData[]): ChartSeries[] => {
  const viettelData: number[][] = [];
  const vnptData: number[][] = [];
  const fptData: number[][] = [];

  let viettelCount = 1;
  let vnptCount = 1;
  let fptCount = 1;

  data.forEach(({ avg_latency, local_isp }) => {
    if (local_isp.toLowerCase().includes('viettel') && viettelCount <= 20) {
      viettelData.push([viettelCount++, avg_latency]);
    } else if (local_isp.toLowerCase().includes('vnpt') && vnptCount <= 20) {
      vnptData.push([vnptCount++, avg_latency]);
    } else if (local_isp.toLowerCase().includes('fpt') && fptCount <= 20) {
      fptData.push([fptCount++, avg_latency]);
    }
  });

  return [
    { name: 'Viettel', data: viettelData },
    { name: 'VNPT', data: vnptData },
    { name: 'FPT', data: fptData },
  ];
};
