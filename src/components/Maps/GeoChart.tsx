import { useState } from 'react';
import { Chart } from 'react-google-charts';

interface ChartGeoState {
  series: string[];
  name: string[];
  regionCode: string;
}

export const dataViettel = [
  ['Country', 'Latitude'],
  ['Vietnam', 450],
  ['Thailand', 350],
  ['Malaysia', 300],
  ['Singapore', 0],
  ['Indonesia', 0],
  ['Philippines', 0],
  ['Cambodia', 0],
  ['Laos', 0],
  ['Myanmar', 0],
];

export const dataVNPT = [
  ['Country', 'Latitude'],
  ['Singapore', 700],
  ['Indonesia', 600],
  ['Philippines', 500],
];

export const dataFPT = [
  ['Country', 'Latitude'],
  ['Cambodia', 250],
  ['Laos', 200],
  ['Myanmar', 400],
];

export const GeoArea = [
  // ['All Region', ''],
  ['Dong Nam A', '035'],
  ['Trung A', '143'],
  ['Dong A', '030'],
  ['Nam A', '034'],
  ['Tay A', '145'],
  ['Bac Phi', '015'],
  ['Tay Phi', '011'],
  ['Trung Phi', '017'],
  ['Dong Phi', '014'],
  ['Nam Phi', '018'],
  ['Bac Au', '154'],
  ['Tay Au', '155'],
  ['Dong Au', '151'],
  ['Nam Au', '039'],
  ['Bac My', '021'],
  ['Trung My', '013'],
  ['Nam My', '005'],
  ['Caribbean', '029'],
];

const initialOptions = {
  colorAxis: { colors: ['#fde6eb', '#ee0434', '#a70324'] },
  backgroundColor: '#9addfb',
  datalessRegionColor: '#b5b5b5',
  defaultColor: '#f5f5f5',
};

const initialState: ChartGeoState = {
  series: [],
  name: [],
  regionCode: '035', // Mặc định là Đông Nam Á
};

function GeoChart() {
  const [state, setState] = useState<ChartGeoState>(initialState);
  const [chartData, setChartData] = useState(dataViettel); // Dữ liệu mặc định là của Viettel
  const [chartOptions, setChartOptions] = useState(initialOptions);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const provider = event.target.value;

    const providerData = {
      Viettel: dataViettel,
      VNPT: dataVNPT,
      FPT: dataFPT,
    };

    const providerColors = {
      Viettel: ['#fde6eb', '#ee0434', '#a70324'], // mâu đỏ cho Viettel
      VNPT: ['#2196F3', '#1976D2', '#0D47A1'], // Xanh dương cho VNPT
      FPT: ['#FF5722', '#E64A19', '#BF360C'], // Cam cho FPT
    };

    // Cập nhật dữ liệu và màu sắc bản đồ khi chọn nhà cung cấp
    setChartData(providerData[provider] || dataViettel);
    setChartOptions({
      ...chartOptions,
      colorAxis: { colors: providerColors[provider] || providerColors.Viettel },
    });
  };

  const handleSelectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const regionCode = event.target.value;

    // Cập nhật khu vực hiển thị trên bản đồ
    setState((prevState) => ({
      ...prevState,
      regionCode,
    }));
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
      <div className="flex gap-10">
        <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
          Network Traffic
        </h4>
        <select
          onChange={handleSelectChange}
          className="relative  z-20 mb-2 inline-flex  bg-transparent py-1 pl-3 pr-2 text-sm font-medium outline-none"
        >
          {['Viettel', 'VNPT', 'FPT'].map((provider) => (
            <option key={provider} value={provider} className="dark:bg-boxdark">
              {provider}
            </option>
          ))}
        </select>
        <select
          onChange={handleSelectRegion}
          className="relative z-20 mb-2  gap-10 inline-flex  bg-transparent py-1 pl-2 pr-3 text-sm font-medium outline-none"
        >
          {GeoArea.map((geo) => (
            <option key={geo[1]} value={geo[1]} className="dark:bg-boxdark">
              {geo[0]}
            </option>
          ))}
        </select>
      </div>

      <Chart
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = chartData[selection[0].row + 1];
              console.log('Selected : ' + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="860px"
        data={chartData}
        options={{
          ...chartOptions,
          region: state.regionCode, // Cập nhật region dựa trên chọn vùng
        }}
      />
    </div>
  );
}

export default GeoChart;
