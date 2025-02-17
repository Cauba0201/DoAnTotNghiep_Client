import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartThreeState } from '../../interfaces/ChartThree';
import { ChartThreeOptions } from '../../Config/ChartThree';

const initialState: ChartThreeState = {
  series: [5.6, 0.6, 5.3, 5.2, 5.2, 0.2, 5, 43.2, 3.3, 4.9, 4.9, 5, 5, 4.8, 1],
  colors: [
    '#c0392b',
    '#e74c3c',
    '#9b59b6',
    '#8e44ad',
    '#2980b9',
    '#3498db',
    '#1abc9c',
    '#16a085',
    '#27ae60',
    '#2ecc71',
    '#f1c40f',
    '#f39c12',
    '#e67e22',
    '#d35400',
    '#7f8c8d',
    '#34495e',
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>(initialState);

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch('http://localhost:3000/toplatency');
  //     const data = await res.json();
  //     if (data?.avg_latency)
  //       setState((prevState) => ({ ...prevState, series: data.avg_latency }));
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   console.log(fetchData());
  // }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const providerSettings: Record<string, ChartThreeState> = {
      Viettel: {
        series: [
          5.6, 0.6, 5.3, 5.2, 5.2, 0.2, 5, 43.2, 3.3, 4.9, 4.9, 5, 5, 4.8, 1,
        ],
        colors: [
          '#c0392b',
          '#e74c3c',
          '#9b59b6',
          '#8e44ad',
          '#2980b9',
          '#3498db',
          '#1abc9c',
          '#16a085',
          '#27ae60',
          '#2ecc71',
          '#f1c40f',
          '#f39c12',
          '#e67e22',
          '#d35400',
          '#7f8c8d',
          '#34495e',
        ],
      },
      VNPT: {
        series: [1, 10, 11, 15],
        colors: ['#0000CD', '#1E90FF', '#00BFFF', '#6495ED'],
      },
      FPT: {
        series: [1, 5, 6, 20],
        colors: ['#FF4500', '#FF7F50', '#FFA500', '#FF6347'],
      },
    };
    setState(providerSettings[event.target.value] || initialState);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 flex justify-between gap-4 sm:flex">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Phần trăm các ISP được sử dụng
        </h4>
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
        <ReactApexChart
          options={{ ...ChartThreeOptions, colors: state.colors }}
          series={state.series}
          type="donut"
          height={350}
        />
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
                <span>{ChartThreeOptions.labels?.[index]}</span>
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
