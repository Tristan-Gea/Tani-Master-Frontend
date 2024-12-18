import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutKeuangan from "../../components/Layout/LayoutKeuangan";
import HeaderKeuangan from "../../components/ComponentKeuangan/HeaderKeuangan";
import RiwayatKeuangan from "../../components/ComponentKeuangan/RiwayatKeuangan";

const calculateSummary = (transactions) => {
  let totalPendapatan = 0;
  let totalPengeluaran = 0;
  let totalPinjaman = 0;
  let totalModal = 0;

  transactions.forEach((item) => {
    switch (item.tipe) {
      case "Pendapatan":
        totalPendapatan += item.nominal;
        break;
      case "Pengeluaran":
        totalPengeluaran += item.nominal;
        break;
      case "Pinjaman":
        totalPinjaman += item.nominal;
        break;
      case "Modal":
        totalModal += item.nominal;
        break;
      default:
        break;
    }
  });

  return {
    totalPendapatan,
    totalPengeluaran,
    totalPinjaman,
    totalModal,
    totalSaldo: totalPendapatan - totalPengeluaran + totalPinjaman + totalModal,
  };
};

const KeuanganPage = () => {
  const [riwayatKeuangan, setRiwayatKeuangan] = useState([
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/riwayat-keuangan");
        setRiwayatKeuangan(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const summary = calculateSummary(riwayatKeuangan);

  const handleAdd = async (newTransaction) => {
    try {
      const response = await axios.post("http://localhost:5000/api/riwayat-keuangan",
        newTransaction)
      setRiwayatKeuangan([...riwayatKeuangan, newTransaction]);
    } catch (error) {
      
    }
  };

  const handleUpdate = async (updatedTransaction, index) => {
    try {
      const {id,...data} = updatedTransaction;
      await axios.put(`http://localhost:5000/api/riwayat-keuangan/${id}`, data);
      const updatedRiwayat = [...riwayatKeuangan];
      updatedRiwayat[index] = updatedTransaction;
      setRiwayatKeuangan(updatedRiwayat);
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      const transaction = riwayatKeuangan[index];
      await axios.delete(`http://localhost:5000/api/riwayat-keuangan/${transaction.id}`);
      const filteredRiwayat = riwayatKeuangan.filter((_, i) => i !== index);
      setRiwayatKeuangan(filteredRiwayat);
    } catch (error) {
      
    }
  };

  return (
    <LayoutKeuangan>
      {/* Header Section */}
      <HeaderKeuangan summary={summary} />

      {/* Main Content */}
      <div className="flex flex-row gap-4 mt-2 w-full h-full">
        <RiwayatKeuangan 
          riwayatKeuangan={riwayatKeuangan} 
          onAdd={handleAdd} 
          onUpdate={handleUpdate} 
          onDelete={handleDelete} 
        />
      </div>
    </LayoutKeuangan>
  );
};

export default KeuanganPage;