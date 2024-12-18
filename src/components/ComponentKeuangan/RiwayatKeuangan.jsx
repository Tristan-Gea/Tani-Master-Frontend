import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const RiwayatKeuangan = ({ riwayatKeuangan, onAdd, onUpdate, onDelete }) => {
  const [newData, setNewData] = useState({
    tanggal: "",
    tipe: "Pendapatan",
    deskripsi: "",
    nominal: "",
  });

  const [isEditing, setIsEditing] = useState(false); // State untuk memantau popup
  const [editData, setEditData] = useState(null); // State untuk data yang akan diedit
  const [searchTipe, setSearchTipe] = useState(""); // State untuk pencarian berdasarkan tipe

   // Data yang difilter berdasarkan searchTipe
  const filteredData = riwayatKeuangan.filter((item) =>
    searchTipe ? item.tipe === searchTipe : true
  );

  // State untuk pagination
  const [itemsPerPage, setItemsPerPage] = useState(5); // Rows per page
  const [currentPage, setCurrentPage] = useState(1); // Current page

  // Hitung total halaman
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Data yang ditampilkan berdasarkan halaman saat ini
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Fungsi untuk menambah data baru
  const handleAdd = () => {
    if (newData.tanggal && newData.deskripsi && newData.nominal) {
      onAdd({
        ...newData,
        nominal: parseFloat(newData.nominal),
      });
      setNewData({
        tanggal: "",
        tipe: "Pendapatan",
        deskripsi: "",
        nominal: "",
      });
    }
  };

  // Fungsi untuk membuka popup edit
  const openEditPopup = (data, index) => {
    setEditData({ ...data, index });
    setIsEditing(true);
  };

  // Fungsi untuk menyimpan perubahan
  const saveEdit = () => {
    if (editData) {
      const updatedData = { 
        ...editData, 
        nominal: parseFloat(editData.nominal) 
      };
      onUpdate(updatedData, editData.index); // Kirim data terupdate
      setIsEditing(false);
      setEditData(null);
    }
  };

  // Fungsi untuk mengubah jumlah item per halaman
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset ke halaman pertama saat jumlah item berubah
  };

  const handleSearchTipeChange = (e) => {
    setSearchTipe(e.target.value);
    setCurrentPage(1);
  };

  const handlePrintPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Riwayat Keuangan", 10, 10);

    const tableColumn = ["Tanggal", "Tipe", "Deskripsi", "Nominal"];
    const tableRows = [];

    filteredData.forEach((item) => {
      const rowData = [
        item.tanggal,
        item.tipe,
        item.deskripsi,
        `Rp ${item.nominal.toLocaleString()}`,
      ];
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("Riwayat_Keuangan.pdf");
  };

  return (
    <div className="flex flex-col bg-green-100 overflow-y-auto shadow p-4 rounded-md w-full">
      <h2 className="p-3 text-2xl font-bold bg-green-400 rounded-md rounded-br-[40px] rounded-tl-[40px] w-[276px] border-r-8 border-l-8 border-[#08a19f] shadow-xl mb-3">
        Riwayat Keuangan
      </h2>

      {/* Form Tambah Transaksi */}
      <div className="flex flex-row gap-8">
      <div className="mb-4 w-[80%] p-2 shadow-xl rounded-xl">
        <h3 className="p-2 bg-green-400 rounded-[15px] border-b-[7px] border-[#08a19f] w-44 font-semibold shadow-xl mb-2">
          Tambah Transaksi
        </h3>
        <div className="flex gap-2">
          <input
            type="date"
            name="tanggal"
            value={newData.tanggal}
            onChange={handleInputChange}
            className="g-slate-100 border border-green-700 rounded-lg p-2 flex-1"
          />
          <select
            name="tipe"
            value={newData.tipe}
            onChange={handleInputChange}
            className="g-slate-100 border border-green-700 rounded-lg p-2 flex-1"
          >
            <option value="Pendapatan">Pendapatan</option>
            <option value="Pengeluaran">Pengeluaran</option>
            <option value="Pinjaman">Pinjaman</option>
            <option value="Modal">Modal</option>
          </select>
          <input
            type="text"
            name="deskripsi"
            value={newData.deskripsi}
            placeholder="Deskripsi"
            onChange={handleInputChange}
            className="g-slate-100 border border-green-700 rounded-lg p-2 flex-1"
          />
          <input
            type="number"
            name="nominal"
            value={newData.nominal}
            placeholder="Nominal"
            onChange={handleInputChange}
            className="border border-green-700 rounded-lg p-2 flex-1"
          />
        </div>
        <div className="flex gap-3 pt-3">
          <button
            onClick={handleAdd}
            className="bg-[#08A19F] text-white p-2 rounded w-[10%] hover:bg-blue-500"
          >
            Tambah
          </button>
          <button
            onClick={handlePrintPDF}
            className="flex gap-2 w-[10%] justify-center bg-[#08A19F] text-white p-2 rounded hover:bg-blue-500"
          >
            <span>Print</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path></svg>
          </button>
          </div>
      </div>
      {/* Filter Tipe */}
      <div className="mb-4 w-[20%] p-2 shadow-xl rounded-xl">
        <label className="block p-2 bg-green-400 rounded-[15px] border-b-[7px] border-[#08a19f] w-52 font-semibold shadow-xl mb-2">Cari Berdasarkan Tipe:</label>
        <select
          value={searchTipe}
          onChange={handleSearchTipeChange}
          className="w-full p-2 border border-green-700 rounded-md"
        >
          <option value="">Semua</option>
          <option value="Pendapatan">Pendapatan</option>
          <option value="Pengeluaran">Pengeluaran</option>
          <option value="Pinjaman">Pinjaman</option>
          <option value="Modal">Modal</option>
        </select>
      </div>
      </div>

      {/* Tabel Riwayat */}
      <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: "280px" }}>
        <table className="w-full table-auto border-collapse border border-green-400 shadow-xl">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="border border-green-400 p-2">Tanggal</th>
              <th className="border border-green-400 p-2">Tipe</th>
              <th className="border border-green-400 p-2">Deskripsi</th>
              <th className="border border-green-400 p-2">Nominal</th>
              <th className="border border-green-400 p-2 w-12">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-green-400 p-2">{item.tanggal}</td>
                <td className="border border-green-400 p-2">{item.tipe}</td>
                <td className="border border-green-400 p-2">{item.deskripsi}</td>
                <td className="border border-green-400 p-2">Rp {item.nominal.toLocaleString()}</td>
                <td className="border border-green-400 p-2 flex gap-1 justify-center">
                  <button
                    onClick={() => openEditPopup(item, index)}
                    className="bg-[#08A19F] w-16 text-white p-1 rounded hover:bg-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
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

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">
            Rows per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="p-1 border border-gray-300 rounded-md"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1 ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Popup Edit */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-100 rounded shadow p-4 w-1/3">
            <h3 className="p-2 bg-green-500 rounded-[15px] border-b-[7px] border-[#08a19f] w-[130px] font-semibold shadow-xl mb-5">Edit Transaksi</h3>
            <div className="flex flex-col gap-2">
              <input
                type="date"
                name="tanggal"
                value={editData.tanggal}
                onChange={handleEditChange}
                className="border rounded p-2"
              />
              <select
                name="tipe"
                value={editData.tipe}
                onChange={handleEditChange}
                className="border rounded p-2"
              >
                <option value="Pendapatan">Pendapatan</option>
                <option value="Pengeluaran">Pengeluaran</option>
                <option value="Pinjaman">Pinjaman</option>
                <option value="Modal">Modal</option>
              </select>
              <input
                type="text"
                name="deskripsi"
                value={editData.deskripsi}
                placeholder="Deskripsi"
                onChange={handleEditChange}
                className="border rounded p-2"
              />
              <input
                type="number"
                name="nominal"
                value={editData.nominal}
                placeholder="Nominal"
                onChange={handleEditChange}
                className="border rounded p-2"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Batal
                </button>
                <button
                  onClick={saveEdit}
                  className="bg-[#08A19F] hover:bg-blue-500 text-white px-4 py-2 rounded"
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

export default RiwayatKeuangan;
