import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartTwoState } from '../../interfaces/ChartTwo';
import { ChartTwoOption } from '../../Config/ChartTwo';

const ChartTwo: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'thisweek' | 'lastweek'>(
    'thisweek',
  );
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: 'Viettel',
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'VNPT',
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'FPT',
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/test/packetloss');
      const data = await res.json();

      if (data?.packloss)
        setState((prevState) => ({ ...prevState, series: data.packloss }));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            ISP Packet Loss Rate Over Time
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark">
                This Week
              </option>
              <option value="" className="dark:bg-boxdark">
                Last Week
              </option>
            </select>
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2"></span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={ChartTwoOption}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
