import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ProfilePage from '../constants/Profile';

const GlobalPing = () => {
  return (
    <>
      <Breadcrumb pageName="Global Ping" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <ProfilePage location={''} ip={''} ltc={''} pkl={''} sent={''} />
      </div>
    </>
  );
};

export default GlobalPing;
