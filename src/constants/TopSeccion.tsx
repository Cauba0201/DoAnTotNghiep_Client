<div className="test-section bg-gray-200 p-4 rounded-lg mb-4">
  <h3 className="font-bold">Test</h3>
  <div className="grid grid-cols-3 gap-4 items-center">
    {/* Speedtest Ookla */}
    <div className="flex items-center justify-between">
      <label>Speedtest Ookla</label>
      <input type="checkbox" checked={tests.ookla} onChange={() => toggleTest('ookla')} />
    </div>
    <input type="number" defaultValue={3000} className="p-2 border rounded" />
    <select className="p-2 border rounded">
      <option>Tự động</option>
    </select>

    {/* ISpeed - VNNIC */}
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
