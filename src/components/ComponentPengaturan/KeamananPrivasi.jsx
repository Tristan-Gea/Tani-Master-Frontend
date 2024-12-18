import React from "react";

const KeamananPrivasi = () => {
  return (
    <section className="bg-transparent p-6 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl mb-4">Keamanan & Privasi</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Kata Sandi Baru:</label>
          <input
            type="password"
            placeholder="Kata Sandi Baru"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Aktifkan Autentikasi Dua Faktor</label>
        </div>
      </form>
    </section>
  );
};

export default KeamananPrivasi;
