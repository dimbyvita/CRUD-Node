import React from 'react';
import { SidebarStatus } from '../Utils/Types';



const Sidebar: React.FC<SidebarStatus> = ({ isOpen}) => {
  return (
    <aside className={`bg-slate-300 p-2 h-full ${isOpen ? 'block' : 'hidden'} md:block`}>
      <h2>Sidebar</h2>
      <div className="search-box mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item py-2 border-b border-gray-300">1</li>
          <li className="nav-item py-2 border-b border-gray-300">2</li>
          <li className="nav-item py-2 border-b border-gray-300">3</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
