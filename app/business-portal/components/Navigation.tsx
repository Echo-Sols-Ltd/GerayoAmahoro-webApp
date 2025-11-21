'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, Menu, Search, X, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const navigationItems = [
  { name: 'Overview', href: '/business-portal' },
  { name: 'Tracking', href: '/business-portal/tracking' },
  { name: 'Finance', href: '/business-portal/finance' },
  { name: 'Account', href: '/business-portal/account' },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    // Clear any auth tokens/data here
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-sm text-medium font-bold sticky top-0 z-40">
      <div className="px-4 sm:px-6 py-4">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between">
          {/* Left section - Menu and Search */}
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-5 h-5 text-gray-600"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Desktop search - hidden on mobile */}
            <div className="relative flex-1 max-w-md hidden sm:block">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-medium text-gray-700 placeholder-gray-400 border-0 focus:ring-2 focus:ring-[#344B77]"
              />
            </div>
          </div>

          {/* Right section - Navigation and User */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden lg:flex gap-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-medium transition-colors ${
                      isActive
                        ? 'font-bold text-gray-900'
                        : 'text-[#686868] hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            {/* User actions */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Mobile search icon */}
              <Search className="w-5 h-5 text-gray-600 sm:hidden" />
              <Bell className="w-5 h-5 text-gray-600" />
              
              {/* Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full overflow-hidden focus:ring-2 focus:ring-[#344B77] transition-all"
                >
                  <Image
                    src="/user.png"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">Agastya Co Ltd</p>
                      <p className="text-xs text-gray-500">admin@agastya.com</p>
                    </div>
                    
                    <button
                      onClick={handleSignOut}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-3 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {/* Mobile search */}
              <div className="relative sm:hidden">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-medium text-gray-700 placeholder-gray-400"
                />
              </div>
              
              {/* Mobile navigation items */}
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-medium py-2 transition-colors ${
                      isActive
                        ? 'font-bold text-gray-900'
                        : 'text-[#686868] hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
