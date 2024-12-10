import { LatencyData } from '../interfaces/ChartFive';

export const fetchLatencyData = async (): Promise<LatencyData[]> => {
  const response = await fetch('http://localhost:3000/test/latency');
  if (!response.ok) {
    throw new Error('Failed to fetch latency data');
  }
  return response.json();
};
