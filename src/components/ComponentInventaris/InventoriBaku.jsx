import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const InventoriBaku = ({ bahanBaku, setBahanBaku }) => {
  const [form, setForm] = useState({ nama: "", jumlah: "", biaya: "", tanggal: "" });
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [editForm, setEditForm] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleTambahBaku = () => {
    const newData = {
      id: bahanBaku.length + 1,
      nama: form.nama,
      jumlah: parseInt(form.jumlah),
      biaya: parseInt(form.biaya),
      tanggal: form.tanggal,
      total: parseInt(form.jumlah) * parseInt(form.biaya),
    };
    setBahanBaku([...bahanBaku, newData]);
    setForm({ nama: "", jumlah: "", biaya: "", tanggal: "" });
  };
  
  const handleEdit = (item) => {
    setEditForm({ ...item });
  };
  
  const handleSaveEdit = () => {
    setBahanBaku(
      bahanBaku.map((item) => (item.id === editForm.id ? { ...editForm, total: editForm.jumlah * editForm.biaya } : item))
    );
    setEditForm(null);
  };
  
  const handleHapus = (id) => {
    setBahanBaku(bahanBaku.filter((item) => item.id !== id));
  };
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = bahanBaku.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

   // Fungsi untuk mencetak PDF
    const handlePrintPDF = () => {
      const doc = new jsPDF();
      doc.text("Laporan Inventori Bahan Baku", 10, 10);
  
      const tableColumn = ["Nama", "Jumlah", "Biaya", "Tanggal", "Total"];
      const tableRows = bahanBaku.map((item) => [
        item.nama,
        item.jumlah,
        item.biaya,
        item.tanggal,
        item.total,
      ]);
  
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 20,
      });
  
      doc.save("Laporan_Inventori_Bahan_Baku.pdf");
    };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-green-100 p-4 rounded-lg shadow mb-3">
        <h4 className="p-3 text-lg font-bold bg-green-400 rounded-md rounded-br-[40px] rounded-tl-[40px] w-60 border-r-8 border-l-8 border-[#08a19f] shadow-xl mb-4 ">Tambah Bahan Baku</h4>
        <input name="nama" placeholder="Nama" value={form.nama} onChange={handleInputChange} className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2" />
        <input name="jumlah" type="number" placeholder="Jumlah" value={form.jumlah} onChange={handleInputChange} className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2" />
        <input name="biaya" type="number" placeholder="Biaya" value={form.biaya} onChange={handleInputChange} className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2" />
        <input name="tanggal" type="date" value={form.tanggal} onChange={handleInputChange} className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2" />
        <div className="flex justify-end gap-2">
        <button onClick={handleTambahBaku} className="bg-[#08A19F] text-white p-2 rounded w-48 hover:bg-blue-500">
          Tambah
        </button>
        </div>
      </div>

      {/* form edit PopUp */}
      {editForm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-green-100 p-4 rounded-lg shadow w-[25%] ">
            <h4 className="p-2 bg-green-500 rounded-[15px] border-b-[7px] border-[#08a19f] w-[150px] font-semibold shadow-xl mb-5">Edit Bahan Baku</h4>
            <input
              name="nama"
              placeholder="Nama"
              value={editForm.nama}
              onChange={handleEditInputChange}
              className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2"
            />
            <input
              name="jumlah"
              type="number"
              placeholder="Jumlah"
              value={editForm.jumlah}
              onChange={handleEditInputChange}
              className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2"
            />
            <input
              name="biaya"
              type="number"
              placeholder="Biaya"
              value={editForm.biaya}
              onChange={handleEditInputChange}
              className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2"
            />
            <input
              name="tanggal"
              type="date"
              value={editForm.tanggal}
              onChange={handleEditInputChange}
              className="bg-slate-100 border border-green-500 rounded-lg p-2 w-full mb-2"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditForm(null)}
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
              >
                Batal
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-[#08A19F] text-white p-2 rounded hover:bg-blue-500"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col h-full overflow-y-auto bg-green-100 p-4 rounded-lg shadow">
        <h4 className="p-3 text-lg font-bold bg-green-400 rounded-md rounded-br-[40px] rounded-tl-[40px] w-60 border-r-8 border-l-8 border-[#08a19f] shadow-xl mb-4 ">Inventori Bahan Baku</h4>
        <div className="flex flex-row justify-between mb-3">
        <input
          type="text"
          placeholder="Cari Nama Bahan Baku"
          value={search}
          onChange={handleSearch}
          className="bg-slate-100 border border-green-500 rounded-lg p-2 w-[40%]"
        />
        <button onClick={handlePrintPDF} className="flex gap-2 w-[13%] justify-center bg-[#08A19F] text-white p-2 rounded hover:bg-blue-500">
          <span>Print</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path></svg>
        </button>
        </div>
        <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: "400px" }}>
        <table className="w-full table-auto border-collapse border border-green-400">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="border border-green-400 p-2">Nama</th>
              <th className="border border-green-400 p-2">Jumlah</th>
              <th className="border border-green-400 p-2">Biaya</th>
              <th className="border border-green-400 p-2">Tanggal</th>
              <th className="border border-green-400 p-2">Total</th>
              <th className="border border-green-400 p-2 w-12">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-green-400">
                <td className="border border-green-400 p-2">{item.nama}</td>
                <td className="border border-green-400 p-2">{item.jumlah}</td>
                <td className="border border-green-400 p-2">{item.biaya}</td>
                <td className="border border-green-400 p-2">{item.tanggal}</td>
                <td className="border border-green-400 p-2">{item.total}</td>
                <td className="border border-green-400 p-2 flex gap-1 justify-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-[#08A19F] w-16 text-white p-1 rounded hover:bg-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleHapus(item.id)}
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
    </div>
  );
};

export default InventoriBaku;