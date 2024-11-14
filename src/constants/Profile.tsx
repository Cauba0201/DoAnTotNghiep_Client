import React, { useState } from 'react';
import TableOne from '../components/Tables/TableOne';
import axios from 'axios';

interface PingResult {
  location: string;
  ip: string;
  ltc: string;
  pkl: string;
  sent: string;
}

const Profile: React.FC<PingResult> = () => {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState<PingResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePing = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/ping/', { ip });
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Ping fail', error);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="container mx-auto p-4">
        {/* Top Section */}
        <div className="test-section bg-gray-200 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <input
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              type="text"
              placeholder="Enter an ip address or hostname ..."
              className="py-4 px-10 col-span-3 border rounded border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            />
            <button
              onClick={handlePing}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Running...
                </>
              ) : (
                <p>Run Test</p>
              )}
            </button>
            <input
              type="text"
              placeholder="Filter"
              className="py-4 px-10 col-span-4 border rounded border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            />
          </div>
        </div>

        {/* Middle Section */}
        <TableOne />
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>IP/Host</th>
              <th>LTC</th>
              <th>PKL</th>
              <th>Sent</th>
            </tr>
          </thead>
          <tbody>
            {result.map((result, index) => (
              <tr key={index}>
                <td>{result.location}</td>
                <td>{result.ip}</td>
                <td>{result.ltc}</td>
                <td>{result.pkl}</td>
                <td>{result.sent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;
