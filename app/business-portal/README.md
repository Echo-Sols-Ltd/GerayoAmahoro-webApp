# Business Portal

A comprehensive business management portal with 4 main pages for managing business operations.

## 📁 Structure

```
business-portal/
├── page.tsx                    # Page 1: Dashboard Overview
├── data-table/
│   └── page.tsx               # Page 2: Data Management Table
├── analytics/
│   └── page.tsx               # Page 3: Analytics Dashboard
├── settings/
│   └── page.tsx               # Page 4: Settings & Configuration
├── components/
│   ├── Navigation.tsx         # Top navigation bar
│   ├── MetricCard.tsx         # Reusable metric display card
│   ├── QuickChart.tsx         # Simple chart component
│   ├── DataTable.tsx          # Data table with pagination
│   ├── SearchFilter.tsx       # Search and filter controls
│   ├── AnalyticsChart.tsx     # Advanced chart component
│   ├── SettingsForm.tsx       # General settings form
│   ├── NotificationSettings.tsx # Notification preferences
│   └── SecuritySettings.tsx   # Security settings
├── services/
│   └── dataService.ts         # Data service layer for API integration
└── layout.tsx                 # Shared layout for all portal pages
```

## 🚀 Pages Overview

### Page 1: Dashboard Overview (`/business-portal`)
- **Metrics Cards**: Total Revenue, Orders, Active Users, Conversion Rate
- **Charts**: Revenue Overview, User Activity
- **Recent Activity**: Latest transactions and events

### Page 2: Data Management (`/business-portal/data-table`)
- **Data Table**: Sortable, paginated table with user data
- **Search & Filters**: Search by name/email, filter by status and date
- **Actions**: Edit, Delete, Export functionality
- **Summary Stats**: Quick overview of record counts

### Page 3: Analytics Dashboard (`/business-portal/analytics`)
- **Summary Metrics**: Revenue, Users, Orders, Avg Order Value
- **Charts**: Revenue Trend (Area), User Growth (Line), Orders (Bar)
- **Performance Metrics**: Conversion Rate, Customer Satisfaction, Return Rate
- **Top Performing**: List of best-performing products

### Page 4: Settings (`/business-portal/settings`)
- **General Tab**: Company info, timezone, language, currency settings
- **Notifications Tab**: Email, Push, SMS notification preferences
- **Security Tab**: Password change, 2FA, session management
- **Billing Tab**: Current plan, payment method, billing history

## 🔌 API Integration Guide

All data is currently mocked in `services/dataService.ts`. To integrate with your backend:

### Step 1: Update the Data Service

Replace the mock implementations in `services/dataService.ts` with actual API calls:

```typescript
// Example: Replace mock with real API call
async getDashboardMetrics(): Promise<DashboardMetrics> {
  // Replace this:
  // return new Promise((resolve) => { ... });
  
  // With this:
  const response = await fetch('/api/dashboard/metrics');
  if (!response.ok) throw new Error('Failed to fetch metrics');
  return response.json();
}
```

### Step 2: API Endpoints Needed

The integration team needs to implement these endpoints:

#### Dashboard
- `GET /api/dashboard/metrics` - Returns dashboard metrics
  ```typescript
  Response: {
    totalRevenue: number;
    totalOrders: number;
    activeUsers: number;
    conversionRate: number;
  }
  ```

#### Data Table
- `GET /api/table-data?page=1&limit=10&search=query` - Returns paginated table data
  ```typescript
  Response: {
    data: TableRow[];
    total: number;
  }
  ```

#### Analytics
- `GET /api/analytics` - Returns analytics data
  ```typescript
  Response: {
    revenue: ChartData[];
    users: ChartData[];
    orders: ChartData[];
  }
  ```

#### Settings
- `PUT /api/settings` - Updates settings
  ```typescript
  Request Body: { ...settings }
  Response: { success: boolean; message: string; }
  ```

### Step 3: Environment Variables

Add API base URL to your `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com
```

Then update the service to use it:

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
```

### Step 4: Error Handling

The components already handle loading and error states. Ensure your API returns appropriate error messages.

## 🎨 Customization

### Colors
The portal uses Tailwind CSS. Main colors:
- Primary: `blue-600` (buttons, links)
- Success: `green-600` (positive metrics)
- Warning: `yellow-600` (pending states)
- Danger: `red-600` (errors, delete actions)

### Styling
All components use Tailwind CSS classes. Modify in the component files or extend in `tailwind.config.js`.

## 📦 Dependencies

Current dependencies:
- Next.js 16.0.1
- React 19.2.0
- TypeScript
- Tailwind CSS

Optional (for enhanced charts):
```bash
npm install lucide-react recharts @headlessui/react clsx
```

## 🔐 Authentication

The portal doesn't include authentication yet. Add authentication by:
1. Wrapping the layout with an auth provider
2. Adding middleware to protect routes
3. Including auth tokens in API calls

## 📱 Responsive Design

All pages are fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🧪 Testing

To test the portal:
```bash
npm run dev
```

Navigate to: `http://localhost:3000/business-portal`

## 📝 Notes

- All data is currently mocked for development
- Charts use simple CSS-based visualizations (can be replaced with libraries like Recharts)
- Forms include validation but need backend validation as well
- Pagination, search, and filters are client-side (should be server-side in production)

## 🚧 Future Enhancements

- Real-time data updates with WebSockets
- Export functionality (CSV, PDF)
- Advanced filtering and sorting
- Bulk actions for data table
- Role-based access control
- Dark mode support
- Multi-language support
