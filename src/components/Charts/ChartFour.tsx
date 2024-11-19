import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartFourState } from '../../interfaces/ChartFour';
import { ChartFourOptions } from '../../Config/ChartFour';

const ChartFour: React.FC = () => {
  const [state, setState] = useState<ChartFourState>({
    series: [
      {
        name: 'Viettel',
        data: [], //2, 23, 23, 24, 24, 24, 24, 25, 25, 25, 26, 27
      },
      { name: 'VNPT', data: [] }, //30, 30, 31, 31, 31, 32, 32, 34, 34, 35, 36, 37
      { name: 'FPT', data: [] }, //10, 10, 11, 13, 20, 30, 40, 45, 46, 20, 20, 21
    ],
  });

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/test/latency');
      const result = await res.json();

      if (Array.isArray(result)) {
        const updatedSeries = state.series.map((item) => {
          const ispData = result.filter(
            (entry) =>
              entry.local_isp &&
              entry.local_isp.toLowerCase().includes(item.name.toLowerCase()),
          );

          const latencyNumbers = ispData.map((entry) =>
            parseFloat(entry.avg_latency),
          );

          return {
            ...item,
            data: latencyNumbers,
          };
        });

        setState({ series: updatedSeries });
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(state);
  }, []);
  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
        <div className="mb-5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Trend of Latency Over Time
          </h4>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            {['Viettel', 'VNPT', 'FPT'].map((name, index) => (
              <div key={name} className="flex min-w-47.5">
                <span
                  className={`mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border`}
                  style={{ borderColor: ChartFourOptions.colors?.[index] }}
                >
                  <span
                    className="block h-2.5 w-full max-w-2.5 rounded-full"
                    style={{
                      backgroundColor: ChartFourOptions.colors?.[index],
                    }}
                  ></span>
                </span>
                <div className="w-full">
                  <p
                    className="font-semibold"
                    style={{ color: ChartFourOptions.colors?.[index] }}
                  >
                    Latency {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
              {['Day', 'Week', 'Month'].map((label) => (
                <button
                  key={label}
                  className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white dark:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div id="chartFour" className="-ml-5">
          <ReactApexChart
            options={ChartFourOptions}
            series={state.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </>
  );
};

export default ChartFour;