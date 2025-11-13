# Component Reference Guide

Quick reference for all reusable components in the Business Portal.

## 🧩 Component List

### 1. Navigation
**File**: `components/Navigation.tsx`  
**Type**: Client Component  
**Purpose**: Top navigation bar with page links

**Usage**:
```tsx
<Navigation />
```

**Features**:
- Active page highlighting
- Responsive design
- Icon + text labels
- Hover effects

---

### 2. MetricCard
**File**: `components/MetricCard.tsx`  
**Type**: Server Component  
**Purpose**: Display key metrics with optional trend indicators

**Props**:
```typescript
interface MetricCardProps {
  title: string;        // Metric name
  value: string;        // Metric value (formatted)
  icon: string;         // Emoji icon
  trend?: string;       // e.g., "+12.5%"
  trendUp?: boolean;    // true = green, false = red
}
```

**Usage**:
```tsx
<MetricCard
  title="Total Revenue"
  value="$125,000"
  icon="💰"
  trend="+12.5%"
  trendUp={true}
/>
```

**Styling**:
- White background with border
- Shadow on hover
- Responsive padding
- Trend colors: green (up) / red (down)

---

### 3. QuickChart
**File**: `components/QuickChart.tsx`  
**Type**: Server Component  
**Purpose**: Simple bar/line charts for dashboard

**Props**:
```typescript
interface QuickChartProps {
  type: 'line' | 'bar';
}
```

**Usage**:
```tsx
<QuickChart type="bar" />
<QuickChart type="line" />
```

**Features**:
- CSS-based visualization
- 7-day mock data
- Responsive height (h-64)
- Day labels

**Note**: Replace with Recharts for production charts

---

### 4. DataTable
**File**: `components/DataTable.tsx`  
**Type**: Server Component  
**Purpose**: Paginated data table with actions

**Props**:
```typescript
interface DataTableProps {
  data: TableRow[];
  loading: boolean;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}
```

**Usage**:
```tsx
<DataTable
  data={tableData}
  loading={isLoading}
  currentPage={1}
  totalItems={50}
  itemsPerPage={10}
  onPageChange={setCurrentPage}
/>
```

**Features**:
- Sortable columns
- Status badges (active/inactive/pending)
- Edit/Delete actions
- Pagination controls
- Loading state
- Hover effects on rows
- Responsive (horizontal scroll on mobile)

**Status Badge Colors**:
- Active: Green (`bg-green-100 text-green-800`)
- Inactive: Red (`bg-red-100 text-red-800`)
- Pending: Yellow (`bg-yellow-100 text-yellow-800`)

---

### 5. SearchFilter
**File**: `components/SearchFilter.tsx`  
**Type**: Server Component  
**Purpose**: Search and filter controls for data table

**Props**:
```typescript
interface SearchFilterProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  statusFilter: string;
  onStatusFilter: (status: string) => void;
}
```

**Usage**:
```tsx
<SearchFilter
  searchTerm={search}
  onSearch={setSearch}
  statusFilter={status}
  onStatusFilter={setStatus}
/>
```

**Features**:
- Text search input
- Status dropdown
- Date range selector
- Clear filters button
- Responsive grid layout

---

### 6. AnalyticsChart
**File**: `components/AnalyticsChart.tsx`  
**Type**: Server Component  
**Purpose**: Advanced charts for analytics page

**Props**:
```typescript
interface AnalyticsChartProps {
  data: ChartData[];
  type: 'line' | 'bar' | 'area';
  color: string;  // Hex color code
}
```

**Usage**:
```tsx
<AnalyticsChart
  data={revenueData}
  type="area"
  color="#3B82F6"
/>
```

**Features**:
- Multiple chart types
- Custom colors
- Y-axis labels
- Date formatting
- Hover tooltips
- Responsive height
- Empty state handling

**Chart Types**:
- **Line**: Connected points with border
- **Bar**: Vertical bars
- **Area**: Filled area under line

---

### 7. SettingsForm
**File**: `components/SettingsForm.tsx`  
**Type**: Client Component  
**Purpose**: General settings form

**Props**:
```typescript
interface SettingsFormProps {
  onSave: (settings: any) => void;
  saving: boolean;
}
```

**Usage**:
```tsx
<SettingsForm
  onSave={handleSave}
  saving={isSaving}
/>
```

**Fields**:
- Company Name (text)
- Email (email)
- Phone (tel)
- Address (text)
- Timezone (select)
- Language (select)
- Currency (select)
- Date Format (select)
- Auto-save (checkbox)
- Email Reports (checkbox)
- Dark Mode (checkbox)

**Features**:
- Form validation
- Controlled inputs
- Loading state on submit
- Cancel button
- Responsive grid (2 columns on desktop)

---

### 8. NotificationSettings
**File**: `components/NotificationSettings.tsx`  
**Type**: Client Component  
**Purpose**: Notification preferences management

**Props**:
```typescript
interface NotificationSettingsProps {
  onSave: (settings: any) => void;
  saving: boolean;
}
```

**Usage**:
```tsx
<NotificationSettings
  onSave={handleSave}
  saving={isSaving}
/>
```

**Sections**:
1. **Email Notifications**
   - New Orders
   - Payment Received
   - Low Stock
   - System Updates
   - Marketing Emails

2. **Push Notifications**
   - New Orders
   - Payment Received
   - Low Stock
   - System Alerts

3. **SMS Notifications**
   - Critical Alerts
   - Payment Reminders
   - Order Updates

4. **Notification Frequency**
   - Immediate
   - Hourly digest
   - Daily digest
   - Weekly digest

5. **Quiet Hours**
   - Enable/disable toggle
   - Start time picker
   - End time picker

**Features**:
- Toggle switches for each setting
- Radio buttons for frequency
- Time pickers for quiet hours
- Organized by category
- Icons for each section

---

### 9. SecuritySettings
**File**: `components/SecuritySettings.tsx`  
**Type**: Client Component  
**Purpose**: Security and password management

**Props**:
```typescript
interface SecuritySettingsProps {
  onSave: (settings: any) => void;
  saving: boolean;
}
```

**Usage**:
```tsx
<SecuritySettings
  onSave={handleSave}
  saving={isSaving}
/>
```

**Sections**:
1. **Change Password**
   - Current password
   - New password
   - Confirm password
   - Password requirements hint

2. **Security Settings**
   - Two-Factor Authentication (toggle)
   - Session Timeout (dropdown)
   - Login Notifications (toggle)
   - Device Tracking (toggle)
   - API Access (toggle)

3. **Active Sessions**
   - List of active devices
   - Location and last active time
   - Current session indicator
   - Revoke session button
   - Revoke all button

**Features**:
- Password validation
- Custom toggle switches
- Session management
- Security indicators
- Responsive layout

---

## 🎨 Common Styling Patterns

### Card Container
```tsx
<div className="bg-white p-6 rounded-lg shadow-sm border">
  {/* Content */}
</div>
```

### Button Styles
```tsx
// Primary
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">

// Secondary
<button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">

// Danger
<button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
```

### Input Styles
```tsx
<input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
```

### Loading Spinner
```tsx
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
```

---

## 🔄 State Management Patterns

### Loading State
```tsx
const [loading, setLoading] = useState(true);

if (loading) {
  return <div>Loading...</div>;
}
```

### Form State
```tsx
const [formData, setFormData] = useState({ /* initial values */ });

const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};
```

### API Call Pattern
```tsx
useEffect(() => {
  const loadData = async () => {
    setLoading(true);
    try {
      const data = await dataService.getData();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  loadData();
}, [dependency]);
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
default: < 640px

/* Tablet */
sm: 640px

/* Desktop */
md: 768px
lg: 1024px
xl: 1280px
```

**Usage**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

---

## 🎯 Best Practices

### Component Organization
1. Imports at top
2. Interface/type definitions
3. Component function
4. Helper functions (if any)
5. Export at bottom

### Props Naming
- Use descriptive names
- Boolean props: `isLoading`, `hasError`, `canEdit`
- Handlers: `onSave`, `onChange`, `onClick`
- Data: `data`, `items`, `user`

### Styling
- Use Tailwind utility classes
- Keep consistent spacing
- Follow color system
- Maintain responsive design

### Performance
- Use React.memo for expensive components
- Avoid inline functions in props
- Debounce search inputs
- Lazy load heavy components

---

## 🔧 Customization Guide

### Changing Colors
Update in component files:
```tsx
// From
className="bg-blue-600"

// To
className="bg-purple-600"
```

### Adding New Fields
1. Update interface in `services/dataService.ts`
2. Add field to component
3. Update mock data
4. Update API integration guide

### Modifying Layouts
- Adjust grid columns: `grid-cols-1 md:grid-cols-2`
- Change spacing: `gap-4` → `gap-6`
- Update padding: `p-4` → `p-6`

---

## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

**Last Updated**: November 13, 2024  
**Components**: 9 reusable components  
**Status**: Production Ready
