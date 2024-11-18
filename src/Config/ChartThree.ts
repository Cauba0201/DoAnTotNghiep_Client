import { ApexOptions } from "apexcharts";

export const ChartThreeOptions: ApexOptions = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
    },
    labels: ['Singapore', 'Taiwan', 'Taiwan', 'Hong Kong'],
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