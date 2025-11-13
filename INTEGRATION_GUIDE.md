# Business Portal - Backend Integration Guide

This guide is for the backend/integration team to connect the Business Portal frontend with your APIs.

## 🎯 Quick Start

All API integration points are centralized in one file:
```
app/business-portal/services/dataService.ts
```

## 📋 Required API Endpoints

### 1. Dashboard Metrics
**Endpoint**: `GET /api/dashboard/metrics`

**Response**:
```json
{
  "totalRevenue": 125000,
  "totalOrders": 1250,
  "activeUsers": 8500,
  "conversionRate": 3.2
}
```

**Used in**: Dashboard page (`/business-portal`)

---

### 2. Table Data (Paginated)
**Endpoint**: `GET /api/table-data`

**Query Parameters**:
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `search` (string, optional): Search query

**Response**:
```json
{
  "data": [
    {
      "id": "user-1",
      "name": "John Doe",
      "email": "john@example.com",
      "status": "active",
      "amount": 5000,
      "date": "2024-11-13"
    }
  ],
  "total": 50
}
```

**Used in**: Data Table page (`/business-portal/data-table`)

---

### 3. Analytics Data
**Endpoint**: `GET /api/analytics`

**Response**:
```json
{
  "revenue": [
    { "name": "2024-11-01", "value": 3500, "date": "2024-11-01" },
    { "name": "2024-11-02", "value": 4200, "date": "2024-11-02" }
  ],
  "users": [
    { "name": "2024-11-01", "value": 150, "date": "2024-11-01" },
    { "name": "2024-11-02", "value": 180, "date": "2024-11-02" }
  ],
  "orders": [
    { "name": "2024-11-01", "value": 35, "date": "2024-11-01" },
    { "name": "2024-11-02", "value": 42, "date": "2024-11-02" }
  ]
}
```

**Used in**: Analytics page (`/business-portal/analytics`)

---

### 4. Update Settings
**Endpoint**: `PUT /api/settings`

**Request Body**: (varies based on settings type)
```json
{
  "companyName": "Gerayo Amahoro",
  "email": "admin@gerayoamahoro.com",
  "phone": "+250 788 123 456",
  "timezone": "Africa/Kigali",
  "language": "en",
  "currency": "RWF"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Settings updated successfully"
}
```

**Used in**: Settings page (`/business-portal/settings`)

---

## 🔧 Integration Steps

### Step 1: Set API Base URL

Create or update `.env.local`:
```env
NEXT_PUBLIC_API_BASE_URL=https://api.gerayoamahoro.com
```

### Step 2: Update dataService.ts

Open `app/business-portal/services/dataService.ts` and replace each function:

**Before** (Mock):
```typescript
async getDashboardMetrics(): Promise<DashboardMetrics> {
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
}
```

**After** (Real API):
```typescript
async getDashboardMetrics(): Promise<DashboardMetrics> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/dashboard/metrics`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add auth token if needed:
      // 'Authorization': `Bearer ${getAuthToken()}`
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard metrics');
  }
  
  return response.json();
}
```

### Step 3: Add Authentication (if needed)

If your API requires authentication, create an auth helper:

```typescript
// app/business-portal/services/auth.ts
export function getAuthToken(): string | null {
  // Get token from localStorage, cookies, or your auth provider
  return localStorage.getItem('authToken');
}

export function getAuthHeaders(): HeadersInit {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
}
```

Then use it in dataService:
```typescript
import { getAuthHeaders } from './auth';

async getDashboardMetrics(): Promise<DashboardMetrics> {
  const response = await fetch(`${API_BASE_URL}/api/dashboard/metrics`, {
    headers: getAuthHeaders(),
  });
  // ...
}
```

### Step 4: Error Handling

The frontend already handles errors. Ensure your API returns proper error responses:

```json
{
  "error": "Invalid request",
  "message": "User not found",
  "statusCode": 404
}
```

### Step 5: Test Each Endpoint

1. Start the dev server: `npm run dev`
2. Navigate to each page and verify data loads correctly
3. Test error cases (network errors, 404s, etc.)
4. Verify loading states work properly

---

## 🔐 Security Considerations

1. **CORS**: Ensure your API allows requests from your frontend domain
2. **Authentication**: Add JWT tokens or session cookies to requests
3. **HTTPS**: Use HTTPS in production
4. **Rate Limiting**: Implement rate limiting on your API
5. **Input Validation**: Validate all data on the backend

---

## 📊 Data Types Reference

All TypeScript interfaces are defined in `services/dataService.ts`:

```typescript
interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  activeUsers: number;
  conversionRate: number;
}

interface TableRow {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  amount: number;
  date: string;
}

interface ChartData {
  name: string;
  value: number;
  date?: string;
}

interface AnalyticsData {
  revenue: ChartData[];
  users: ChartData[];
  orders: ChartData[];
}
```

---

## 🧪 Testing Checklist

- [ ] Dashboard metrics load correctly
- [ ] Table data displays with pagination
- [ ] Search functionality works
- [ ] Status filters work
- [ ] Analytics charts render with real data
- [ ] Settings save successfully
- [ ] Error messages display properly
- [ ] Loading states show during API calls
- [ ] Authentication works (if implemented)
- [ ] All pages are responsive on mobile

---

## 🆘 Troubleshooting

### Issue: CORS errors
**Solution**: Add CORS headers to your API responses:
```
Access-Control-Allow-Origin: https://yourdomain.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

### Issue: Data not loading
**Solution**: 
1. Check browser console for errors
2. Verify API endpoint URLs are correct
3. Check network tab in DevTools
4. Ensure API is running and accessible

### Issue: Authentication errors
**Solution**:
1. Verify auth token is being sent
2. Check token expiration
3. Ensure token format matches backend expectations

---

## 📞 Support

For integration support, contact the frontend team or refer to:
- Main README: `/app/business-portal/README.md`
- Data Service: `/app/business-portal/services/dataService.ts`
- Component Documentation: Individual component files

---

## 🚀 Deployment

Before deploying to production:

1. Update environment variables in your hosting platform
2. Test all API endpoints in staging environment
3. Enable error tracking (e.g., Sentry)
4. Set up monitoring for API performance
5. Configure CDN for static assets
6. Enable compression and caching

---

**Last Updated**: November 13, 2024
**Frontend Version**: 1.0.0
**Compatible Backend API Version**: 1.0.0+
