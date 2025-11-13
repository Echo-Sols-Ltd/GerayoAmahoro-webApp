import { ReactNode } from 'react';
import Navigation from './components/Navigation';

interface BusinessPortalLayoutProps {
  children: ReactNode;
}

export default function BusinessPortalLayout({ children }: BusinessPortalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="px-6 py-6">
        {children}
      </main>
    </div>
  );
}
