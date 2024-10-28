import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSidebar } from '../contexts/SidebarContext';

const HomePage = () => {
  const { isExpanded } = useSidebar();

  return (
    <div className="h-screen w-full bg-gray-100">
      <Navbar />
      <Sidebar />
      <main className={`pt-14 ${isExpanded ? 'pl-60' : 'pl-16'} transition-all duration-300`}>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;