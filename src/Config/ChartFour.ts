import { ApexOptions } from "apexcharts";

export const ChartFourOptions: ApexOptions = {
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
      categories: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      axisBorder: { show: false },
      axisTicks: { show: false },
      title: {
        text: 'Hour of the Day',
      },
    },
    yaxis: {
      min: 0,
      max: 500,
      title: {
        text: 'Latency (ms)',
        // style: { fontSize: '0px' },
      },
    },
  };