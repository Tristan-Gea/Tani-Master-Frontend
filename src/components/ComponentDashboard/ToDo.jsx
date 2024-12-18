import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDo = () => {
  const [dataList, setDataList] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newData, setNewData] = useState({
    title: "",
    description: "",
    status: "Belum Mulai",
    due_date: "",
    category: "",
    
    
    reminder_time: "",
  });
  const [todoList, setTodoList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Fetch todos from backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todos");
        setTodoList(response.data)
        console.log("Todos fetched:", response.data);
      } catch (error) {
        console.error("Failed to fetch todos", error);
      }
    };
    fetchTodos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const handleAddData = async () => {
    try {
      if (isEdit) {
        console.log("Editing data:", newData);
        await axios.put(`http://localhost:5000/api/todos/${editId}`, newData);
        setIsEdit(false);
        setEditId(null);
      } else {
        console.log("Adding new data:", newData);
        await axios.post("http://localhost:5000/api/todos", newData);
      }
      setIsPopupOpen(false);
      setNewData({
        title: "",
        description: "",
        status: "Belum Mulai",
        due_date: "",
        category: "",
        
        
        reminder_time: "",
      });
      // Refresh the todo list
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodoList(response.data);
      console.log("Updated todo list:", response.data);
    } catch (error) {
      console.error("Failed to add/edit todo", error);
    }
  };

  const handleEditRow = (id) => {
    console.log("Editing todo with ID:", id);
    const todo = todoList.find((item) => item.id === id);
    if (todo) {
      setIsEdit(true);
      setEditId(id);
      setNewData(todo);
      setIsPopupOpen(true);
      console.log("Todo data for editing:", todo);
    } else {
      console.error("Todo not found with ID:", id);
    }
  };

  const handleDeleteRow = async (id) => {
    try {
      console.log("Deleting todo with ID:", id);
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      // Refresh the todo list after deletion
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodoList(response.data);
      console.log("Todo list after deletion:", response.data);
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  };

  const totalPages = dataList.length > 0 ? Math.ceil(dataList.length / itemsPerPage) : 1;
  const handleChangePage = (pageNumber) => setCurrentPage(pageNumber);
  const handleChangeItemsPerPage = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const paginatedData = todoList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className="flex flex-col overflow-y-auto rounded-[15px] bg-green-100  w-full p-4 shadow-[0px_4px_6px_rgba(0,0,0,0.1)] shadow-gray-500">
      <div className="flex justify-between w-full items-center mb-4">
          <h3 className="flex justify-center p-2 text-2xl font-bold bg-green-400 rounded-md rounded-br-[40px] rounded-tl-[40px] w-[8%] border-r-8 border-l-8 border-[#08a19f] shadow-xl mb-4">Task</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="flex p-2 bg-[#08a19f] font-semibold text-white rounded-md hover:bg-green-600 gap-1 items-center"
          >
            <span>Tambah Task</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: "300px" }}>
        <table className="w-full rounded shadow border-green-400">
          <thead>
            <tr className="bg-green-500 rounded[10px] text-white">
              <th className="border border-green-400 p-2">Title</th>
              <th className="border border-green-400 p-2">Description</th>
              <th className="border border-green-400 p-2">Due Date</th>
              <th className="border border-green-400 p-2">Category</th>
              
              <th className="border border-green-400 p-2">Status</th>
              
              <th className="border border-green-400 p-2">Reminder Time</th>
              <th className="border border-green-400 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(paginatedData) && paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-green-400 p-2">{item.title}</td>
                  <td className="border border-green-400 p-2">{item.description}</td>
                  <td className="border border-green-400 p-2">{item.due_date}</td>
                  <td className="border border-green-400 p-2">{item.category}</td>
                  <td className="border border-green-400 p-2">{item.status}</td>
                  
                  <td className="border border-green-400 p-2">{item.reminder_time || "-"}</td>
                  <td className="border border-green-400 flex gap-2 p-2 justify-center">
                    <button
                      className="bg-[#08A19F] w-16 text-white p-1 rounded hover:bg-blue-500"
                      onClick={() => handleEditRow(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 w-16 text-white p-1 rounded hover:bg-red-600"
                      onClick={() => handleDeleteRow(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-2">Tidak ada data.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <label htmlFor="itemsPerPage" className="mr-2">Rows per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleChangeItemsPerPage}
            className="p-1 border border-gray-300 rounded-md"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="flex gap-2">
          {dataList.length > 0 && Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handleChangePage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1 ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {isPopupOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-green-100 p-6 rounded-[15px] shadow-lg w-[700px]">
      <h3 className="p-2 bg-green-500 rounded-[15px] border-b-[7px] border-[#08a19f] w-[130px] font-semibold shadow-xl mb-5">{isEdit ? "Edit Todo" : "Tambah Todo"}</h3>

      {/* form start */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddData();
        }}
      >
        {/* isi form */}
        <div className="grid grid-cols-2 gap-3">
        {/* nama aktivitas */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* tanggal */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Due Date</label>
            <input
              type="date"
              name="due_date"
              value={newData.due_date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* kategori aktivitas */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
            name="category"
            value={newData.category}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required>
              <option value="">Pilih Kategori</option>
              <option value="Pekerjaan">Pekerjaan</option>
              <option value="Pribadi">Pribadi</option>
              <option value="Urgent">Urgent</option>
              <option value="Sosial">Sosial</option>
              </select>
              </div>
              
                  {/* status */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-2">Status</label>
                    <select
                    name="status"
                    value={newData.status}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="Belum Mulai">Belum Mulai</option>
                      <option value="Sedang Berjalan">Sedang Berjalan</option>
                      <option value="Selesai">Selesai</option>
                      </select>
                      </div>
              {/* deskripsi */}
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                name="description"
                value={newData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                />
                </div>
          
          {/* Reminder Time */}
          <div className="mb-2 col-span-2">
            <label className="block text-sm font-medium mb-2">Reminder Time</label>
            <input
            type="datetime-local"
            name="reminder_time"
            value={newData.reminder_time}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
            />
            </div>

        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setIsPopupOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#08A19F]  hover:bg-blue-500 text-white rounded-md"
          >
            {isEdit ? "Update" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  </div>
      )}
    </div>
  );
};

export default ToDo;