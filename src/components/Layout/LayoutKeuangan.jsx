import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';

const LayoutKeuangan = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed w-56 h-full">
        <Sidebar />
      </div>

      {/* Konten Halaman */}
      <div className="ml-56 flex-1 px-3 py-3 gap-3 flex flex-col bg-slate-100 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default LayoutKeuangan;