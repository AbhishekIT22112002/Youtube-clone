import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { ThumbsUp, Share2, Clock } from 'lucide-react';

const LikedVideosPage = () => {
  // Sample liked videos data
  const likedVideos = [
    { 
      id: 1, 
      title: 'Amazing Tutorial Video', 
      channel: 'Tech Channel', 
      likes: '25K', 
      timestamp: '3 days ago',
      thumbnail: '/api/placeholder/280/160'
    },
    { 
      id: 2, 
      title: 'Best Music Cover 2024', 
      channel: 'Music Videos', 
      likes: '12K', 
      timestamp: '1 week ago',
      thumbnail: '/api/placeholder/280/160'
    },
    // Add more liked videos as needed
  ];

  return (
    <div className="h-screen w-full bg-gray-100">
      <Navbar />
      <Sidebar />
      <main className="pt-14 pl-16 lg:pl-60">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <ThumbsUp className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold">Liked Videos</h1>
              <p className="text-gray-600">{likedVideos.length} videos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {likedVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.channel}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {video.likes}
                    </span>
                    <span>{video.timestamp}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <Clock className="w-4 h-4" />
                      Watch Later
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LikedVideosPage;
