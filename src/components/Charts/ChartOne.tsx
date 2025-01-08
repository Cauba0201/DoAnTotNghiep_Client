import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartOneOptions } from '../../Config/ChartOne';
import { ChartOneState } from '../../interfaces/ChartOne';
const targetValuse =
  '/api/macros/s/AKfycbyJNZUI16pifBqe2x06Q8QzejNUc1OAfV_GbfM_hdW0JCGgDCZorT9Y_FYawD54GWXv/exec';
const api =
  'https://script.googleusercontent.com/macros/echo?user_content_key=Gq4zxM2m1bHZpDBLMPl78CuBlLQydb8xSeykD-YRnpCKaFdQDk4xY76LVifhea87XyjhKgTdO8sNTUtFDzfceM3GMQ_iRkGPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG230CwtfZfWTz5Zvhu9TNpfBeF22W99kkGDkAF3xJIYARpkwoTcX8zVDfjKQl09TzczPej9P427FIQOaY27ANYaIUydGYw9-Q&lib=MOasducim78ekZtbISNLq8iZ9_ecy5sDx';
const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Viettel',
        data: [], 
      },
      { name: 'VNPT', data: [] }, 
      { name: 'FPT', data: [] }, 
    ],
  });

  const fetchData = async () => {
    try {
      // const res = await fetch('http://localhost:3000/test/latencyhour');
      const res = await fetch(targetValuse, { mode: 'no-cors' });
      const result = await res.json();
      console.log(result);

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
      return result;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <h5 className="text-xl mb-3 font-semibold text-black dark:text-white">
        Evaluate Performance By Peak And Off-Peak Hours
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
                  Latency {name}
                </p>
                <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
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
