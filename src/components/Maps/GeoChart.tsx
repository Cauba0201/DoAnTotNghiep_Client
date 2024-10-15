import { Chart } from 'react-google-charts';

export const data = [
  ['Country', 'Latitude'],
  ['Algeria', 36],
  ['Angola', -8],
  ['Benin', 6],
  ['Botswana', -24],
  ['Burkina Faso', 12],
  ['Burundi', -3],
  ['Cameroon', 3],
  ['Canary Islands', 28],
  ['Cape Verde', 15],
  ['Central African Republic', 4],
  ['Ceuta', 35],
  ['Chad', 12],
  ['Comoros', -12],
  ["Cote d'Ivoire", 6],
  ['Democratic Republic of the Congo', -3],
  ['Djibouti', 12],
  ['Egypt', 26],
  ['Equatorial Guinea', 3],
  ['Eritrea', 15],
  ['Ethiopia', 9],
  ['Gabon', 0],
  ['Gambia', 13],
  ['Ghana', 5],
  ['Guinea', 10],
  ['Guinea-Bissau', 12],
  ['Kenya', -1],
  ['Lesotho', -29],
  ['Liberia', 6],
  ['Libya', 32],
  ['Madagascar', null],
  ['Madeira', 33],
  ['Malawi', -14],
  ['Mali', 12],
  ['Mauritania', 18],
  ['Mauritius', -20],
  ['Mayotte', -13],
  ['Melilla', 35],
  ['Morocco', 32],
  ['Mozambique', -25],
  ['Namibia', -22],
  ['Niger', 14],
  ['Nigeria', 8],
  ['Republic of the Congo', -1],
  ['Réunion', -21],
  ['Rwanda', -2],
  ['Saint Helena', -16],
  ['São Tomé and Principe', 0],
  ['Senegal', 15],
  ['Seychelles', -5],
  ['Sierra Leone', 8],
  ['Somalia', 2],
  ['Sudan', 15],
  ['South Africa', -30],
  ['South Sudan', 5],
  ['Swaziland', -26],
  ['Tanzania', -6],
  ['Togo', 6],
  ['Tunisia', 34],
  ['Uganda', 1],
  ['Western Sahara', 25],
  ['Zambia', -15],
  ['Zimbabwe', -18],
  ['Vietnam', 25],
];

export const options = {
  region: '002', // Africa
  colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
  backgroundColor: '#81d4fa',
  datalessRegionColor: '#f8bbd0',
  defaultColor: '#f5f5f5',
};

function GeoChart() {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <Chart
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log('Selected : ' + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="100%"
        data={data}
      />
    </div>
  );
}

export default GeoChart;
