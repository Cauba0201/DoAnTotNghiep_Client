import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartFourState } from '../../interfaces/ChartFour';
import { ChartFourOptions } from '../../Config/ChartFour';
import { LatencyService } from '../../services/chartFour';

const ChartFour: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'day' | 'week'>('day'); // Mặc định là "day"
  const [state, setState] = useState<ChartFourState>({
    series: [
      {
        name: 'Viettel',
        data: [4, 34, 4, 5, 4, 2, 4, 354, 6],
      },
      { name: 'VNPT', data: [] },
      { name: 'FPT', data: [] },
    ],
  });

  const api =
    'https://script.google.com/macros/s/AKfycbx3rLykakOhSt-aHLqET1738Nys3wi9QxQ-P8d4kUrzJKAKFOYUzqqdc--5jMttT1MH/exec';

  const latencyService = new LatencyService(
    'http://localhost:3000/test/latency',
  );
  // const latencyService = new LatencyService(api);
  // console.log(latencyService)

  useEffect(() => {
    const fetchData = async () => {
      const samples = timeframe === 'day' ? 24 : 168;
      const seriesNames = state.series.map((item) => item.name);

      try {
        const updatedSeries = await latencyService.fetchLatencyData(
          timeframe,
          seriesNames,
          samples,
        );
        setState({ series: updatedSeries });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [timeframe]);
  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
        <div className="mb-5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Xu hướng độ trễ theo thời gian
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
              {['Day', 'Week'].map((label) => (
                <button
                  key={label}
                  className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white dark:text-white ${
                    timeframe === label.toLowerCase()
                      ? 'bg-blue-500 text-white'
                      : ''
                  }`}
                  onClick={() =>
                    setTimeframe(label.toLowerCase() as 'day' | 'week')
                  }
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
