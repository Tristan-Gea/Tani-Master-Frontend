import React from "react";

const ContainerPengaturan = ({ children }) => {
  return (
    <div className="flex flex-col rounded-[15px] bg-green-100 w-full h-full shadow-[0px_4px_6px_rgba(0,0,0,0.1)] shadow-gray-500">
      {children}
    </div>
  );
};

export default ContainerPengaturan;
