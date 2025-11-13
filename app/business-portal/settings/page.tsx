'use client';

import { useState } from 'react';
import { dataService } from '../services/dataService';
import SettingsForm from '../components/SettingsForm';
import NotificationSettings from '../components/NotificationSettings';
import SecuritySettings from '../components/SecuritySettings';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const tabs = [
    { id: 'general', name: 'General', icon: '⚙️' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'billing', name: 'Billing', icon: '💳' },
  ];

  const handleSaveSettings = async (settings: any) => {
    setSaving(true);
    setMessage(null);
    
    try {
      const result = await dataService.updateSettings(settings);
      setMessage({ type: 'success', text: result.message });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Reset to Defaults
        </button>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'general' && (
            <SettingsForm onSave={handleSaveSettings} saving={saving} />
          )}
          
          {activeTab === 'notifications' && (
            <NotificationSettings onSave={handleSaveSettings} saving={saving} />
          )}
          
          {activeTab === 'security' && (
            <SecuritySettings onSave={handleSaveSettings} saving={saving} />
          )}
          
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Billing Information</h3>
              
              {/* Current Plan */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-blue-900">Professional Plan</h4>
                    <p className="text-sm text-blue-700">$99/month • Next billing: Dec 15, 2024</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Upgrade Plan
                  </button>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Payment Method</h4>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                        💳
                      </div>
                      <div>
                        <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                        <p className="text-xs text-gray-500">Expires 12/25</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Update
                    </button>
                  </div>
                </div>
              </div>

              {/* Billing History */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Billing History</h4>
                <div className="space-y-2">
                  {[
                    { date: '2024-11-15', amount: '$99.00', status: 'Paid' },
                    { date: '2024-10-15', amount: '$99.00', status: 'Paid' },
                    { date: '2024-09-15', amount: '$99.00', status: 'Paid' },
                  ].map((invoice, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-sm font-medium">{invoice.date}</p>
                        <p className="text-xs text-gray-500">Professional Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{invoice.amount}</p>
                        <p className="text-xs text-green-600">{invoice.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
