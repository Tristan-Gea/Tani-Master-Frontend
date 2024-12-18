import React from "react";
import LayoutProduksi from "../../components/Layout/LayoutProduksi";
import Produksi from "../../components/ComponentProduksi/Produksi";
import Penjualan from "../../components/ComponentProduksi/Penjualan";

const ProduksiPage = () => {
  return (
    <LayoutProduksi>
      <div className="flex flex-col w-full">
        <div className="flex flex-col bg-transparent h-[50%]">
          <Produksi />
        </div>
        <div className="flex flex-col bg-transparent h-[50%]">
          <Penjualan />
        </div>
      </div>
    </LayoutProduksi>
  );
};

export default ProduksiPage;
