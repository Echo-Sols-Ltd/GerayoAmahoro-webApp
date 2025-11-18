"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { MdOutlineAddShoppingCart } from "react-icons/md"

export default function FinancePage() {
  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Top Section - Account and Expense Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Main Account */}
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
          <div className="text-sm font-semibold text-gray-600 mb-2">Main account</div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Main Savings Account</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-[#344B774D] text-[#344B77] text-sm font-semibold rounded-lg hover:bg-blue-200 transition-colors">
              Switch Accounts
            </button>
          </div>
        </div>

        {/* Expense Cards */}
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
          <div className="text-sm font-semibold text-gray-600 mb-3">Overall Expense</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl md:text-3xl font-semibold text-gray-900">$1,250.00</div>
         <MdOutlineAddShoppingCart className="text-4xl md:text-5xl items-center justify-center bg-[#FAC9243B] p-2 text-yellow-400 rounded-md"/>
            
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
          <div className="text-sm font-semibold text-gray-600 mb-3">Overall Expense</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl md:text-3xl font-semibold text-gray-900">$1,250.00</div>
            <MdOutlineAddShoppingCart className="text-4xl md:text-5xl items-center justify-center bg-[#FF2F2F3B] p-2 text-red-400 rounded-md"/>

          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
          <div className="text-sm font-semibold text-gray-600 mb-3">Overall Expense</div>
          <div className="flex items-end justify-between">
            <div className="text-2xl md:text-3xl font-semibold text-gray-900">$1,250.00</div>
            <MdOutlineAddShoppingCart className="text-4xl md:text-5xl items-center justify-center bg-[#03A7003B] p-2 text-green-500 rounded-md"/>
          </div>
        </div>
      </div>

      {/* Time Period Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button className="px-4 py-2 bg-[#344B77] text-white text-sm font-semibold rounded-lg hover:bg-[#344B88] transition-colors">
              Make Payment
            </button>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <div className="flex bg-gray-100 rounded-lg p-1 w-full sm:w-auto">
            <button className="px-2 sm:px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 flex-1 sm:flex-none">Day</button>
            <button className="px-2 sm:px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 flex-1 sm:flex-none">Week</button>
            <button className="px-2 sm:px-4 py-2 text-sm font-semibold bg-white text-gray-900 rounded-md shadow-sm flex-1 sm:flex-none">Month</button>
            <button className="px-2 sm:px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 flex-1 sm:flex-none">Year</button>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-sm font-semibold text-gray-500">01.02.2019 - 02.09.2045</span>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Transactions and Expenses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Latest Transactions */}
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-lg md:text-xl text-gray-900">Latest Transactions</h3>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {[
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" },
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" },
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" },
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" },
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" },
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" },
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" },
              { date: "Today", merchant: "Camelia Coffee", type: "Card Payments", category: "Coffee Drinks", amount: "-$12" }
            ].map((transaction, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-100 last:border-b-0 gap-2 sm:gap-0">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="text-sm font-semibold text-gray-600 sm:w-12">{transaction.date}</div>
                    <div className="text-base font-semibold text-gray-900 sm:w-32">{transaction.merchant}</div>
                    <div className="text-sm font-semibold text-gray-600 sm:w-28">{transaction.type}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-600">{transaction.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-base font-semibold text-gray-900 self-end sm:self-auto">{transaction.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* All Expenses */}
        <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
          <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-6">All Expenses</h3>
          
          {/* Expense Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600 mb-1">Overall Expense</div>
              <div className="text-xl md:text-2xl font-semibold text-gray-900">$1,250.00</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600 mb-1">Overall Expense</div>
              <div className="text-xl md:text-2xl font-semibold text-gray-900">$1,250.00</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600 mb-1">Overall Expense</div>
              <div className="text-xl md:text-2xl font-semibold text-gray-900">$1,250.00</div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="8"
                />
                {/* Red segment (Most delivered Food Packages) */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="8"
                  strokeDasharray="75 251"
                  strokeDashoffset="0"
                />
                {/* Green segment */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="8"
                  strokeDasharray="50 251"
                  strokeDashoffset="-75"
                />
                {/* Yellow segment */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="8"
                  strokeDasharray="40 251"
                  strokeDashoffset="-125"
                />
                {/* Blue segment */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeDasharray="86 251"
                  strokeDashoffset="-165"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xs sm:text-sm text-red-500 font-semibold">Most delivered</div>
                <div className="text-xs sm:text-sm text-red-500 font-semibold">Food Packages</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Food Packages</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Food Packages</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Food Packages</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Food Packages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
