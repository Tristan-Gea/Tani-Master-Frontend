import React, { useState } from "react";
import LayoutInventaris from "../../components/Layout/LayoutInventaris";
import InventoriBibit from "../../components/ComponentInventaris/InventoriBibit";
import InventoriBaku from "../../components/ComponentInventaris/InventoriBaku";

const InventarisPage = () => {
  const [bahanBibit, setBahanBibit] = useState([
  ]);

  const [bahanBaku, setBahanBaku] = useState([
  ]);

  return (
    <LayoutInventaris>
      <div className="flex gap-4 h-full bg-transparent">
        <InventoriBibit bahanBibit={bahanBibit} setBahanBibit={setBahanBibit} />
        <InventoriBaku bahanBaku={bahanBaku} setBahanBaku={setBahanBaku} />
      </div>
    </LayoutInventaris>
  );
};

export default InventarisPage;