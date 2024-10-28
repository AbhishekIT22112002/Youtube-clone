import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Clock, Trash2 } from 'lucide-react';

const HistoryPage = () => {
  // Sample history data
  const historyItems = [
    { id: 1, title: 'Building a React App', channel: 'Tech Channel', views: '1.2M', timestamp: '2 hours ago', thumbnail: '/api/placeholder/180/100' },
    { id: 2, title: 'Music Cover - Popular Song', channel: 'Music Videos', views: '500K', timestamp: '1 day ago', thumbnail: '/api/placeholder/180/100' },
    // Add more history items as needed
  ];

  return (
    <div className="h-screen w-full bg-gray-100">
      <Navbar />
      <Sidebar />
      <main className="pt-14 pl-16 lg:pl-60">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Watch History</h1>
            <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-full">
              <Trash2 className="w-4 h-4" />
              Clear History
            </button>
          </div>

          <div className="space-y-4">
            {historyItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4 hover:bg-gray-50">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-44 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.channel}</p>
                  <p className="text-sm text-gray-600">{item.views} views • {item.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoryPage;