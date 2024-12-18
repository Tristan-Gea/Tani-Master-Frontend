import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import KeuanganPage from './pages/Dashboard/KeuanganPage';
import InventarisPage from './pages/Dashboard/InventarisPage';
import ProduksiPage from './pages/Dashboard/ProduksiPage';
import PanduanPage from './pages/Dashboard/PanduanPage';
import PengaturanPage from './pages/Dashboard/PengaturanPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/keuangan" element={<KeuanganPage />} />
        <Route path="/inventaris" element={<InventarisPage />} />
        <Route path="/produksi" element={<ProduksiPage />} />
        <Route path="/panduan" element={<PanduanPage />} />
        <Route path="/pengaturan" element={<PengaturanPage />} />
      </Routes>
    </Router>
  );
};

export default App;
