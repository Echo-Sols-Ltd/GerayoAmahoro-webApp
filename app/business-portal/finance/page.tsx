"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function FinancePage() {
  return (
    <div className="space-y-6">
      {/* Top Section - Account and Expense Cards */}
      <div className="grid grid-cols-4 gap-6">
        {/* Main Account */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Main account</div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mainn Savings Account</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-900 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors">
              Switch Accounts
            </button>
            <button className="w-full px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors">
              Make Payment
            </button>
          </div>
        </div>

        {/* Expense Cards */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-3">Overall Expense</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">⭐</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-3">Overall Expense</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-xl">🛍️</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-3">Overall Expense</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-gray-900">$1,250.00</div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">✅</div>
          </div>
        </div>
      </div>

      {/* Time Period Filters */}
      <div className="flex items-center justify-between">
        <div></div>
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Day</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Week</button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-900 rounded-md shadow-sm">Month</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Year</button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">01.02.2019 - 02.09.2045</span>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Transactions and Expenses */}
      <div className="grid grid-cols-2 gap-6">
        {/* Latest Transactions */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xl text-gray-900">Latest Transactions</h3>
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
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-600 w-12">{transaction.date}</div>
                    <div className="text-base text-gray-900 w-32">{transaction.merchant}</div>
                    <div className="text-sm text-gray-600 w-28">{transaction.type}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{transaction.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-base font-medium text-gray-900">{transaction.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* All Expenses */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="font-bold text-xl text-gray-900 mb-6">All Expenses</h3>
          
          {/* Expense Summary */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Overall Expense</div>
              <div className="text-2xl font-bold text-gray-900">$1,250.00</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Overall Expense</div>
              <div className="text-2xl font-bold text-gray-900">$1,250.00</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Overall Expense</div>
              <div className="text-2xl font-bold text-gray-900">$1,250.00</div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
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
                <div className="text-sm text-red-500 font-medium">Most delivered</div>
                <div className="text-sm text-red-500">Food Packages</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Food Packages</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Food Packages</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Food Packages</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Food Packages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
