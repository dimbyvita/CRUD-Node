import React from 'react';
import { SidebarStatus } from '../Utils/Types';


const Header: React.FC<SidebarStatus> = ({ toggleSidebar }) => {
  return (
    <div className="bg-blue-600/50 p-4 flex justify-between items-center">
      <div className='flex gap-1 items-center'>
        <button
          onClick={toggleSidebar}
          className="p-2 bg-blue-500 rounded "
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H14M4 18H9" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-2xl text-white">Header</h1>
      </div>
      <div>
        <button className='p-2 flex items-center justify-center bg-blue-500 rounded'>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 22V11" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 7V2" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V17" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13V2" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 22V11" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 7V2" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11H7" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 11H21" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13H14" stroke="#ffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
