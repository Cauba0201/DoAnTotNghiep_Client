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
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [70, 30, 15, 45],
    colors: ['#8B0000', '#F08080', '#FFA07A', '#FF0000'], // Màu mặc định
  });

  useEffect(() => {
    // Cập nhật các màu trong biểu đồ dựa trên state.colors
    options.colors = state.colors;
  }, [state.colors]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    // Cập nhật dữ liệu và màu sắc dựa trên nhà mạng đã chọn
    switch (value) {
      case 'Viettel':
        setState({
          series: [70, 30, 15, 45],
          colors: ['#8B0000', '#F08080', '#FFA07A', '#FF0000'], // Màu sắc của Viettel
        });
        break;
      case 'VNPT':
        setState({
          series: [60, 40, 20, 50],
          colors: ['#0000CD', '#1E90FF', '#00BFFF', '#6495ED'], // Màu sắc của VNPT
        });
        break;
      case 'FPT':
        setState({
          series: [55, 35, 25, 60],
          colors: ['#FF4500', '#FF7F50', '#FFA500', '#FF6347'], // Màu mặc định
          // Màu sắc của FPT
        });
        break;
      default:
        setState({
          series: [70, 30, 15, 45],
          colors: ['#8B0000', '#F08080', '#FFA07A', '#FF0000'], // Màu sắc của Viettel
        }); 
    }
  };

  const options = {
    ...defaultOptions,
    colors: state.colors,
  };

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Application Analytics
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name=""
              id=""
              onChange={handleSelectChange}
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="Viettel" className="dark:bg-boxdark">
                Viettel
              </option>
              <option value="VNPT" className="dark:bg-boxdark">
                VNPT
              </option>
              <option value="FPT" className="dark:bg-boxdark">
                FPT
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span
              className="mr-2 block h-3 w-full max-w-3 rounded-full"
              style={{ backgroundColor: state.colors[0] }}
            ></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Game </span>
              <span> {state.series[0]}% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span
              className="mr-2 block h-3 w-full max-w-3 rounded-full"
              style={{ backgroundColor: state.colors[1] }}
            ></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Video </span>
              <span> {state.series[1]}% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span
              className="mr-2 block h-3 w-full max-w-3 rounded-full"
              style={{ backgroundColor: state.colors[2] }}
            ></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> News Website </span>
              <span> {state.series[2]}% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span
              className="mr-2 block h-3 w-full max-w-3 rounded-full"
              style={{ backgroundColor: state.colors[3] }}
            ></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> VoiceIP </span>
              <span> {state.series[3]}% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
