import React from "react";
import LayoutPengaturan from "../../components/Layout/LayoutPengaturan";
import HeaderPengaturan from "../../components/ComponentPengaturan/HeaderPengaturan";
import ContainerPengaturan from "../../components/ComponentPengaturan/ContainerPengaturan";

import AkunPribadi from "../../components/ComponentPengaturan/AkunPribadi";
import KeamananPrivasi from "../../components/ComponentPengaturan/KeamananPrivasi";
import Preferensi from "../../components/ComponentPengaturan/Preferensi";
import Integrasi from "../../components/ComponentPengaturan/Integrasi";
import LanggananPembayaran from "../../components/ComponentPengaturan/LanggananPembayaran";

const PengaturanPage = () => {
  return (
    <LayoutPengaturan>
      <div className="flex flex-col rounded-[15px] bg-green-100 w-full shadow-[0px_4px_6px_rgba(0,0,0,0.1)] shadow-gray-500">
        
      <ContainerPengaturan>
        <HeaderPengaturan />
        <div className="p-6 space-y-6">
          <AkunPribadi />
          <KeamananPrivasi />
          <Preferensi />
          <Integrasi />
          <LanggananPembayaran />
        </div>
      </ContainerPengaturan>
      </div>
    </LayoutPengaturan>
  );
};

export default PengaturanPage;