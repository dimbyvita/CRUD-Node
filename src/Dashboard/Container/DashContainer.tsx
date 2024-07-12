import React from 'react';
import Sidebar from '../Components/Sidebar';
import useSidebar from '../hooks/useSidebar';
import { Footer } from '../Components/footer';
import Header from '../Components/header';

const DashContainer: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="flex w-full h-screen">
      {/* side part */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} w-64 bg-slate-300 p-2 h-full`}>
        <Sidebar isOpen={sidebarOpen} />
      </div>

      {/* main part */}
      <div className="bg-neutral-500 w-full p-2 flex flex-col justify-between">
        <div>
          <Header isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          {/* content */}
          <div className="flex justify-center items-center h-full">
            <h1 className="text-3xl text-white">Dashboard</h1>
          </div>
          {/* content */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashContainer;
