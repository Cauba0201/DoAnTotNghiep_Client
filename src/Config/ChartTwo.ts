import { ApexOptions } from 'apexcharts';

export const ChartTwoOption: ApexOptions = {
  colors: ['#EE0033', '#086BB6', '#FC7321'],
  // series: [
  //   {
  //     name: 'Viettel',
  //     data: [16, 17, 17, 18, 17, 16, 19],
  //   },
  //   {
  //     name: 'VNPT',
  //     data: [13, 13, 17, 18, 13, 17, 15],
  //   },
  //   {
  //     name: 'FPT',
  //     data: [13, 15, 17, 18, 17, 17, 15],
  //   },
  // ],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    // stacked: true, // không chồng nên nhau
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '50%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '90%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: true,
  },

  xaxis: {
    categories: [
      'Monday ',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    title: {
      text: 'Time (Day)',
    },
  },
  yaxis: {
    title: {
      text: 'Packet Loss Rate (%)',
      // style: { fontSize: '0px' },
    },
    min: 0,
    max: 150,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
  },
  tooltip: {
    shared: true,
    intersect: false,
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
};
