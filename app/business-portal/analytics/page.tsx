'use client';

import { useState, useEffect } from 'react';
import { dataService, AnalyticsData } from '../services/dataService';
import AnalyticsChart from '../components/AnalyticsChart';
import MetricCard from '../components/MetricCard';

export default function AnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

  useEffect(() => {
    loadAnalyticsData();
  }, [selectedTimeRange]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    try {
      const data = await dataService.getAnalyticsData();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const totalRevenue = analyticsData?.revenue.reduce((sum, item) => sum + item.value, 0) || 0;
  const totalUsers = analyticsData?.users.reduce((sum, item) => sum + item.value, 0) || 0;
  const totalOrders = analyticsData?.orders.reduce((sum, item) => sum + item.value, 0) || 0;
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          icon="💰"
          trend="+18.2%"
          trendUp={true}
        />
        <MetricCard
          title="Total Users"
          value={totalUsers.toLocaleString()}
          icon="👥"
          trend="+12.5%"
          trendUp={true}
        />
        <MetricCard
          title="Total Orders"
          value={totalOrders.toLocaleString()}
          icon="📦"
          trend="+8.7%"
          trendUp={true}
        />
        <MetricCard
          title="Avg Order Value"
          value={`$${avgOrderValue.toFixed(2)}`}
          icon="📊"
          trend="+5.3%"
          trendUp={true}
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <AnalyticsChart 
            data={analyticsData?.revenue || []} 
            type="area" 
            color="#3B82F6"
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <AnalyticsChart 
            data={analyticsData?.users || []} 
            type="line" 
            color="#10B981"
          />
        </div>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Orders Overview</h3>
          <AnalyticsChart 
            data={analyticsData?.orders || []} 
            type="bar" 
            color="#F59E0B"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="text-sm font-medium">3.2%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Customer Satisfaction</span>
              <span className="text-sm font-medium">4.8/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '96%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Return Rate</span>
              <span className="text-sm font-medium">2.1%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: '21%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing</h3>
          <div className="space-y-3">
            {[
              { name: 'Product A', value: '$12,450', change: '+15%' },
              { name: 'Product B', value: '$8,920', change: '+8%' },
              { name: 'Product C', value: '$6,780', change: '+12%' },
              { name: 'Product D', value: '$5,340', change: '+5%' },
              { name: 'Product E', value: '$4,210', change: '+18%' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.value}</p>
                </div>
                <span className="text-xs text-green-600 font-medium">{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
