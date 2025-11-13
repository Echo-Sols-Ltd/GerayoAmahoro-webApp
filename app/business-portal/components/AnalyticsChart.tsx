import { ChartData } from '../services/dataService';

interface AnalyticsChartProps {
  data: ChartData[];
  type: 'line' | 'bar' | 'area';
  color: string;
}

export default function AnalyticsChart({ data, type, color }: AnalyticsChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        No data available
      </div>
    );
  }

  const maxValue = Math.max(...data.map(item => item.value));
  const minValue = Math.min(...data.map(item => item.value));
  const range = maxValue - minValue;

  return (
    <div className="h-64 relative">
      {/* Chart Container */}
      <div className="h-full flex items-end justify-between space-x-1 p-4 bg-gray-50 rounded relative">
        {data.map((item, index) => {
          const height = range > 0 ? ((item.value - minValue) / range) * 80 + 10 : 50;
          
          return (
            <div key={index} className="flex flex-col items-center space-y-1 flex-1">
              {/* Bar/Line Point */}
              <div className="relative flex-1 flex items-end">
                {type === 'bar' && (
                  <div 
                    className="w-full rounded-t transition-all duration-300 hover:opacity-80"
                    style={{ 
                      height: `${height}%`, 
                      backgroundColor: color,
                      minHeight: '4px'
                    }}
                    title={`${item.name}: ${item.value}`}
                  ></div>
                )}
                
                {(type === 'line' || type === 'area') && (
                  <>
                    {type === 'area' && (
                      <div 
                        className="w-full rounded-t opacity-30"
                        style={{ 
                          height: `${height}%`, 
                          backgroundColor: color,
                          minHeight: '2px'
                        }}
                      ></div>
                    )}
                    <div 
                      className="absolute w-2 h-2 rounded-full border-2 border-white shadow-sm"
                      style={{ 
                        backgroundColor: color,
                        bottom: `${height}%`,
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      title={`${item.name}: ${item.value}`}
                    ></div>
                    
                    {/* Connect lines between points */}
                    {index < data.length - 1 && (
                      <div 
                        className="absolute border-t-2"
                        style={{
                          borderColor: color,
                          width: '100%',
                          left: '50%',
                          bottom: `${height}%`,
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                    )}
                  </>
                )}
              </div>
              
              {/* Label */}
              <span className="text-xs text-gray-600 text-center">
                {item.date ? new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : item.name}
              </span>
            </div>
          );
        })}
        
        {/* Chart Type Indicator */}
        <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">
          {type === 'line' && '📈 Line'}
          {type === 'bar' && '📊 Bar'}
          {type === 'area' && '📉 Area'}
        </div>
      </div>
      
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
        <span>{maxValue.toLocaleString()}</span>
        <span>{Math.round((maxValue + minValue) / 2).toLocaleString()}</span>
        <span>{minValue.toLocaleString()}</span>
      </div>
    </div>
  );
}
