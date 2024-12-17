import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartTwoState } from '../../interfaces/ChartTwo';
import { ChartTwoOption } from '../../Config/ChartTwo';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

// Constants
const API_URL = 'http://localhost:3000/test/packetloss';
const ISPS = {
  VIETTEL: 'VIETTEL-VN',
  VNPT: 'VNPT-VN',
  FPT: 'FPTDYNAMICIP-NET',
};
const TIME_FRAME_OPTIONS = {
  THIS_WEEK: 'thisMonth',
  LAST_WEEK: 'lastMonth',
};

// Utility Functions
const getStartAndEndDates = (timeFrame: string) => {
  const today = dayjs();
  const startOfThisMonth = today.startOf('month');
  const startOfLastMonth = startOfThisMonth.subtract(1, 'week');

  const startDate =
    timeFrame === TIME_FRAME_OPTIONS.THIS_WEEK
      ? startOfThisMonth
      : startOfLastMonth;
  const endDate = startDate.endOf('month');

  return { startDate, endDate };
};

const filterDataByTimeFrame = (data: any[], timeFrame: string) => {
  const { startDate, endDate } = getStartAndEndDates(timeFrame);
  return data.filter((item) =>
    dayjs(item.update_date).isBetween(startDate, endDate, null, '[]'),
  );
};

const groupDataByISP = (data: any[]) => {
  return data.reduce(
    (acc, item) => {
      const date = new Date(item.update_date).toLocaleDateString('en-GB');
      const ispKey = item.local_isp;
      if (acc[ispKey]) {
        acc[ispKey].push({ x: date, y: item.packloss });
      }
      return acc;
    },
    {
      [ISPS.VIETTEL]: [],
      [ISPS.VNPT]: [],
      [ISPS.FPT]: [],
    },
  );
};

const extractUniqueDates = (data: any[]) => {
  return Array.from(
    new Set(
      data.map((item) =>
        new Date(item.update_date).toLocaleDateString('en-GB'),
      ),
    ),
  );
};

const ChartTwo: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState(TIME_FRAME_OPTIONS.THIS_WEEK);
  const [state, setState] = useState<ChartTwoState>({
    series: [
      { name: 'Viettel', data: [] },
      { name: 'VNPT', data: [] },
      { name: 'FPT', data: [] },
    ],
    categories: [],
  });

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data && Array.isArray(data)) {
        const filteredData = filterDataByTimeFrame(data, timeFrame);
        const ispData = groupDataByISP(filteredData);
        const allDates = extractUniqueDates(filteredData);

        setState({
          series: [
            { name: 'Viettel', data: ispData[ISPS.VIETTEL] },
            { name: 'VNPT', data: ispData[ISPS.VNPT] },
            { name: 'FPT', data: ispData[ISPS.FPT] },
          ],
          categories: allDates,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [timeFrame]);

  const handleTimeFrameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTimeFrame(e.target.value);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          ISP Packet Loss Rate Over Time
        </h4>
        <div>
          <select
            value={timeFrame}
            onChange={handleTimeFrameChange}
            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
          >
            <option
              value={TIME_FRAME_OPTIONS.THIS_WEEK}
              className="dark:bg-boxdark"
            >
              This Week
            </option>
            <option
              value={TIME_FRAME_OPTIONS.LAST_WEEK}
              className="dark:bg-boxdark"
            >
              Last Week
            </option>
          </select>
        </div>
      </div>

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
  );
};

export default ChartTwo;
