import  { useState } from 'react';

const TestControlPanel = () => {
  const [tests, setTests] = useState({
    ookla: false,
    vnnic: false,
    webLoadingTime: false,
    videoStreaming: false,
    downloadUpload: false,
    ping: false
  });

  const toggleTest = (testKey: string) => {
    setTests((prev) => ({ ...prev, [testKey]: !prev[testKey] }));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Top Section */}
      <div className="test-section bg-gray-200 p-4 rounded-lg mb-4">
        <h3 className="font-bold">Test</h3>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex items-center justify-between">
            <label>Speedtest Ookla</label>
            <input type="checkbox" checked={tests.ookla} onChange={() => toggleTest('ookla')} />
          </div>
          <input type="number" defaultValue={3000} className="p-2 border rounded" />
          <select className="p-2 border rounded">
            <option>Tự động</option>
          </select>

          <div className="flex items-center justify-between">
            <label>ISpeed - VNNIC</label>
            <input type="checkbox" checked={tests.vnnic} onChange={() => toggleTest('vnnic')} />
          </div>
          <input type="number" defaultValue={3000} className="p-2 border rounded" />
          <select className="p-2 border rounded">
            <option>Tự động</option>
          </select>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <h3 className="font-bold">Bài đo Website</h3>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex items-center justify-between">
            <label>Web Loading Time</label>
            <input type="checkbox" checked={tests.webLoadingTime} onChange={() => toggleTest('webLoadingTime')} />
          </div>
          <input type="number" defaultValue={3000} className="p-2 border rounded" />
          <select className="p-2 border rounded">
            <option>Danh sách trang Web</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex items-center justify-between">
            <label>Video Streaming</label>
            <input type="checkbox" checked={tests.videoStreaming} onChange={() => toggleTest('videoStreaming')} />
          </div>
          <input type="number" defaultValue={3000} className="p-2 border rounded" />
          <select className="p-2 border rounded">
            <option>Danh sách trang Video</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex items-center justify-between">
            <label>Download/Upload</label>
            <input type="checkbox" checked={tests.downloadUpload} onChange={() => toggleTest('downloadUpload')} />
          </div>
          <input type="number" defaultValue={3000} className="p-2 border rounded" />
          <div className="flex gap-2">
            <input type="number" defaultValue={4} className="p-2 border rounded w-16" />
            <input type="number" defaultValue={500} className="p-2 border rounded w-16" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="flex items-center justify-between">
            <label>Ping</label>
            <input type="checkbox" checked={tests.ping} onChange={() => toggleTest('ping')} />
          </div>
          <input type="number" defaultValue={3000} className="p-2 border rounded" />
          <input type="text" className="p-2 border rounded" placeholder="Địa chỉ" />
        </div>
      </div>

      {/* Bottom Section - Scheduling */}
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <h3 className="font-bold">Lịch trình</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label>Bắt đầu</label>
            <input type="date" className="p-2 border rounded w-full" />
            <input type="time" className="p-2 border rounded w-full mt-2" />
          </div>
          <div>
            <label>Kết thúc</label>
            <input type="date" className="p-2 border rounded w-full" />
            <input type="time" className="p-2 border rounded w-full mt-2" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Đặt lịch test</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Quay phiên PPPoE</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Ẩn Chrome</label>
            </div>
          </div>
        </div>
      </div>

      {/* Start/Stop Buttons */}
      <div className="flex justify-between items-center">
        <div className="font-bold">Username: Nguyen An</div>
        <div className="flex gap-4">
          <button className="bg-red-500 text-white p-2 rounded">STOP</button>
          <button className="bg-green-500 text-white p-2 rounded">START</button>
        </div>
      </div>
    </div>
  );
};

export default TestControlPanel;
