"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 10, 1))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const selectedDay = 30

  const calendarDays = Array.from({ length: firstDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1),
  )

  return (
    <div className="space-y-6">
      {/* Top Section: Account and Truck Banner Side by Side */}
      <div className="flex gap-6">
        {/* Account Section */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 flex-1">
          <div className="text-xs text-gray-600 mb-2">Main account</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Mainn Savings Account</h2>
          <div className="text-2xl font-bold text-gray-900 mb-4">$1,250.00</div>
          <div className="text-xs text-gray-500 mb-4">**** **** **** 8 ****</div>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800">
              Make Transactions
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-300">
              Switch Accounts
            </button>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-6 text-white flex items-center justify-between overflow-hidden relative flex-1">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-2">Hello Agastya Co Ltd</h3>
            <p className="text-sm mb-3 text-blue-100">Choose the most convenient delivery. Ride Connect</p>
            <button className="px-6 py-2 bg-white text-blue-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Read more
            </button>
          </div>
          <div className="relative w-64 h-32 flex-shrink-0">
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
      <div className="grid grid-cols-3 gap-6 my-10">
        {/* Left Column */}
        <div className="col-span-2 space-y-6 flex flex-col">

            {/* Expense Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600 mb-3">Overall Expense</div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-lg">⭐</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600 mb-3">Overall Expense</div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center text-lg">💝</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600 mb-3">Overall Expense</div>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-lg">✅</div>
                </div>
              </div>
            </div>

            {/* Latest Deliveries Table */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 flex-1">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Latest Deliveries</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold">Type</th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold">Sender Address</th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold">Receiver Adess</th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold">Date of Delivery</th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold">Status</th>
                      <th className="text-left py-4 px-4 text-gray-600 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-900">Courier</td>
                      <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                      <td className="py-4 px-4 text-gray-600">LKT1234qwet</td>
                      <td className="py-4 px-4 text-gray-600">25 Jan 2020</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1 text-orange-500">
                          <span className="w-2 h-2 bg-orange-500 rounded-full" /> Transit
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-900">10$</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-900">Shipping</td>
                      <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                      <td className="py-4 px-4 text-gray-600">LKT1234qwet</td>
                      <td className="py-4 px-4 text-gray-600">25 Jan 2020</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1 text-green-500">
                          <span className="w-2 h-2 bg-green-500 rounded-full" /> Transit
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-900">10$</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-900">Shipping</td>
                      <td className="py-4 px-4 text-gray-600">Lincoln, Kigali</td>
                      <td className="py-4 px-4 text-gray-600">LKT1234qwet</td>
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

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-base font-medium text-gray-900">{monthName}</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`text-center text-sm py-2 rounded ${
                      day === selectedDay
                        ? "bg-blue-600 text-white font-medium"
                        : day
                          ? "text-gray-900 hover:bg-gray-100"
                          : ""
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Incoming Call */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-base font-medium text-gray-900">incoming call</span>
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex-shrink-0 overflow-hidden">
                  <Image
                    src="/user.png"
                    alt="Lilia Jenny"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium text-gray-900">Driver</div>
                  <div className="text-base text-gray-900">Like Jenny</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <Phone className="w-4 h-4 text-blue-600" />
                </button>
                <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </button>
              </div>
              <div className="space-y-1 text-sm text-gray-500">
                <div>date: 12.09 2029</div>
                <div>date: 12.09 2029</div>
                <div>date: 12.09 2029</div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
