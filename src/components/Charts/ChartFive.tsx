// import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartSeries } from '../../interfaces/ChartFive';
import { ChartFiveOption } from '../../Config/ChartFive';
import { fetchLatencyData } from '../../services/chartFive';
import { processLatencyData } from '../../utils/chartFive';

const ChartFive: React.FC = () => {
  const [series, setSeries] = useState<ChartSeries[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchLatencyData();
        const processedData = processLatencyData(data);
        setSeries(processedData);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="col-span-10 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Unusual Data Point
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name="timeframe"
              id="timeframe"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="thisWeek" className="dark:bg-boxdark">
                This Week
              </option>
              <option value="lastWeek" className="dark:bg-boxdark">
                Last Week
              </option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <ReactApexChart
          options={ChartFiveOption}
          series={series}
          type="scatter"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartFive;
