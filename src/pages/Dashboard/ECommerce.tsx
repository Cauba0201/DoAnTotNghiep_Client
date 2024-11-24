import React from 'react';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import GeoChart from '../../components/Maps/GeoChart';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import ChartFour from '../../components/Charts/ChartFour';
import ChartFive from '../../components/Charts/ChartFive';
import ChartSix from '../../components/Charts/ChartSix';
// import ChartSeven from '../../components/Charts/ChartSeven';

const ECommerce: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Connect Network" />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartFour />
        <ChartFive />
        <ChartSix />
        {/* <ChartSeven /> */}
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <GeoChart />
      </div>
    </>
  );
};

export default ECommerce;
