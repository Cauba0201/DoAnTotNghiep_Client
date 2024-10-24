import { BRAND } from '../../types/brand';
import BrandOne from '../../images/flags/SG.svg';
import BrandTwo from '../../images/flags/HK.svg';
import BrandThree from '../../images/flags/TW.svg';
import BrandFour from '../../images/flags/GB-ENG.svg';
import BrandFive from '../../images/flags/US.svg';

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Singapore',
    ip: '142.126.97.26',
    revenues: '5,768',
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: BrandTwo,
    name: 'Hongkong',
    ip: '142.126.97.26',
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'Taiwan',
    ip: '142.126.97.26',
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'UK',
    ip: '142.126.97.26',
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'US',
    ip: '142.126.97.26',
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Location
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              IP/Host
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">LTC</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">PKL</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              SENT
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.ip}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
