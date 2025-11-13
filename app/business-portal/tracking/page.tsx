"use client"

import { useState } from "react"
import { Phone, MessageSquare, Filter } from "lucide-react"
import Image from "next/image"

export default function TrackingPage() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Left Column - Banner and Parcels Table */}
      <div className="col-span-2 space-y-6">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-white flex items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-bold text-2xl mb-3">Choose the most</h2>
            <h2 className="font-bold text-2xl mb-4">convenient delivery</h2>
            <button className="px-6 py-2 bg-white text-blue-900 text-base font-medium rounded-full hover:bg-gray-100 transition-colors">
              Add Parcel
            </button>
          </div>
          <div className="relative w-80 h-40 flex-shrink-0">
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
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl text-gray-900">Your Parcels</h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">01.02.2019 - 02.09.2045</span>
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Type</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Sender Address</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Receiver Adress</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Date of delivery</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Status</th>
                    <th className="text-left py-4 px-4 text-gray-600 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900 font-medium">Courier</td>
                    <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                    <td className="py-4 px-4 text-gray-600">LK11234qwt</td>
                    <td className="py-4 px-4 text-gray-600">25 Jan 2020</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-orange-500">
                        <span className="w-2 h-2 bg-orange-500 rounded-full" /> Transit
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900">10$</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900 font-medium">Shipping</td>
                    <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                    <td className="py-4 px-4 text-gray-600">LK11234qwt</td>
                    <td className="py-4 px-4 text-gray-600">25 Jan 2020</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-green-500">
                        <span className="w-2 h-2 bg-green-500 rounded-full" /> Transit
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900">10$</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900 font-medium">Shipping</td>
                    <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                    <td className="py-4 px-4 text-gray-600">LK11234qwt</td>
                    <td className="py-4 px-4 text-gray-600">25 Jan 2020</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-orange-500">
                        <span className="w-2 h-2 bg-orange-500 rounded-full" /> Transit
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900">10$</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900 font-medium">Courier</td>
                    <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                    <td className="py-4 px-4 text-gray-600">LK11234qwt</td>
                    <td className="py-4 px-4 text-gray-600">25 Jan 2020</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-green-500">
                        <span className="w-2 h-2 bg-green-500 rounded-full" /> Delivered
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900">10$</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900 font-medium">Shipping</td>
                    <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                    <td className="py-4 px-4 text-gray-600">LK11234qwt</td>
                    <td className="py-4 px-4 text-gray-600">25 Jan 2020</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-orange-500">
                        <span className="w-2 h-2 bg-orange-500 rounded-full" /> Transit
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900">10$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Ongoing Delivery */}
      <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl text-gray-900">Ongoing Delivery</h3>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Map */}
            <div className="relative bg-gray-100 rounded-lg mb-6 h-64 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Simple map representation */}
                  <rect width="400" height="300" fill="#f3f4f6"/>
                  
                  {/* Route line */}
                  <path 
                    d="M 200 80 Q 250 120, 280 180 Q 290 200, 300 240" 
                    stroke="#3b82f6" 
                    strokeWidth="3" 
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Start marker */}
                  <circle cx="200" cy="80" r="20" fill="#3b82f6"/>
                  <text x="200" y="55" textAnchor="middle" fontSize="14" fontWeight="bold">Nyabugogo</text>
                  
                  {/* End marker */}
                  <circle cx="300" cy="240" r="20" fill="#3b82f6"/>
                  <text x="300" y="270" textAnchor="middle" fontSize="14" fontWeight="bold">Nyabugogo</text>
                  
                  {/* Zoom controls */}
                </svg>
                
                {/* Zoom buttons */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50">
                    <span className="text-gray-600 font-bold">+</span>
                  </button>
                  <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50">
                    <span className="text-gray-600 font-bold">−</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Image
                    src="/truck.png"
                    alt="Truck"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">Order number</div>
                  <div className="text-lg font-bold text-gray-900">78965432</div>
                  <div className="text-sm text-gray-500">Food materials</div>
                </div>
              </div>

              {/* Sender Info */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-semibold text-green-600">Sender</div>
                    <div className="text-base font-medium text-gray-900">Mr Kapoof</div>
                    <div className="text-sm text-gray-500">Kigali, West Africa</div>
                  </div>
                </div>

                {/* Receiver Info */}
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-semibold text-orange-600">Receiver</div>
                    <div className="text-base font-medium text-gray-900">Mr Kapoof</div>
                    <div className="text-sm text-gray-500">Kigali, West Africa</div>
                  </div>
                </div>
              </div>

              {/* Driver Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                      src="/user.png"
                      alt="Driver"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Driver</div>
                    <div className="text-base font-medium text-gray-900">Like Jenny</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
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
