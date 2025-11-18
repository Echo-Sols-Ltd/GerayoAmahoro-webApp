import { useState } from 'react';

interface NotificationSettingsProps {
  onSave: (settings: any) => void;
  saving: boolean;
}

// Toggle Switch Component
const ToggleSwitch = ({ checked, onChange, disabled = false }: { checked: boolean; onChange: () => void; disabled?: boolean }) => {
  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        checked ? 'bg-blue-600' : 'bg-gray-200'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export default function NotificationSettings({ onSave, saving }: NotificationSettingsProps) {
  const [settings, setSettings] = useState({
    emailNotifications: {
      newOrders: true,
      paymentReceived: true,
      lowStock: true,
      systemUpdates: false,
      marketingEmails: false,
    },
    pushNotifications: {
      newOrders: true,
      paymentReceived: false,
      lowStock: true,
      systemAlerts: true,
    },
    smsNotifications: {
      criticalAlerts: true,
      paymentReminders: false,
      orderUpdates: false,
    },
    frequency: 'immediate',
    quietHours: {
      enabled: true,
      start: '22:00',
      end: '08:00',
    },
  });

  const handleToggle = (category: 'emailNotifications' | 'pushNotifications' | 'smsNotifications', setting: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !(prev[category] as any)[setting]
      }
    }));
  };

  const handleFrequencyChange = (frequency: string) => {
    setSettings(prev => ({ ...prev, frequency }));
  };

  const handleQuietHoursChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      quietHours: {
        ...prev.quietHours,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(settings);
  };

  return (
    <div className="p-4 md:p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
          
          {/* Email Notifications */}
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-900 mb-3">📧 Email Notifications</h4>
            <div className="space-y-3 pl-2 md:pl-4">
              {Object.entries(settings.emailNotifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700 flex-1 pr-4">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                  <ToggleSwitch
                    checked={value}
                    onChange={() => handleToggle('emailNotifications', key)}
                  />
                </div>
              ))}
            </div>
          </div>

        {/* Push Notifications */}
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">🔔 Push Notifications</h4>
          <div className="space-y-3 pl-2 md:pl-4">
            {Object.entries(settings.pushNotifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-700 flex-1 pr-4">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
                <ToggleSwitch
                  checked={value}
                  onChange={() => handleToggle('pushNotifications', key)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SMS Notifications */}
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">📱 SMS Notifications</h4>
          <div className="space-y-3 pl-2 md:pl-4">
            {Object.entries(settings.smsNotifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-700 flex-1 pr-4">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
                <ToggleSwitch
                  checked={value}
                  onChange={() => handleToggle('smsNotifications', key)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Notification Frequency */}
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">⏰ Notification Frequency</h4>
          <div className="space-y-2 pl-2 md:pl-4">
            {[
              { value: 'immediate', label: 'Immediate' },
              { value: 'hourly', label: 'Hourly digest' },
              { value: 'daily', label: 'Daily digest' },
              { value: 'weekly', label: 'Weekly digest' },
            ].map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="frequency"
                  value={option.value}
                  checked={settings.frequency === option.value}
                  onChange={() => handleFrequencyChange(option.value)}
                  className="border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Quiet Hours */}
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">🌙 Quiet Hours</h4>
          <div className="pl-2 md:pl-4 space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-700 flex-1 pr-4">Enable quiet hours</span>
              <ToggleSwitch
                checked={settings.quietHours.enabled}
                onChange={() => handleQuietHoursChange('enabled', !settings.quietHours.enabled)}
              />
            </div>
            
            {settings.quietHours.enabled && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
                <div className="w-full sm:w-auto">
                  <label className="block text-xs text-gray-600 mb-1">From</label>
                  <input
                    type="time"
                    value={settings.quietHours.start}
                    onChange={(e) => handleQuietHoursChange('start', e.target.value)}
                    className="w-full sm:w-auto px-2 py-1 bg-[#344B774D] border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <label className="block text-xs text-gray-600 mb-1">To</label>
                  <input
                    type="time"
                    value={settings.quietHours.end}
                    onChange={(e) => handleQuietHoursChange('end', e.target.value)}
                    className="w-full sm:w-auto px-2 py-1 bg-[#344B774D] border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
        <button
          type="button"
          className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'Saving...' : 'Save Notification Settings'}
        </button>
      </div>
    </form>
    </div>
  );
}
