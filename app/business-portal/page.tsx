"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone,MessageSquare } from "lucide-react"
import Image from "next/image"
import { MdOutlineAddShoppingCart } from "react-icons/md"

// TypeScript interfaces for data structures
interface DeliveryData {
  id: string;
  type: string;
  senderAddress: string;
  receiverAddress: string;
  dateOfDelivery: string;
  status: {
    label: string;
    color: 'orange' | 'green' | 'red' | 'blue';
  };
  price: string;
}

interface TableColumn {
  key: keyof DeliveryData | 'status';
  label: string;
  render?: (value: any, row: DeliveryData) => React.ReactNode;
}

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  // Sample delivery data - this can be replaced with API data
  const deliveryData: DeliveryData[] = [
    {
      id: '1',
      type: 'Courier',
      senderAddress: 'Lincoln, Kigali',
      receiverAddress: 'LKT1234qwet',
      dateOfDelivery: '25 Jan 2020',
      status: { label: 'Transit', color: 'orange' },
      price: '10$'
    },
    {
      id: '2',
      type: 'Shipping',
      senderAddress: 'Lincoln, Kigali',
      receiverAddress: 'LKT1234qwet',
      dateOfDelivery: '25 Jan 2020',
      status: { label: 'Delivered', color: 'green' },
      price: '10$'
    },
    {
      id: '3',
      type: 'Shipping',
      senderAddress: 'Lincoln, Kigali',
      receiverAddress: 'LKT1234qwet',
      dateOfDelivery: '25 Jan 2020',
      status: { label: 'Transit', color: 'orange' },
      price: '10$'
    },
    {
      id: '4',
      type: 'Express',
      senderAddress: 'Nyarutarama, Kigali',
      receiverAddress: 'KGL5678xyz',
      dateOfDelivery: '26 Jan 2020',
      status: { label: 'Processing', color: 'blue' },
      price: '25$'
    }
  ];
  
  // Table column configuration
  const tableColumns: TableColumn[] = [
    { key: 'type', label: 'Type' },
    { key: 'senderAddress', label: 'Sender Address' },
    { key: 'receiverAddress', label: 'Receiver Address' },
    { key: 'dateOfDelivery', label: 'Date of Delivery' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value, row) => {
        const statusColors = {
          orange: 'text-orange-500 bg-orange-500',
          green: 'text-green-500 bg-green-500',
          red: 'text-red-500 bg-red-500',
          blue: 'text-blue-500 bg-blue-500'
        };
        const colorClass = statusColors[row.status.color] || statusColors.orange;
        return (
          <span className={`inline-flex items-center gap-1 ${colorClass.split(' ')[0]}`}>
            <span className={`w-2 h-2 ${colorClass.split(' ')[1]} rounded-full`} />
            {row.status.label}
          </span>
        );
      }
    },
    { key: 'price', label: 'Price' }
  ];
  
  // Function to render table cell content
  const renderCellContent = (column: TableColumn, row: DeliveryData) => {
    if (column.render) {
      return column.render(row[column.key], row);
    }
    return row[column.key as keyof DeliveryData];
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const today = new Date()
  const isCurrentMonth = currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()
  const currentDay = isCurrentMonth ? today.getDate() : null

  const calendarDays = Array.from({ length: firstDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1),
  )

  // Calendar navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Top Section: Account and Truck Banner Side by Side */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Account Section */}
        <div className="bg-white text-lg font-semibold rounded-lg p-4 sm:p-6 border border-gray-200 flex flex-col sm:flex-row sm:space-x-8 lg:space-x-20 space-y-4 sm:space-y-0">
          <div className="font-bold">
            <div className="text-medium text-gray-600 mb-2">Main account</div>
            <h2 className="text-medium text-gray-900 mb-2">Main Savings Account</h2>

            <div className="text-sm text-gray-500 mb-4">111 2333 4444 555 66  6 775</div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 sm:px-6 py-2 bg-[#344B77] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#344B89] cursor-pointer">
                Make Transactions
              </button>
              <button className="px-4 sm:px-6 py-2 bg-gray-200 text-[#344B77] text-xs sm:text-sm font-semibold rounded-lg hover:bg-gray-300 cursor-pointer">
                Switch Accounts
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:items-end">
            <h2 className="text-medium font-bold text-gray-400 mb-2">Available Balance</h2>
            <div className="text-2xl font-bold text-gray-900 mb-4">$1,25000.00</div>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-[#344B77] rounded-lg p-4 sm:p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden relative lg:flex-1 font-semibold">
          <div className="relative z-10 mb-4 sm:mb-0">
            <h3 className="font-bold text-base sm:text-lg mb-2">Hello Agastya Co Ltd</h3>
            <p className="text-xs sm:text-sm mb-3 text-blue-100">Choose the most convenient delivery. Ride Connect</p>
            <button className="px-4 sm:px-6 py-2 bg-white text-blue-900 text-xs sm:text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Read more
            </button>
          </div>
          <div className="relative w-48 sm:w-64 h-24 sm:h-32 flex-shrink-0 self-end sm:self-auto">
            <Image
              src="/truck.png"
              alt="Delivery truck"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-10">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6 flex flex-col">

            {/* Expense Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-medium font-semibold text-gray-600 mb-3">Overall Expense</div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
                  <MdOutlineAddShoppingCart className="text-5xl items-center justify-center bg-[#FAC9243B] p-2 text-yellow-400 rounded-md"/>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-medium font-semibold text-gray-600 mb-3">Overall Expense</div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
                  <MdOutlineAddShoppingCart className="text-5xl items-center justify-center bg-[#FF2F2F3B] p-2 text-red-400 rounded-md"/>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-medium font-semibold text-gray-600 mb-3">Overall Expense</div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
                  <MdOutlineAddShoppingCart className="text-5xl items-center justify-center bg-[#03A7003B] p-2 text-green-500 rounded-md"/>
                </div>
              </div>
            </div>

            {/* Latest Deliveries Table - Dynamic */}
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 flex-1">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-4">Latest Deliveries</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full px-4 sm:px-0">
                  <table className="w-full text-sm font-semibold sm:text-base min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        {tableColumns.map((column) => (
                          <th key={column.key} className="text-left py-4 px-4 text-gray-600 font-semibold">
                            {column.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryData.map((row, index) => (
                        <tr key={row.id} className={index < deliveryData.length - 1 ? "border-b border-gray-100" : ""}>
                          {tableColumns.map((column) => (
                            <td key={`${row.id}-${column.key}`} className={`py-4 px-4 ${column.key === 'type' || column.key === 'price' ? 'text-gray-900' : 'text-gray-600'}`}>
                              {renderCellContent(column, row)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6 font-semibold">
            {/* Calendar */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={goToPreviousMonth}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-base font-semibold text-gray-900">{monthName}</span>
                <button 
                  onClick={goToNextMonth}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="text-center text-medium sm:text-medium font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`text-center text-medium sm:text-medium py-1 sm:py-2 rounded ${
                      day === currentDay
                        ? "bg-[#344B774D] text-black font-semibold"
                        : day
                          ? "text-gray-500 hover:bg-gray-100 cursor-pointer"
                          : ""
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Incoming Call */}
 <div className="bg-white rounded-lg p-4 border border-gray-200 w-full">
      {/* Top section */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="text-red-500 font-semibold text-sm">incoming call</span>
        </div>
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <Phone className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Divider between top and body */}
      <div className="flex items-center">
        {/* Left side: avatar + info */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/user.png" // Replace with actual image path
              alt="Like Jenny"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 leading-tight">Driver</p>
            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">Like Jenny</p>
            <div className="flex items-center gap-2 mt-1">
              <button className="w-7 sm:w-8 h-7 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600" />
              </button>
              <button className="w-7 sm:w-8 h-7 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="w-px h-16 sm:h-20 bg-gray-300 mx-2 sm:mx-4"></div>

        {/* Right side: date list */}
        <div className="text-xs sm:text-sm text-gray-600 space-y-1">
          <p><span className="font-medium">date:</span> 12.09.2029</p>
          <p><span className="font-medium">date:</span> 12.09.2029</p>
          <p><span className="font-medium">date:</span> 12.09.2029</p>
        </div>
      </div>
          </div>
        </div>
      </div>
      </div>

  )
}
