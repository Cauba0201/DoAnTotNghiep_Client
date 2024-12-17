import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartTwoState } from '../../interfaces/ChartTwo';
import { ChartTwoOption } from '../../Config/ChartTwo';

const ChartTwo: React.FC = () => {
  // const [timeframe, setTimeframe] = useState<'thisweek' | 'lastweek'>(
  //   'thisweek',
  // );
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: 'Viettel',
        data: [],
      },
      {
        name: 'VNPT',
        data: [],
      },
      {
        name: 'FPT',
        data: [],
      },
    ],
    categories: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/test/packetloss');
        const data = await res.json();
        if (data && Array.isArray(data)) {
          // Khởi tạo đối tượng để nhóm dữ liệu packet loss theo ISP
          const ispData: { [key: string]: { x: string; y: number }[] } = {
            'VIETTEL-VN': [],
            'VNPT-VN': [],
            'FPTDYNAMICIP-NET': [],
          };

          // Trích xuất dữ liệu packet loss và update_date
          data.forEach((item) => {
            const date = new Date(item.update_date).toLocaleDateString('en-GB'); // Format ngày
            ispData[item.local_isp]?.push({ x: date, y: item.packloss });
          });

          // Tạo series mới
          const updatedSeries = [
            { name: 'Viettel', data: ispData['VIETTEL-VN'] },
            { name: 'VNPT', data: ispData['VNPT-VN'] },
            { name: 'FPT', data: ispData['FPTDYNAMICIP-NET'] },
          ];

          // Trích xuất ngày duy nhất để làm categories
          const allDates = Array.from(
            new Set(
              data.map((item) =>
                new Date(item.update_date).toLocaleDateString('en-GB'),
              ),
            ),
          );

          // Cập nhật state
          setState({
            series: updatedSeries,
            categories: allDates,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            ISP Packet Loss Rate Over Time
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark">
                This Week
              </option>
              <option value="" className="dark:bg-boxdark">
                Last Week
              </option>
            </select>
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2"></span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={{
              ...ChartTwoOption,
              xaxis: { categories: state.categories },
            }}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
