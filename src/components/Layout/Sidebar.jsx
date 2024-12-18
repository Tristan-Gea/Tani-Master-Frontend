import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import tmlogo from "../../assets/images/logo.svg";
import dashboard from "../../assets/images/dashboard.svg";
import keuangan from "../../assets/images/keuangan.svg";
import inventaris from "../../assets/images/inventaris.svg";
import produksi from "../../assets/images/produksi.svg";
import panduan from "../../assets/images/panduan.svg";
import pengaturan from "../../assets/images/pengaturan.svg";
import keluar from "../../assets/images/keluar.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin keluar?");
    if (!confirmLogout) return;
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <>
      {/* Tombol Hamburger untuk Mobile */}
      <button
        className={`md:hidden p-4 text-xl fixed top-64 z-50 bg-green-100 rounded-br-[40px] rounded-tr-[40px] shadow-lg transition-all duration-300 ${
          isSidebarOpen ? "left-56" : "left-4"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 h-full w-56 bg-green-100 shadow-[4px_0px_3px_rgba(0,0,0,0.1)] shadow-slate100 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:h-screen`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Grup 1: Menu utama */}
          <div>
            <div className="flex flex-col items-center font-bold p-4 mb-4 bg-[#91da9f] rounded-br-[40px] rounded-bl-[40px] border-b-8 border-[#08a19f]">
              <img className="h-12 " src={tmlogo} alt="tmlogo" />
            </div>
            <div className="space-y-2 px-3">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-md hover:bg-green-500 ${
                    isActive ? "text-[#08a19f] animate-appearance-in shadow-[0_0_5px_#08a19f,0_0_10px_#08a19f]" : ""
                  }`
                }
              >
                <img src={dashboard} alt="Dashboard" className="w-5 h-5 mr-3" />
                Dashboard
              </NavLink>
              <NavLink
                to="/keuangan"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-md hover:bg-green-500 ${
                    isActive ? "text-[#08a19f] animate-appearance-in shadow-[0_0_5px_#08a19f,0_0_10px_#08a19f]" : ""
                  }`
                }
              >
                <img src={keuangan} alt="Keuangan" className="w-5 h-5 mr-3" />
                Keuangan
              </NavLink>
              <NavLink
                to="/inventaris"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-md hover:bg-green-500 ${
                    isActive ? "text-[#08a19f] animate-appearance-in shadow-[0_0_5px_#08a19f,0_0_10px_#08a19f]" : ""
                  }`
                }
              >
                <img
                  src={inventaris}
                  alt="Inventaris"
                  className="w-5 h-5 mr-3"
                />
                Inventaris
              </NavLink>
              <NavLink
                to="/produksi"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-md hover:bg-green-500 ${
                    isActive ? "text-[#08a19f] animate-appearance-in shadow-[0_0_5px_#08a19f,0_0_10px_#08a19f]" : ""
                  }`
                }
              >
                <img src={produksi} alt="Produksi" className="w-5 h-5 mr-3" />
                Produksi
              </NavLink>
            </div>
          </div>

          {/* Grup 2: Menu tambahan */}
          <div className="px-3 py-3 bg-[#91da9f] rounded-tr-[40px] rounded-tl-[40px] border-t-8 border-[#08a19f]">
            <div className="space-y-2">
              <NavLink
                to="/panduan"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-md hover:bg-green-500 ${
                    isActive ? "text-[#08a19f] animate-appearance-in shadow-[0_0_5px_#08a19f,0_0_10px_#08a19f]" : ""
                  }`
                }
              >
                <img src={panduan} alt="Panduan" className="w-5 h-5 mr-3" />
                Panduan
              </NavLink>
              <NavLink
                to="/pengaturan"
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-md hover:bg-green-500 ${
                    isActive ? "text-[#08a19f] animate-appearance-in shadow-[0_0_5px_#08a19f,0_0_10px_#08a19f]" : ""
                  }`
                }
              >
                <img src={pengaturan} alt="Pengaturan" className="w-5 h-5 mr-3" />
                Pengaturan
              </NavLink>
              <NavLink
              to="/auth"
              onClick={(e) => {
                // Memanggil handleLogout untuk konfirmasi logout
              handleLogout();
              e.preventDefault(); // Mencegah navigasi jika logout sudah diproses
              }}
              className={({ isActive }) =>
              `flex items-center p-3 rounded-md hover:text-white hover:bg-red-600 ${
                isActive ? "text-[#08a19f] animate-appearance-in shadow-[0_0_5px_#08a19f,0_0_10px_#08a19f]" : ""
              }`
              }>
              <img src={keluar} alt="Keluar" className="w-5 h-5 mr-3" />
              Keluar
              </NavLink>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;