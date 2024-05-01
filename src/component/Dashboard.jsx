// Dashboard.js
import React, { useState } from 'react';
import dashImage from '../assets/two.jpg'; // Import your image here
import "../css/style.css";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dob: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log('Form submitted:', formData);
    // Close the form after submission
    setShowForm(false);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold underline text-left">Sales Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className="bg-[#081a51] text-white py-10 text-center mt-5 flex justify-center items-center text-2xl rounded-xl cursor-pointer"
            onClick={openForm}
          >
            <div className="mx-auto">Project</div>
          </div>
          <div
            className="bg-[#081a51] text-white py-10 text-center  mt-5 flex justify-center items-center text-2xl rounded-xl cursor-pointer"
            onClick={openForm}
          >
            <div className="mx-auto">Enquiry</div>
          </div>
          <div
            className="bg-[#081a51] text-white py-10 text-center mt-5 flex justify-center items-center text-2xl rounded-xl cursor-pointer"
            onClick={openForm}
          >
            <div className="mx-auto">Revenue</div>
          </div>
        </div>
      </div>

      {/* Show the form when showForm is true */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-xl form-container"> {/* Apply the custom class */}
            <h2 className="text-xl font-semibold mb-4">Hii.. Welcome to SKK ✨</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full custom-input-placeholder  custom-input  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 custom-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full custom-input-placeholder  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 custom-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md custom-input-placeholder  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 custom-input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full custom-input-placeholder rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 custom-input"
                  placeholder="dd/mm/yyyy"
                  required
                />
              </div>
              <div className="flex justify-end">
  <button
    type="submit"
    className="bg-[#081A51] text-white text-xl mt-2 px-4 py-2 rounded-md hover:text-white hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
  >
    Submit
  </button>
  <button
    type="button"
    onClick={closeForm}
    className="ml-2 bg-[#081A51] mt-2 text-xl text-white px-4 py-2 rounded-md hover:text-white  hover:bg-blue-600 focus:outline-none "
  >
    Cancel
  </button>
</div>


            </form>
          </div>
        </div>
      )}

      {/* Add your image below the buttons */}
      <div className="flex justify-center mt-4">
        <img src={dashImage} className='rounded-xl mt-4' alt="Description of the image" />
      </div>
    </div>
  );
};

export default Dashboard;
