import { ApexOptions } from 'apexcharts';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartThreeState {
  series: number[];
  colors: string[];
}

const defaultOptions: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  labels: ['Game', 'Video', 'News Website', 'VoiceIP'],
  legend: {
    show: false,
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    { breakpoint: 2600, options: { chart: { width: 380 } } },
    { breakpoint: 640, options: { chart: { width: 200 } } },
  ],
};

const initialState: ChartThreeState = {
  series: [70, 30, 15, 45],
  colors: ['#8B0000', '#F08080', '#FFA07A', '#FF0000'],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>(initialState);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/toplatency');
      const data = await res.json();
      if (data?.avg_latency) setState((prevState) => ({ ...prevState, series: data.avg_latency }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const providerSettings: Record<string, ChartThreeState> = {
      Viettel: { series: [70, 30, 15, 45], colors: ['#8B0000', '#F08080', '#FFA07A', '#FF0000'] },
      VNPT: { series: [60, 40, 20, 50], colors: ['#0000CD', '#1E90FF', '#00BFFF', '#6495ED'] },
      FPT: { series: [55, 35, 25, 60], colors: ['#FF4500', '#FF7F50', '#FFA500', '#FF6347'] },
    };
    setState(providerSettings[event.target.value] || initialState);
  };

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 flex justify-between gap-4 sm:flex">
        <h5 className="text-xl font-semibold text-black dark:text-white">Application Analytics</h5>
        <select
          onChange={handleSelectChange}
          className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
        >
          {['Viettel', 'VNPT', 'FPT'].map((provider) => (
            <option key={provider} value={provider} className="dark:bg-boxdark">
              {provider}
            </option>
          ))}
        </select>
      </div>

      <div id="chartThree" className="mb-2 mx-auto flex justify-center">
        <ReactApexChart options={{ ...defaultOptions, colors: state.colors }} series={state.series} type="donut" />
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {state.series.map((value, index) => (
          <div key={index} className="sm:w-1/2 w-full px-8">
            <div className="flex w-full items-center">
              <span
                className="mr-2 block h-3 w-full max-w-3 rounded-full"
                style={{ backgroundColor: state.colors[index] }}
              ></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span>{defaultOptions.labels?.[index]}</span>
                <span>{value}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartThree;
