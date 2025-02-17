import { ApexOptions } from 'apexcharts';

export const ChartOneOptions: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#EE0033', '#086BB6', '#FC7321'], // VT-VNPT-FPT colors
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: { chart: { height: 300 } },
    },
    {
      breakpoint: 1366,
      options: { chart: { height: 350 } },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
  },
  dataLabels: { enabled: false },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#EE0033', '#086BB6', '#FC7321'],
    strokeWidth: 3,
    hover: { sizeOffset: 5 },
  },
  xaxis: {
    type: 'category',
    categories: [
      'United States of America',
      'New Zealand',
      'Switzerland',
      'Hong Kong',
      'Taiwan',
      'Australia',
      'Japan',
      'France',
      'Netherlands (Kingdom of the)',
      'United Kingdom',
    ],
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 1000,
    title: { style: { fontSize: '0px' } },
  },
};
