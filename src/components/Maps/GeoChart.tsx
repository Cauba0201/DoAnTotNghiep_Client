import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { ChartGeoState } from '../../interfaces/GeoChart';
import { dataViettel } from '../../data/GeoChart';
import { dataVNPT } from '../../data/GeoChart';
import { dataFPT } from '../../data/GeoChart';
import { GeoArea } from '../../data/GeoChart';

const initialOptions = {
  colorAxis: { colors: ['#fde6eb', '#ee0434', '#a70324'] },
  backgroundColor: '#9addfb',
  datalessRegionColor: '#b5b5b5',
  defaultColor: '#f5f5f5',
};

function GeoChart() {
  const providerColors = {
    Viettel: ['#fde6eb', '#ee0434', '#a70324'], // mâu đỏ cho Viettel
    VNPT: ['#2196F3', '#1976D2', '#0D47A1'], // Xanh dương cho VNPT
    FPT: ['#FF5722', '#E64A19', '#BF360C'], // Cam cho FPT
  };
  const [chartData, setChartData] = useState(dataViettel); // Dữ liệu mặc định là của Viettel
  const [chartOptions, setChartOptions] = useState(initialOptions);
  const [state, setState] = useState<ChartGeoState>({
    series: [
      {
        name: 'Viettel',
        data: [],
      },
      { name: 'VNPT', data: [] },
      { name: 'FPT', data: [] },
    ],
    // name: [],
    regionCode: '035', // Mặc định là Đông Nam Á
    // selectedDate: '', // Ngày được chọn
  });
  // const [availableDates, setAvailableDates] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const provider = event.target.value;
    const providerData = {
      Viettel: dataViettel,
      VNPT: dataVNPT,
      FPT: dataFPT,
    };

    // Cập nhật dữ liệu và màu sắc bản đồ khi chọn nhà cung cấp
    setChartData(providerData[provider] || dataViettel);
    setChartOptions({
      ...chartOptions,
      colorAxis: { colors: providerColors[provider] || providerColors.Viettel },
    });
  };

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/geo/latency');
      const result = await res.json();

      // Nhóm dữ liệu theo ngày và nhà mạng
      const groupedData = result.reduce((acc: any, item: any) => {
        const date = item.updated_date.split('T')[0]; // Lấy phần ngày từ updated_date

        if (!acc[date]) {
          acc[date] = {
            Viettel: [],
            VNPT: [],
            FPT: [],
          };
        }

        // Phân loại dữ liệu vào nhà mạng (giả sử local_isp xác định nhà mạng)
        const provider = getProvider(item.local_isp); // Hàm xác định nhà mạng từ ISP
        acc[date][provider].push(item.packet_loss);

        return acc;
      }, {});

      // Format lại dữ liệu cho series
      const formattedSeries = Object.keys(groupedData).map((date) => ({
        date,
        Viettel: average(groupedData[date].Viettel),
        VNPT: average(groupedData[date].VNPT),
        FPT: average(groupedData[date].FPT),
      }));

      // Cập nhật state
      // setState((prevState) => ({
      //   ...prevState,
      //   series: formattedSeries,
      // }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Hàm tính trung bình
  const average = (data: number[]) =>
    data.length ? data.reduce((sum, val) => sum + val, 0) / data.length : 0;

  // Hàm xác định nhà mạng dựa trên ISP
  const getProvider = (isp: string) => {
    if (isp.includes('Viettel')) return 'Viettel';
    if (isp.includes('VNPT')) return 'VNPT';
    if (isp.includes('FPT')) return 'FPT';
    return 'Unknown';
  };

  const handleSelectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const regionCode = event.target.value;
    // Cập nhật khu vực hiển thị trên bản đồ
    setState((prevState) => ({
      ...prevState,
      regionCode,
    }));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
      <div className="flex gap-10">
        <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
          ISP Packet Loss Rate by Geographic Area
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
        {/* <select
          onChange={handleSelectDate}
          className="relative z-20 mb-2 inline-flex bg-transparent py-1 pl-3 pr-2 text-sm font-medium outline-none"
        >
          <option value="">All Dates</option>
          {availableDates.map((date) => (
            <option key={date} value={date} className="dark:bg-boxdark">
              {date}
            </option>
          ))}
        </select> */}
      </div>

      <Chart
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
