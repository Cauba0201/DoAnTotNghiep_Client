import { ChartFourState, LatencyData } from "../interfaces/ChartFour";

// services/LatencyService.ts
export class LatencyService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    async fetchLatencyData(
      timeframe: 'day' | 'week',
      seriesNames: string[],
      samples: number,
    ): Promise<ChartFourState['series']> {
      const response = await fetch(`${this.apiUrl}?timeframe=${timeframe}`);
      const result: LatencyData[] = await response.json();
  
      if (!Array.isArray(result)) throw new Error('Invalid data format');
  
      return seriesNames.map((name) => {
        const filteredData = result
          .filter(
            (entry) =>
              entry.local_isp &&
              entry.local_isp.toLowerCase().includes(name.toLowerCase()),
          )
          .slice(-samples);
  
        return {
          name,
          data: filteredData.map((entry) => parseFloat(entry.avg_latency)),
        };
      });
    }
  }
  