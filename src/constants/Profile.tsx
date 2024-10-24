import React from 'react';
import TableOne from '../components/Tables/TableOne';

const Profile: React.FC = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        {/* Top Section */}
        <div className="test-section bg-gray-200 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <input
              type="text"
              placeholder="Enter an ip address or hostname ..."
              className="py-4 px-10 col-span-3 border rounded border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            />
            <button className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
              <p>Run Test</p>
            </button>
            <input
              type="text"
              placeholder="Filter"
              className="py-4 px-10 col-span-4 border rounded border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            />
          </div>
        </div>

        {/* Middle Section */}
        <TableOne/>
      
      </div>
    </>
  );
};

export default Profile;
