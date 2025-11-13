'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Menu, Search } from 'lucide-react';
import Image from 'next/image';

const navigationItems = [
  { name: 'Overview', href: '/business-portal' },
  { name: 'Tracking', href: '/business-portal/tracking' },
  { name: 'Finance', href: '/business-portal/finance' },
  { name: 'Account', href: '/business-portal/account' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <Menu className="w-5 h-5 text-gray-600" />
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm ${
                    isActive
                      ? 'font-medium text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full overflow-hidden">
              <Image
                src="/user.png"
                alt="User avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
