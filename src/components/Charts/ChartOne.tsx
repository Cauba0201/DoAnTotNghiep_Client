import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartOneOptions } from '../../Config/ChartOne';
import { ChartOneState } from '../../interfaces/ChartOne';

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Viettel',
        data: [293.4,10.3,41.1,2.3,131.1,46,4.4,67,1.3,11.9],
      },
      { name: 'VNPT', data: [701,2.6,1.8,0.9,116.1,0,4.5,0.7,357.3,9.2] },
      { name: 'FPT', data: [709.9,0.7,7.9,1.3,1000,4.6,4.5,8.5,773.4,13.2] },
    ],
  });

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(
  //       'https://script.google.com/macros/s/AKfycbx3rLykakOhSt-aHLqET1738Nys3wi9QxQ-P8d4kUrzJKAKFOYUzqqdc--5jMttT1MH/exec',
  //     );

  //     const result = await res.json();
  //     // console.log(result);

  //     if (Array.isArray(result)) {
  //       const updatedSeries = state.series.map((item) => {
  //         const ispData = result.filter(
  //           (entry) =>
  //             entry.local_isp &&
  //             entry.local_isp.toLowerCase().includes(item.name.toLowerCase()),
  //         );

  //         const latencyNumbers = ispData.map((entry) =>
  //           parseFloat(entry.avg_latency),
  //         );

  //         return {
  //           ...item,
  //           data: latencyNumbers,
  //         };
  //       });

  //       setState({ series: updatedSeries });
  //     }
  //     return result;
  //   } catch (error) {
  //     console.error('Failed to fetch data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <h5 className="text-xl mb-3 font-semibold text-black dark:text-white">
        Độ ổn định mạng lưới theo các ISP
      </h5>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          {['Viettel', 'VNPT', 'FPT'].map((name, index) => (
            <div key={name} className="flex min-w-47.5">
              <span
                className={`mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border`}
                style={{ borderColor: ChartOneOptions.colors?.[index] }}
              >
                <span
                  className="block h-2.5 w-full max-w-2.5 rounded-full"
                  style={{ backgroundColor: ChartOneOptions.colors?.[index] }}
                ></span>
              </span>
              <div className="w-full">
                <p
                  className="font-semibold"
                  style={{ color: ChartOneOptions.colors?.[index] }}
                >
                  Jitter {name}
                </p>
                <p className="text-sm font-medium"></p>
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

      <div id="chartOne" className="-ml-5">
        <ReactApexChart
          options={ChartOneOptions}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartOne;
