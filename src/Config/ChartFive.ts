import { ApexOptions } from 'apexcharts';

export const ChartFiveOption: ApexOptions = {
  colors: ['#EE0033', '#086BB6', '#FC7321'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'scatter',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
      type: 'xy',
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    tickAmount: 10,
    categories: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    title: {
      text: 'Hour of the Day',
    },
  },
  yaxis: {
    tickAmount: 7,
    title: {
      text: 'Average Latency (ms)',
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',

    // markers: {
    //   radius: 99,
    // },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    shared: false,
    y: {
      formatter: (val: number) => `${val.toFixed(2)} ms`,
    },
  },
};
