import React, { useEffect, useState } from 'react';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import GeoChart from '../../components/Maps/GeoChart';
// import TableOne from '../../components/Tables/TableOne';
// import logoViettel from '../../images/imgISP/Logo-Tap-doan-vien-thong-Viettel-Moi-02-01-1024x640.jpg';
// import logoFPT from '../../images/imgISP/y-nghia-logo-fpt-lan-3.jpg';
// import logoVNPT from '../../images/imgISP/logo-vnpt-inkythuatso-01-01-14-56-59.jpg';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import ChartFour from '../../components/Charts/ChartFour';
import ChartFive from '../../components/Charts/ChartFive';
import ChartSix from '../../components/Charts/ChartSix';
import ChartSeven from '../../components/Charts/ChartSeven';
import { TestItems } from '../../interfaces/HomePage';

const ECommerce: React.FC = () => {
  const [testList, setTestList] = useState<TestItems[]>([]);
  const fetchTest = async () => {
    try {
      const res = await fetch('http://localhost:3000/toplatency/');
      const data = res.json();
      setTestList(await data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTest();
  }, []);

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <Breadcrumb pageName="Connect Network" />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartFour />
        <ChartFive />
        <ChartSix />
        <ChartSeven />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <GeoChart />
        {/* <div className="col-span-12 ">
          <TableOne />
        </div> */}
      </div>
    </>
  );
};

export default ECommerce;
