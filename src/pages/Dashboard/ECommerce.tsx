import React, { useEffect, useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import GeoChart from '../../components/Maps/GeoChart';
import TableOne from '../../components/Tables/TableOne';
import logoViettel from '../../images/imgISP/Logo-Tap-doan-vien-thong-Viettel-Moi-02-01-1024x640.jpg';
import logoFPT from '../../images/imgISP/y-nghia-logo-fpt-lan-3.jpg';
import logoVNPT from '../../images/imgISP/logo-vnpt-inkythuatso-01-01-14-56-59.jpg';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Slider from 'react-slick';

interface TestItems {
  country: string;
  avg_latency: string;
  packet_loss: string;
}

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

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Breadcrumb pageName="Connect Network" />
      {/* VIETTEL */}
      {/* <Slider {...settings} className=''> */}
        {testList.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 "
          >
              <CardDataStats
                title="Country"
                total={item.country || 'Not Found'}
                rate=""
                levelUp={false}
                isp={false}
                img={''}
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6945 13.4365 18.2761Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M5.00602 5.8339L4.59438 5.48184C4.56011 5.45252 4.52734 5.42182 4.49611 5.38985C2.94252 7.15213 2 9.466 2 12C2 17.4608 6.37707 21.8992 11.8142 21.9983C11.4608 20.9435 11.2302 19.234 12.1116 17.5732C12.9217 16.0465 14.5516 15.4456 15.5899 15.1903C16.1567 15.051 16.6778 14.9831 17.0542 14.9493C17.2442 14.9323 17.4018 14.9235 17.5156 14.919C17.5726 14.9168 17.6189 14.9156 17.6531 14.9149L17.6952 14.9143L17.7064 14.9143C19.0872 14.8991 19.6231 14.4916 19.8704 14.2132C20.1763 13.8688 20.2962 13.4605 20.4632 12.8917L20.4849 12.818C20.683 12.1447 21.3156 11.7093 21.9968 11.743C21.934 9.25352 20.9613 6.99003 19.3989 5.27266C19.3673 5.45036 19.3297 5.61557 19.2921 5.76183C19.1225 6.4234 18.8378 7.13716 18.4884 7.66739C18.1465 8.1863 17.5392 8.64995 17.1355 8.94003C16.8308 9.15893 16.5194 9.34078 16.2628 9.48867L16.1707 9.54169C15.939 9.67497 15.7548 9.78114 15.5794 9.89699C15.2234 10.1322 15.0099 10.3411 14.8652 10.6241C14.9532 10.9464 15.0157 11.3168 15.0167 11.7041C15.0191 12.6256 14.5474 13.3537 13.9836 13.8081C13.4289 14.2551 12.7112 14.5078 11.984 14.4999C9.03417 14.4677 7.30397 12.0613 7.08118 9.5816C7.0164 8.8606 6.69205 8.08373 6.23879 7.35988C5.798 6.65591 5.29975 6.10474 5.00602 5.8339Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55132 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z"
                    fill="#1C274C"
                  />
                </svg>
              </CardDataStats>
              <CardDataStats
                title="ISP"
                total="Viettel"
                rate=""
                levelUp={false}
                isp
                img={logoViettel}
              >
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                >
                  <path
                    fill="#231F20"
                    d="M56,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h20V48h8v16h20c2.211,0,4-1.789,4-4V4
	            C60,1.789,58.211,0,56,0z M28,40h-8v-8h8V40z M28,24h-8v-8h8V24z M44,40h-8v-8h8V40z M44,24h-8v-8h8V24z"
                  />
                </svg>
              </CardDataStats>
              <CardDataStats
                title="Latency (Avg)"
                total={`${item.avg_latency || 'Not Found'} MS`}
                rate="2.59%"
                levelUp
                isp={false}
                img={''}
              >
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                >
                  <path
                    d="M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S14.4,2,10,2
	z"
                  />
                  <path d="M8.6,11.4c-0.8-0.8-2.8-5.7-2.8-5.7s4.9,2,5.7,2.8c0.8,0.8,0.8,2,0,2.8C10.6,12.2,9.4,12.2,8.6,11.4z" />
                </svg>
              </CardDataStats>
              <CardDataStats
                title="Packet Loss"
                total={`${item.packet_loss || 'Not Found'} %`}
                rate="0.95%"
                levelDown
                isp={false}
                img={''}
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 20.2476L20.2374 16M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11.5M9 13H13M9 9H10M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </CardDataStats>
          </div>
        ))}
      {/* </Slider> */}
      {/* VNPT */}
      <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Country"
          total="Singapore"
          rate="0.43%"
          levelUp
          isp={false}
          img={''}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6945 13.4365 18.2761Z"
              fill="#1C274C"
            />
            <path
              d="M5.00602 5.8339L4.59438 5.48184C4.56011 5.45252 4.52734 5.42182 4.49611 5.38985C2.94252 7.15213 2 9.466 2 12C2 17.4608 6.37707 21.8992 11.8142 21.9983C11.4608 20.9435 11.2302 19.234 12.1116 17.5732C12.9217 16.0465 14.5516 15.4456 15.5899 15.1903C16.1567 15.051 16.6778 14.9831 17.0542 14.9493C17.2442 14.9323 17.4018 14.9235 17.5156 14.919C17.5726 14.9168 17.6189 14.9156 17.6531 14.9149L17.6952 14.9143L17.7064 14.9143C19.0872 14.8991 19.6231 14.4916 19.8704 14.2132C20.1763 13.8688 20.2962 13.4605 20.4632 12.8917L20.4849 12.818C20.683 12.1447 21.3156 11.7093 21.9968 11.743C21.934 9.25352 20.9613 6.99003 19.3989 5.27266C19.3673 5.45036 19.3297 5.61557 19.2921 5.76183C19.1225 6.4234 18.8378 7.13716 18.4884 7.66739C18.1465 8.1863 17.5392 8.64995 17.1355 8.94003C16.8308 9.15893 16.5194 9.34078 16.2628 9.48867L16.1707 9.54169C15.939 9.67497 15.7548 9.78114 15.5794 9.89699C15.2234 10.1322 15.0099 10.3411 14.8652 10.6241C14.9532 10.9464 15.0157 11.3168 15.0167 11.7041C15.0191 12.6256 14.5474 13.3537 13.9836 13.8081C13.4289 14.2551 12.7112 14.5078 11.984 14.4999C9.03417 14.4677 7.30397 12.0613 7.08118 9.5816C7.0164 8.8606 6.69205 8.08373 6.23879 7.35988C5.798 6.65591 5.29975 6.10474 5.00602 5.8339Z"
              fill="#1C274C"
            />
            <path
              d="M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55132 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z"
              fill="#1C274C"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="ISP"
          total="VNPT"
          rate="4.35%"
          levelUp
          isp
          img={logoVNPT}
        >
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <path
              fill="#231F20"
              d="M56,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h20V48h8v16h20c2.211,0,4-1.789,4-4V4
	            C60,1.789,58.211,0,56,0z M28,40h-8v-8h8V40z M28,24h-8v-8h8V24z M44,40h-8v-8h8V40z M44,24h-8v-8h8V24z"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Latency (Avg)"
          total="45 MS"
          rate="2.59%"
          levelUp
          isp={false}
          img={''}
        >
          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
          >
            <path
              d="M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S14.4,2,10,2
	z"
            />
            <path d="M8.6,11.4c-0.8-0.8-2.8-5.7-2.8-5.7s4.9,2,5.7,2.8c0.8,0.8,0.8,2,0,2.8C10.6,12.2,9.4,12.2,8.6,11.4z" />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Packet Loss"
          total="20%"
          rate="0.95%"
          levelDown
          isp={false}
          img={''}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 20.2476L20.2374 16M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11.5M9 13H13M9 9H10M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CardDataStats>
      </div>
      {/* </Slider> */}

      {/* FPT */}
      <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Country"
          total="Singapore"
          rate="0.43%"
          levelUp
          isp={false}
          img={''}
          // img={logoFPT}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6945 13.4365 18.2761Z"
              fill="#1C274C"
            />
            <path
              d="M5.00602 5.8339L4.59438 5.48184C4.56011 5.45252 4.52734 5.42182 4.49611 5.38985C2.94252 7.15213 2 9.466 2 12C2 17.4608 6.37707 21.8992 11.8142 21.9983C11.4608 20.9435 11.2302 19.234 12.1116 17.5732C12.9217 16.0465 14.5516 15.4456 15.5899 15.1903C16.1567 15.051 16.6778 14.9831 17.0542 14.9493C17.2442 14.9323 17.4018 14.9235 17.5156 14.919C17.5726 14.9168 17.6189 14.9156 17.6531 14.9149L17.6952 14.9143L17.7064 14.9143C19.0872 14.8991 19.6231 14.4916 19.8704 14.2132C20.1763 13.8688 20.2962 13.4605 20.4632 12.8917L20.4849 12.818C20.683 12.1447 21.3156 11.7093 21.9968 11.743C21.934 9.25352 20.9613 6.99003 19.3989 5.27266C19.3673 5.45036 19.3297 5.61557 19.2921 5.76183C19.1225 6.4234 18.8378 7.13716 18.4884 7.66739C18.1465 8.1863 17.5392 8.64995 17.1355 8.94003C16.8308 9.15893 16.5194 9.34078 16.2628 9.48867L16.1707 9.54169C15.939 9.67497 15.7548 9.78114 15.5794 9.89699C15.2234 10.1322 15.0099 10.3411 14.8652 10.6241C14.9532 10.9464 15.0157 11.3168 15.0167 11.7041C15.0191 12.6256 14.5474 13.3537 13.9836 13.8081C13.4289 14.2551 12.7112 14.5078 11.984 14.4999C9.03417 14.4677 7.30397 12.0613 7.08118 9.5816C7.0164 8.8606 6.69205 8.08373 6.23879 7.35988C5.798 6.65591 5.29975 6.10474 5.00602 5.8339Z"
              fill="#1C274C"
            />
            <path
              d="M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55132 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z"
              fill="#1C274C"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="ISP"
          total="FPT"
          rate="4.35%"
          levelUp
          isp
          img={logoFPT}
        >
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <path
              fill="#231F20"
              d="M56,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h20V48h8v16h20c2.211,0,4-1.789,4-4V4
	            C60,1.789,58.211,0,56,0z M28,40h-8v-8h8V40z M28,24h-8v-8h8V24z M44,40h-8v-8h8V40z M44,24h-8v-8h8V24z"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Latency (Avg)"
          total="45 MS"
          rate="2.59%"
          levelUp
          isp={false}
          img={''}
        >
          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
          >
            <path
              d="M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S14.4,2,10,2
	z"
            />
            <path d="M8.6,11.4c-0.8-0.8-2.8-5.7-2.8-5.7s4.9,2,5.7,2.8c0.8,0.8,0.8,2,0,2.8C10.6,12.2,9.4,12.2,8.6,11.4z" />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Packet Loss"
          total="20%"
          rate="0.95%"
          levelDown
          isp={false}
          img={''}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 20.2476L20.2374 16M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11.5M9 13H13M9 9H10M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <GeoChart />
        <div className="col-span-12 ">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
