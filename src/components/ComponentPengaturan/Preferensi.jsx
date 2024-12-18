import React from "react";

const Preferensi = () => {
  return (
    <section className="bg-transparent p-6 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl mb-4">Preferensi</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Bahasa:</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
            <option>Indonesia</option>
            <option>English</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Tema:</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
            <option>Terang</option>
            <option>Gelap</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default Preferensi;
