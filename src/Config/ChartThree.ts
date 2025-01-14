import { ApexOptions } from 'apexcharts';

const ispList = [
  'APNIC-LABS',
  'GOOGLE',
  'AKAMAI',
  'OPEN-V4-1',
  'NET1C-TATAC',
  'WEBHOSTINGHOLDINGS',
  'iFog-GmbH',
  'CLOUDFLARENET',
  'BUNNYCDN_HK',
  'HINET-NET',
  'HONGDA-NET',
  'NFORCE_ENTERTAINMENT',
  'UK-MB-CORE',
  'CC-16',
  'CDN77-CHI',
  'CDN77-ASH',
];

export const ChartThreeOptions: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  labels: ispList,
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
    enabled: true,
    style: {
      fontSize: '14px',
      colors: ['#FFFFFF'], 
    },
  },
  
  responsive: [
    { breakpoint: 2600, options: { chart: { width: 380 } } },
    { breakpoint: 640, options: { chart: { width: 200 } } },
  ],
};
