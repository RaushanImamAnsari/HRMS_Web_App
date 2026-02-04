import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <TopHeader />
          <main className="p-6 lg:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
