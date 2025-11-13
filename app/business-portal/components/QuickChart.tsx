interface QuickChartProps {
  type: 'line' | 'bar';
}

export default function QuickChart({ type }: QuickChartProps) {
  // Mock chart data - replace with actual chart library when dependencies are installed
  const mockData = Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    value: Math.floor(Math.random() * 100) + 20
  }));

  return (
    <div className="h-64 flex items-end justify-between space-x-2 p-4 bg-gray-50 rounded">
      {mockData.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <div 
            className={`w-8 ${type === 'bar' ? 'bg-blue-500' : 'bg-green-500'} rounded-t`}
            style={{ height: `${item.value}%` }}
          ></div>
          <span className="text-xs text-gray-600">{item.day}</span>
        </div>
      ))}
      <div className="absolute top-2 right-2 text-xs text-gray-500">
        {type === 'line' ? '📈 Line Chart' : '📊 Bar Chart'} (Mock)
      </div>
    </div>
  );
}
