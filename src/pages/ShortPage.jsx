import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const ShortsPage = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <Navbar />
      <Sidebar />
      <main className="pt-14 pl-16 lg:pl-60">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Shorts</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-[9/16] bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShortsPage;