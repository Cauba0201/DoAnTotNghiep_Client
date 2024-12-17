import { ApexOptions } from 'apexcharts';

export const ChartTwoOption: ApexOptions = {
  colors: ['#EE0033', '#086BB6', '#FC7321'],
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

  // xaxis: {
  //   categories: getDaysInMonthWithWeekdays(2024, 11),
  //   title: {
  //     text: 'Time (Day)',
  //   },
  // },
  yaxis: {
    title: {
      text: 'Packet Loss Rate (%)',
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
  },
  fill: {
    opacity: 1,
  },
};


// const getDaysInMonthWithWeekdays = (year: number, month: number): string[] => {
//   const days = new Date(year, month, 0).getDate(); // Lấy số ngày trong tháng
//   const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   return Array.from({ length: days }, (_, i) => {
//     const date = new Date(year, month - 1, i + 1); // Lưu ý: month bắt đầu từ 0
//     const dayOfWeek = weekdays[date.getDay()]; // Lấy tên ngày trong tuần
//     return `${dayOfWeek}, ${i + 1}-${month}`; // Ví dụ: "Monday, 1-12"
//   });
// };
