import React, { useState } from "react";
import LayoutDashboard from "../../components/Layout/LayoutDashboard";
import HeaderDashboard from '../../components/ComponentDashboard/HeaderDashboard';
import ToDo from '../../components/ComponentDashboard/ToDo';


const DashboardPage = () => {

  const [riwayatKeuangan] = useState([
  ]);

  const handlePrint = () => {
    alert("Fitur Print Riwayat sedang dikembangkan.");
  };

  const handleLihatSemua = () => {
    alert("Fitur Lihat Semua sedang dikembangkan.");
  };

  return (
    <LayoutDashboard>
      {/* Header Section */}
      <HeaderDashboard />

      {/* Main Content */}
      <div className="flex flex-row gap-4 mt-2 w-full h-full">
        <ToDo 
          riwayatKeuangan={riwayatKeuangan} 
          onPrint={handlePrint} 
          onLihatSemua={handleLihatSemua} 
        />
      </div>
    </LayoutDashboard>
  );
};

export default DashboardPage;