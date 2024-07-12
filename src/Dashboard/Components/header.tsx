import React from 'react';
import { SidebarStatus } from '../Utils/Types';



const Header: React.FC<SidebarStatus> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="bg-blue-600/50 p-4 flex justify-between items-center">
      <div className='flex gap-1 items-center'>
        <button
          onClick={toggleSidebar}
          className="text-white p-2 bg-blue-500 rounded "
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isOpen}
        </button>
        <h1 className="text-2xl text-white">Header</h1>
      </div>
    </div>
  );
};

export default Header;
