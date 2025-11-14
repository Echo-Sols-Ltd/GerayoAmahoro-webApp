"use client"

import { useState } from "react"
import { Phone, MessageSquare, Filter } from "lucide-react"
import Image from "next/image"

// TypeScript interfaces for tracking data
interface ParcelData {
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
  key: keyof ParcelData | 'status';
  label: string;
  render?: (value: any, row: ParcelData) => React.ReactNode;
}

export default function TrackingPage() {
  // Sample parcel data - this can be replaced with API data
  const parcelData: ParcelData[] = [
    {
      id: '1',
      type: 'Courier',
      senderAddress: 'Lincoln, Kigali',
      receiverAddress: 'LK11234qwt',
      dateOfDelivery: '25 Jan 2020',
      status: { label: 'Transit', color: 'orange' },
      price: '10$'
    },
    {
      id: '2',
      type: 'Shipping',
      senderAddress: 'Lincoln, Kigali',
      receiverAddress: 'LK11234qwt',
      dateOfDelivery: '25 Jan 2020',
      status: { label: 'Delivered', color: 'green' },
      price: '10$'
    },
    {
      id: '3',
      type: 'Shipping',
      senderAddress: 'Lincoln, Kigali',
      receiverAddress: 'LK11234qwt',
      dateOfDelivery: '25 Jan 2020',
      status: { label: 'Transit', color: 'orange' },
      price: '10$'
    },
    {
      id: '4',
      type: 'Courier',
      senderAddress: 'Lincoln, Kigali',
      receiverAddress: 'LK11234qwt',
      dateOfDelivery: '25 Jan 2020',
      status: { label: 'Delivered', color: 'green' },
      price: '10$'
    },
    {
      id: '5',
      type: 'Express',
      senderAddress: 'Nyarutarama, Kigali',
      receiverAddress: 'NY5678xyz',
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
    { key: 'dateOfDelivery', label: 'Date of delivery' },
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
  const renderCellContent = (column: TableColumn, row: ParcelData) => {
    if (column.render) {
      return column.render(row[column.key], row);
    }
    return row[column.key as keyof ParcelData];
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
      {/* Left Column - Banner and Parcels Table */}
      <div className="xl:col-span-2 space-y-4 sm:space-y-6">
        {/* Top Banner */}
        <div className="bg-[#344B77] rounded-lg p-4 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden relative">
          <div className="relative z-10 mb-4 sm:mb-0">
            <h2 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Choose the most</h2>
            <h2 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">convenient delivery</h2>
            <button className="px-4 sm:px-6 py-2 bg-white text-blue-900 text-sm sm:text-base font-medium rounded-full hover:bg-gray-100 transition-colors">
              Add Parcel
            </button>
          </div>
          <div className="relative w-64 sm:w-80 h-32 sm:h-40 flex-shrink-0 self-end sm:self-auto">
            <Image
              src="/truck.png"
              alt="Delivery truck"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Parcels Table */}
        <div className="space-y-4">
          {/* Your Parcels Section */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900">Your Parcels</h3>
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm text-gray-500">01.02.2019 - 02.09.2045</span>
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full px-4 sm:px-0">
                <table className="w-full text-sm sm:text-base min-w-[600px]">
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
                  {parcelData.map((row, index) => (
                    <tr key={row.id} className={`hover:bg-gray-50 ${index < parcelData.length - 1 ? "border-b border-gray-100" : ""}`}>
                      {tableColumns.map((column) => (
                        <td key={`${row.id}-${column.key}`} className={`py-4 px-4 ${column.key === 'type' || column.key === 'price' ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
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
      </div>

      {/* Right Column - Ongoing Delivery */}
      <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">Ongoing Delivery</h3>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Map */}
            <div className="relative bg-gray-200 h-64 overflow-hidden">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Map background */}
                  <rect width="400" height="300" fill="#e5e7eb"/>
                  
                  {/* Route line - curved path */}
                  <path 
                    d="M 120 60 Q 180 100, 220 140 Q 260 180, 280 220" 
                    stroke="#3b82f6" 
                    strokeWidth="4" 
                    fill="none"
                  />
                  
                  {/* Start marker */}
                  <circle cx="120" cy="60" r="12" fill="#3b82f6"/>
                  <circle cx="120" cy="60" r="8" fill="white"/>
                  <text x="120" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Nyabugogo</text>
                  
                  {/* End marker */}
                  <circle cx="280" cy="220" r="12" fill="#3b82f6"/>
                  <circle cx="280" cy="220" r="8" fill="white"/>
                  <text x="280" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Nyabugogo</text>
                </svg>
                
                {/* Zoom buttons */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                  <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center hover:bg-gray-50 border border-gray-200">
                    <span className="text-gray-700 font-bold text-lg">+</span>
                  </button>
                  <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center hover:bg-gray-50 border border-gray-200">
                    <span className="text-gray-700 font-bold text-lg">−</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <div className="">
                  <div className="text-xs text-gray-500 mb-1">Order number</div>
                  <div className="text-lg font-bold text-gray-900 mb-1">78965432</div>
                  <div className="text-xs text-gray-500">Food materials</div>
                </div>
                <div>
                  <Image
                    src="/tracking_truck.png"
                    alt="Truck"
                     width={100}
                     height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Sender and Receiver Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-green-600 mb-1">Sender</div>
                    <div className="text-sm font-medium text-gray-900">Mr Kapoof</div>
                    <div className="text-xs text-gray-500">Kigali, West Africa</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-orange-600 mb-1">Receiver</div>
                    <div className="text-sm font-medium text-gray-900">Mr Kapoof</div>
                    <div className="text-xs text-gray-500">Kigali, West Africa</div>
                  </div>
                </div>
              </div>

              {/* Driver Info */}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                      src="/user.png"
                      alt="Driver"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500">Driver</div>
                    <div className="text-sm font-medium text-gray-900">Like Jenny</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
