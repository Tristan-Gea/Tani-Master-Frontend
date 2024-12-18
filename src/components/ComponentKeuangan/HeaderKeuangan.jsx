import React from "react";

const HeaderKeuangan = ({ summary }) => {
  return (
    <div className="bg-green-100 p-6 ounded-lg shadow-lg">
      <h1 className="text-2xl p-3 font-bold bg-gradient-to-r from-green-400 to-green-500 rounded-md rounded-br-[40px] rounded-tl-[40px] w-fit px-6 py-2 border-r-8 border-l-8 border-blue-400 mb-6 shadow-md">
        Ringkasan Keuangan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="bg-blue-100 text-blue-800 p-4 rounded-md shadow-2xl">
            <p className="text-lg">
              Pendapatan:{" "}
              <span className="font-semibold">
                Rp {summary.totalPendapatan.toLocaleString()}
              </span>
            </p>
          </div>
          <div className="bg-red-100 text-red-800 p-4 rounded-md shadow-2xl">
            <p className="text-lg">
              Pengeluaran:{" "}
              <span className="font-semibold">
                Rp {summary.totalPengeluaran.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md shadow-2xl">
            <p className="text-lg">
              Pinjaman:{" "}
              <span className="font-semibold">
                Rp {summary.totalPinjaman.toLocaleString()}
              </span>
            </p>
          </div>
          <div className="bg-purple-100 text-purple-800 p-4 rounded-md shadow-2xl">
            <p className="text-lg">
              Modal:{" "}
              <span className="font-semibold">
                Rp {summary.totalModal.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-6 justify-center text-center">
        <h2 className="text-3xl p-3 rounded-xl bg-green-500 font-bold shadow-xl">
          Total Saldo : Rp. {summary.totalSaldo.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};

export default HeaderKeuangan;
