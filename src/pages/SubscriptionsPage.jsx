import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Bell } from 'lucide-react';

const SubscriptionsPage = () => {
  // Sample subscription data
  const subscriptions = [
    { id: 1, name: 'Tech Channel', subscribers: '1.2M', videos: 500, image: '/api/placeholder/40/40' },
    { id: 2, name: 'Music Videos', subscribers: '2.5M', videos: 350, image: '/api/placeholder/40/40' },
    { id: 3, name: 'Gaming Pro', subscribers: '800K', videos: 1200, image: '/api/placeholder/40/40' },
    // Add more channels as needed
  ];

  return (
    <div className="h-screen w-full bg-gray-100">
      <Navbar />
      <Sidebar />
      <main className="pt-14 pl-16 lg:pl-60">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Subscriptions</h1>
          
          <div className="bg-white rounded-lg shadow">
            {subscriptions.map((channel) => (
              <div key={channel.id} className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <img 
                    src={channel.image} 
                    alt={channel.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{channel.name}</h3>
                    <p className="text-sm text-gray-600">{channel.subscribers} subscribers • {channel.videos} videos</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <Bell className="w-4 h-4" />
                  <span>Subscribed</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionsPage;