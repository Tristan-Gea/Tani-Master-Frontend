import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import backgroundImage from '../assets/images/cabai.jpg'
import {BiUser} from "react-icons/bi"
import {AiOutlineUnlock} from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  // State untuk form login
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State untuk form register
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  // Mengambil data dari sessionStorage pada form login dan register
useEffect(() => {
  if (!isRegistering) {
    // Mereset form login
    setLoginUsername('');
    setLoginPassword('');
  } else {
    // Mereset form register
    setRegisterUsername('');
    setRegisterEmail('');
    setRegisterPassword('');
  }
}, [isRegistering]); // Menjalankan setiap kali isRegistering berubah

// Fungsi untuk meng-handle perubahan input tanpa sessionStorage
const handleInputChange = (e, formType) => {
  const { name, value } = e.target;

  // Mengatur state langsung tanpa menyimpan di sessionStorage
  if (formType === 'login') {
    if (name === 'loginUsername') setLoginUsername(value);
    if (name === 'loginPassword') setLoginPassword(value);
  } else if (formType === 'register') {
    if (name === 'registerUsername') setRegisterUsername(value);
    if (name === 'registerEmail') setRegisterEmail(value);
    if (name === 'registerPassword') setRegisterPassword(value);
  }
};

  // Fungsi untuk handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        usernameOrEmail: loginUsername,
        password: loginPassword,
      });

      if (response.status === 200) {
        alert('Login berhasil!');
        navigate("/dashboard");  // Redirect ke halaman dashboard setelah login
      }
    } catch (error) {
      alert('Login gagal. Cek kembali username dan password!');
      console.error(error);
    }
  };

  // Fungsi untuk handle register
  const handleRegister = async (e) => {
    e.preventDefault(); // Mencegah form submit otomatis
  
    try {
      // Mengirim permintaan ke API untuk registrasi
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      });
  
      // Cek jika status respons adalah 201 (created)
      if (response.status === 201) {
        alert('Registrasi berhasil! Silakan login.');
        setIsRegistering(false);  // Beralih ke form login setelah registrasi sukses
      }
    } catch (error) {
      // Menangani error jika ada
      if (error.response) {
        // Jika error datang dari server (misalnya status 400, 500, dll.)
        console.error("Error response:", error.response);
        alert(error.response?.data?.message || 'Registrasi gagal. Cek kembali data yang dimasukkan!');
      } else if (error.request) {
        // Jika permintaan tidak mendapat respons
        console.error("Error request:", error.request);
        alert('Tidak ada respons dari server. Periksa koneksi internet atau coba lagi nanti.');
      } else {
        // Jika ada kesalahan lain (misalnya dalam konfigurasi axios)
        console.error("Error message:", error.message);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover py-10" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="text-white bg-slate-800 border border-green-300 p-8 rounded-md shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative max-w-md w-full">
        <h1 className="text-white text-2xl font-semibold text-center mb-6">
          {isRegistering ? 'Silahkan Buat akun anda' : 'Selamat datang Di Tani Master!'}
        </h1>

        {/* Form login */}
        {!isRegistering ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative my-6">
            <input 
              type="text" 
              name="loginUsername"
              value={loginUsername} 
              onChange={(e) => handleInputChange(e, 'login')} 
              required 
              className="block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              placeholder=''
            />
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Username</label>
            <BiUser className="absolute top-4 right-4 text-white"/>
            </div>
            <div className="relative my-6">
            <input 
              type="password" 
              name="loginPassword"
              value={loginPassword} 
              onChange={(e) => handleInputChange(e, 'login')} 
              required 
              className="block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              placeholder=''
            />
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Password</label>
            {/* <AiOutlineUnlock className="absolute top-4 right-4 text-white"/> */}
            </div>
            <div className="text-white flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember Me">Remember Me </label>
            </div>
            <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none">
              Login
            </button>
          </form>
        ) : (
          // Form register
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="relative my-6">
            <input 
              type="text" 
              name="registerUsername"
              value={registerUsername} 
              onChange={(e) => handleInputChange(e, 'register')} 
              required 
              className="block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              placeholder=''
            />
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Username</label>
            <BiUser className="absolute top-4 right-4 text-white"/>
            </div>
            <div className="relative my-6">
            <input 
              type="email" 
              name="registerEmail"
              value={registerEmail} 
              onChange={(e) => handleInputChange(e, 'register')} 
              required 
              className="block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              placeholder=''
            />
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Email</label>
            <HiOutlineMail className="absolute top-4 right-4 text-white"/>
            </div>
            <div className="relative my-6">
            <input 
              type="password" 
              name="registerPassword"
              value={registerPassword} 
              onChange={(e) => handleInputChange(e, 'register')} 
              required 
              className="block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              placeholder=''
            />
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Password</label>
            {/* <AiOutlineUnlock className="absolute top-4 right-4 text-white"/> */}
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
            >
              Register
            </button>
          </form>
        )}

        <button 
          onClick={() => setIsRegistering(!isRegistering)} 
          className="mt-4 text-green-600 hover:text-green-700 w-full text-center"
        >
          {isRegistering ? 'Sudah punya akun? Login' : "Masih belum punya akun? Register"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;