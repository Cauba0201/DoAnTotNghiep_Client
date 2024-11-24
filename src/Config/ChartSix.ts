import { ApexOptions } from 'apexcharts';

export const ChartSixOption: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 380,
    type: 'radar',
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
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
    stepSize: 20,
  },
  xaxis: {
    categories: ['Latency', 'Packet Loss', 'Jitter', 'Packet Sent', '2015', '2016'],
  },

  responsive: [
    { breakpoint: 2600, options: { chart: { width: 380 } } },
    { breakpoint: 640, options: { chart: { width: 200 } } },
  ],
};
