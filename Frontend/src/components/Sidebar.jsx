import React from 'react';
import { Home, Video, PlaySquare, Clock, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';

const SidebarItem = ({ icon, text, to }) => {
  const { isExpanded } = useSidebar();
  
  return (
    <Link 
      to={to} 
      className={`flex items-center ${isExpanded ? 'gap-6 px-3' : 'justify-center'} py-2 hover:bg-gray-100 cursor-pointer rounded-lg mx-2`}
    >
      <div className="w-6 h-6">
        {icon}
      </div>
      {isExpanded && <span>{text}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const { isExpanded } = useSidebar();

  return (
    <div className={`fixed left-0 top-14 h-full ${isExpanded ? 'w-60' : 'w-16'} bg-white pt-2 border-r border-gray-200 transition-all duration-300`}>
      <div className="flex flex-col space-y-1">
        <SidebarItem icon={<Home />} text="Home" to="/" />
        <SidebarItem icon={<Video />} text="Shorts" to="/shorts" />
        <SidebarItem icon={<PlaySquare />} text="Subscriptions" to="/subscriptions" />
        <div className="border-t border-gray-200 my-2"></div>
        <SidebarItem icon={<Clock />} text="History" to="/history" />
        <SidebarItem icon={<ThumbsUp />} text="Liked videos" to="/liked" />
      </div>
    </div>
  );
};

export default Sidebar;