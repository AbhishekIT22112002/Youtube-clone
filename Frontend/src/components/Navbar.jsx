import React from 'react';
import { Search, Menu, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';

const Navbar = () => {
  const { isExpanded, setIsExpanded } = useSidebar();

  return (
    <nav className="fixed top-0 w-full bg-white h-14 flex items-center justify-between px-4 border-b border-gray-200 z-10">
      <div className="flex items-center gap-4">
        <Menu 
          className="h-6 w-6 cursor-pointer" 
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <Youtube className="h-6 w-6 text-red-600" />
          <span className="font-semibold text-xl">YouTube</span>
        </Link>
      </div>
      
      
      <div className="flex items-center max-w-2xl w-full mx-4">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <Link to="/login" className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50">
        <span>Sign in</span>
      </Link>
    </nav>
  );
};

export default Navbar;