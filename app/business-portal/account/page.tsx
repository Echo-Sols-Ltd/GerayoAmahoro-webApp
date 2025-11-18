"use client"

import { useState } from "react"
import { User, Bell, Globe, Shield, Trash2, LogOut, Filter } from "lucide-react"
import Image from "next/image"

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState("basic")

  const sidebarItems = [
    { id: "basic", label: "Basic Information", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "social", label: "Social Accounts", icon: Globe },
    { id: "security", label: "Password and security", icon: Shield },
    { id: "delete", label: "Delete Account", icon: Trash2 },
  ]

  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 space-y-8">
        {/* Basic Information */}
        {activeSection === "basic" && (
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Basic Information</h3>
            
            {/* Profile Photo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full overflow-hidden">
                <Image
                  src="/user.png"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Profile Photo</h4>
                <p className="text-gray-600">This will be shown as logo of your company.</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Business Description"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Category</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 appearance-none">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website Link</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Business Description"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 appearance-none">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Business Description"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button className="px-8 py-3 bg-[#344B77] text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeSection === "notifications" && (
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Notifications</h3>
            
            <div className="grid grid-cols-2 gap-8">
              {/* Email Notifications */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h4>
                <p className="text-gray-600 mb-6">Stay updated with important activities and updates from your business account.</p>
                
                <div className="space-y-6">
                  {[
                    { label: "Orders", description: "Get notified instantly when an order arrives.", enabled: true },
                    { label: "Payment Confirmations", description: "Get notified instantly when an order arrives.", enabled: true },
                    { label: "RideConnect Messages", description: "Get notified instantly when an order arrives.", enabled: true },
                    { label: "Promotions and Updates", description: "Get notified instantly when an order arrives.", enabled: true },
                    { label: "Reminders", description: "Get notified instantly when an order arrives.", enabled: false }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-6 rounded-full p-1 transition-colors ${item.enabled ? 'bg-blue-600' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${item.enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Push Notifications */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h4>
                <p className="text-gray-600 mb-6">Stay updated with important activities and updates from your business account.</p>
                
                <div className="space-y-6">
                  {[
                    { label: "Orders", description: "Get notified instantly when an order.", enabled: true },
                    { label: "Payment Confirmations", description: "Get notified instantly when an order.", enabled: true },
                    { label: "RideConnect Messages", description: "Get notified instantly when an order.", enabled: true },
                    { label: "Promotions and Updates", description: "Get notified instantly when an order.", enabled: true },
                    { label: "Reminders", description: "Get notified instantly when an order.", enabled: false }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-6 rounded-full p-1 transition-colors ${item.enabled ? 'bg-blue-600' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${item.enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button className="px-8 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Social Accounts */}
        {activeSection === "social" && (
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Social Accounts</h3>
            
            <div className="space-y-6">
              {/* Google Account */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Google Account</div>
                    <div className="text-sm text-gray-600">Connected since 12.09.2025</div>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700 font-medium">Disconnect</button>
              </div>

              {/* Apple Account */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Apple</div>
                    <div className="text-sm text-gray-600">Not Connected</div>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium">Disconnect</button>
              </div>
            </div>

            <div className="flex gap-4 mt-8 justify-end">
              <button className="px-6 py-3 bg-[#027A4840] text-[#344B77] font-semibold rounded-lg hover:bg-green-200 transition-colors">
                Add Account
              </button>
              <button className="px-8 py-3 bg-[#344B77] text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Password and Security */}
        {activeSection === "security" && (
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Password and Security</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 appearance-none">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="px-8 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Account */}
        {activeSection === "delete" && (
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Delete Your Account</h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Deleting your account will permanently remove all your personal data, preferences, and history from 
              our system. This action cannot be undone. Please make sure to back up any important information 
              before proceeding.
            </p>

            <div className="flex items-start gap-3 mb-8">
              <input
                type="checkbox"
                id="confirmDelete"
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="confirmDelete" className="text-gray-700 leading-relaxed">
                I understand that deleting my account is permanent and cannot be undone. I confirm that 
                I want to proceed with deleting my account.
              </label>
            </div>

            <div className="flex justify-end">
              <button className="w-[315px] px-4 py-3 bg-red-600 text-white font-semibold cursor-pointer rounded-lg hover:bg-red-500 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white rounded-lg border border-gray-200 p-6 flex flex-col min-h-screen">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">Navigate Settings</h2>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <nav className="space-y-2 flex-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-base">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-8 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-base">Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}
