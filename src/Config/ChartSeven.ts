import { ApexOptions } from 'apexcharts';

export const ChartSevenOption: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 360,
    type: 'heatmap',
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#8B0000', '#008FFB', '#FF4500'],

  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  yaxis: {
    stepSize: 23,
  },
//   xaxis: {
//     categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
//   },

  responsive: [
    { breakpoint: 2600, options: { chart: { width: 1420 } } },
    { breakpoint: 1000, options: { chart: { width: 750 } } },
    { breakpoint: 640, options: { chart: { width: 300 } } },
  ],
  
};
