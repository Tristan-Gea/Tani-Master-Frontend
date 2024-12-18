import React from "react";

const AkunPribadi = () => {
  return (
    <section className="bg-transparent p-6 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl mb-4">Akun Pribadi</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Nama Lengkap:</label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Alamat Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Nomor Telepon:</label>
          <input
            type="tel"
            placeholder="Nomor Telepon"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
      </form>
    </section>
  );
};

export default AkunPribadi;
