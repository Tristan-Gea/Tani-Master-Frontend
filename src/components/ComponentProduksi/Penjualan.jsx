import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Penjualan = () => {
  const [penjualanData, setPenjualanData] = useState([]);
  const [formData, setFormData] = useState({ nama: "", jumlah: "", hargaJual: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddData = () => {
    if (editIndex !== null) {
      const updatedData = [...penjualanData];
      updatedData[editIndex] = formData;
      setPenjualanData(updatedData);
      setEditIndex(null);
    } else {
      setPenjualanData([...penjualanData, formData]);
    }
    setFormData({ nama: "", jumlah: "", hargaJual: "" });
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setFormData(penjualanData[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    setPenjualanData(penjualanData.filter((_, i) => i !== index));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ nama: "", jumlah: "", hargaJual: "" });
    setEditIndex(null);
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.text("Tabel Penjualan", 20, 10);
    const tableColumn = ["Nama Tanaman", "Jumlah", "Harga Jual"];
    const tableRows = penjualanData.map((data) => [data.nama, data.jumlah, data.hargaJual]);
    doc.autoTable({ head: [tableColumn], body: tableRows, startY: 20 });
    doc.save("tabel-penjualan.pdf");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = penjualanData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(penjualanData.length / itemsPerPage);

  return (
    <div className="flex gap-4 p-4 h-full">
      {/* Tambah Penjualan */}
      <div className="flex flex-col w-[30%] gap-4 bg-green-100 p-4 rounded-lg shadow-md">
        <h3 className="p-3 text-lg font-bold bg-green-400 rounded-md rounded-br-[40px] rounded-tl-[40px] w-56 border-r-8 border-l-8 border-[#08a19f] shadow-xl mb-4">Tambah Penjualan</h3>
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={formData.nama}
            onChange={handleInputChange}
            className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            name="jumlah"
            placeholder="Jumlah"
            value={formData.jumlah}
            onChange={handleInputChange}
            className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            name="hargaJual"
            placeholder="Harga Jual"
            value={formData.hargaJual}
            onChange={handleInputChange}
            className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full"
          />
          <button
            onClick={handleAddData}
            className="bg-[#08A19F] text-white p-2 rounded w-44 hover:bg-blue-500 mb-5"
          >
            {editIndex !== null ? "Update Penjualan" : "Tambah Penjualan"}
          </button>
      </div>

      {/* Tabel Penjualan */}
      <div className="flex flex-col w-[70%] h-full overflow-y-auto bg-green-100 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h4 className="p-3 text-lg font-bold bg-green-400 rounded-md rounded-br-[40px] rounded-tl-[40px] w-48 border-r-8 border-l-8 border-[#08a19f] shadow-xl mb-4">Tabel Penjualan</h4>
          <button onClick={handlePrint} className="flex gap-2 bg-[#08a19f] text-white p-2 rounded-md hover:bg-blue-600">
            <span>Print</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path></svg>
            </button>
        </div>
        <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: "300px" }}>
          <table className="w-full table-auto border-collapse border border-green-400 mt-2">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="border border-green-400 p-2">Nama Tanaman</th>
                <th className="border border-green-400 p-2">Jumlah</th>
                <th className="border border-green-400 p-2">Harga Jual</th>
                <th className="border border-green-400 p-2 w-32">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((data, index) => (
                <tr key={index} className="hover:bg-green-400">
                  <td className="border border-green-400 p-2">{data.nama}</td>
                  <td className="border border-green-400 p-2">{data.jumlah}</td>
                  <td className="border border-green-400 p-2">{data.hargaJual}</td>
                  <td className="border border-green-400 p-2 flex gap-1 justify-center">
                    <button
                      onClick={() => handleEdit(indexOfFirstItem + index)}
                      className="bg-[#08A19F] w-16 text-white p-1 rounded hover:bg-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(indexOfFirstItem + index)}
                      className="bg-red-500 w-16 text-white p-1 rounded hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <label htmlFor="itemsPerPage" className="mr-2">Rows per page:</label>
            <select id="itemsPerPage" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="p-1 border border-gray-300 rounded-md">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-md ${currentPage === i + 1 ? "bg-green-600 text-white" : "bg-gray-200"}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup for Editing */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-green-100 p-6 rounded-lg shadow-md w-[400px]">
            <h2 className="p-3 text-lg font-bold bg-green-400 rounded-md rounded-br-[40px] rounded-tl-[40px] w-40 border-r-8 border-l-8 border-[#08a19f] mb-4">Edit Penjualan</h2>
            <div className="space-y-2">
              <input
                type="text"
                name="nama"
                placeholder="Nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="bg-slate-100 border border-green-500 p-2 rounded w-full"
              />
              <input
                type="number"
                name="jumlah"
                placeholder="Jumlah"
                value={formData.jumlah}
                onChange={handleInputChange}
                className="bg-slate-100 border border-green-500 p-2 rounded w-full"
              />
              <input
                type="number"
                name="hargaJual"
                placeholder="Harga Jual"
                value={formData.hargaJual}
                onChange={handleInputChange}
                className="bg-slate-100 border border-green-500 p-2 rounded w-full"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Batal
                </button>
                <button
                  onClick={handleAddData}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Penjualan;
