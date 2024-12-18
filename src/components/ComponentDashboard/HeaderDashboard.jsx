import React, { useState, useEffect } from 'react';
import { Avatar } from "@nextui-org/react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const HeaderDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Rico Hasiando");
  const [profilePicture, setProfilePicture] = useState("https://i.pravatar.cc/150?u=a04258114e29026708c");
  const [date, setDate] = useState(new Date());

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col p-1 rounded-[15px] bg-green-100 w-full shadow-[0px_4px_6px_rgba(0,0,0,0.1)] shadow-gray-500">
      <div className="flex">
        {/* Profile Section */}
        <div className="flex flex-col items-center w-1/4 p-4 bg-green-500 rounded-[15px] rounded-r-[70px] ">
          <Avatar src={profilePicture} className="w-40 h-40 text-large"/>
          <h1 className="mt-4 text-3xl font-bold text-center">{name}</h1>
          <button
            className="flex mt-4 px-4 py-2 bg-blue-400 text-white rounded-xl hover:bg-blue-500 items-center"
            onClick={handleEditClick}
          >
            <span>Edit Profile</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 010 2.828l-10 10A2 2 0 016.586 16H4a1 1 0 01-1-1v-2.586a2 2 0 01.586-1.414l10-10a2 2 0 012.828 0z" />
          </svg>
          </button>
        </div>

        {/* Welcome Section */}
        <div className="flex-1 pl-4 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500">
              {date.toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h2 className="text-3xl font-semibold mt-2">Selamat Datang, {name}</h2>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="w-1/4 pl-6">
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-lg shadow-md bg-[#92DB9F] "
          />
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </label>
            <label className="block mb-4">
              Profile Picture:
              <input
              type="file"
              name="attachment"
              onChange={(e) => {
                setProfilePicture({ ...newData, attachment: e.target.files[0] });
              }}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            </label>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
              onClick={handleSave}
            >
              Simpan
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setIsEditing(false)}
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDashboard;