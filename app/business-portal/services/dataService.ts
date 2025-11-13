// Data service layer for easy API integration
// Replace these mock functions with actual API calls during integration

export interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  activeUsers: number;
  conversionRate: number;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
}

export interface TableRow {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  amount: number;
  date: string;
}

export interface AnalyticsData {
  revenue: ChartData[];
  users: ChartData[];
  orders: ChartData[];
}

// Mock data - replace with API calls
export const dataService = {
  // Dashboard data
  async getDashboardMetrics(): Promise<DashboardMetrics> {
    // TODO: Replace with actual API call
    // return fetch('/api/dashboard/metrics').then(res => res.json());
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalRevenue: 125000,
          totalOrders: 1250,
          activeUsers: 8500,
          conversionRate: 3.2
        });
      }, 500);
    });
  },

  // Table data
  async getTableData(page: number = 1, limit: number = 10, search?: string): Promise<{ data: TableRow[], total: number }> {
    // TODO: Replace with actual API call
    // return fetch(`/api/table-data?page=${page}&limit=${limit}&search=${search}`).then(res => res.json());
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData: TableRow[] = Array.from({ length: 50 }, (_, i) => ({
          id: `user-${i + 1}`,
          name: `User ${i + 1}`,
          email: `user${i + 1}@example.com`,
          status: ['active', 'inactive', 'pending'][Math.floor(Math.random() * 3)] as any,
          amount: Math.floor(Math.random() * 10000) + 1000,
          date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        }));

        let filteredData = mockData;
        if (search) {
          filteredData = mockData.filter(item => 
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase())
          );
        }

        const startIndex = (page - 1) * limit;
        const paginatedData = filteredData.slice(startIndex, startIndex + limit);

        resolve({
          data: paginatedData,
          total: filteredData.length
        });
      }, 300);
    });
  },

  // Analytics data
  async getAnalyticsData(): Promise<AnalyticsData> {
    // TODO: Replace with actual API call
    // return fetch('/api/analytics').then(res => res.json());
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const last30Days = Array.from({ length: 30 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (29 - i));
          return date.toISOString().split('T')[0];
        });

        resolve({
          revenue: last30Days.map((date, i) => ({
            name: date,
            value: Math.floor(Math.random() * 5000) + 2000,
            date
          })),
          users: last30Days.map((date, i) => ({
            name: date,
            value: Math.floor(Math.random() * 200) + 100,
            date
          })),
          orders: last30Days.map((date, i) => ({
            name: date,
            value: Math.floor(Math.random() * 50) + 20,
            date
          }))
        });
      }, 400);
    });
  },

  // Settings/Form submission
  async updateSettings(settings: any): Promise<{ success: boolean; message: string }> {
    // TODO: Replace with actual API call
    // return fetch('/api/settings', { method: 'PUT', body: JSON.stringify(settings) }).then(res => res.json());
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Settings updated successfully'
        });
      }, 1000);
    });
  }
};
