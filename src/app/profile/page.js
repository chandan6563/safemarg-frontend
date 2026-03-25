"use client";
import { useState } from "react";
import Image from "next/image";
import { User, Phone, Mail, MapPin, Calendar, Users, Edit, Check } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "John",
    lastName: "Doe",
    dob: "1995-08-20",
    gender: "Male",
  });

  const [communicationDetails, setCommunicationDetails] = useState({
    phone: "+91 9876543210",
    email: "john@example.com",
    address: "123 Street, New Delhi",
  });

  const handlePersonalChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const handleCommunicationChange = (e) => {
    setCommunicationDetails({
      ...communicationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    setIsEditing(false);
    // 🚀 Here you can call API to save updated data
    console.log("Updated Personal:", personalDetails);
    console.log("Updated Communication:", communicationDetails);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Profile Card */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-700 shadow-xl rounded-2xl p-8 flex flex-col items-center text-center mb-12 transform transition-all hover:scale-[1.02] hover:shadow-2xl">
        <Image
          src="https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg"
          alt="Profile Pic"
          width={140}
          height={140}
          unoptimized
          className="rounded-full border-4 border-white shadow-lg"
        />
        <h2 className="text-3xl font-bold mt-4 text-white">
          {personalDetails.firstName} {personalDetails.lastName}
        </h2>
        <p className="text-blue-100 flex items-center gap-2 mt-2">
          <Phone size={16} /> {communicationDetails.phone}
        </p>
        <p className="text-blue-100 flex items-center gap-2">
          <Mail size={16} /> {communicationDetails.email}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mb-6">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Edit size={18} /> Edit
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Check size={18} /> Update
          </button>
        )}
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Details Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-700 border-b pb-2">
            <User size={20} /> Personal Details
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={personalDetails.firstName}
                onChange={handlePersonalChange}
                disabled={!isEditing}
                className={`mt-1 w-full border rounded-lg px-3 py-2 transition ${
                  isEditing
                    ? "focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={personalDetails.lastName}
                onChange={handlePersonalChange}
                disabled={!isEditing}
                className={`mt-1 w-full border rounded-lg px-3 py-2 transition ${
                  isEditing
                    ? "focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Date of Birth
              </label>
              <div className="flex items-center">
                <Calendar size={18} className="text-gray-400 mr-2" />
                <input
                  type="date"
                  name="dob"
                  value={personalDetails.dob}
                  onChange={handlePersonalChange}
                  disabled={!isEditing}
                  className={`mt-1 flex-1 border rounded-lg px-3 py-2 transition ${
                    isEditing
                      ? "focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      : "bg-gray-100 cursor-not-allowed"
                  }`}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Gender
              </label>
              <div className="flex items-center">
                <Users size={18} className="text-gray-400 mr-2" />
                <select
                  name="gender"
                  value={personalDetails.gender}
                  onChange={handlePersonalChange}
                  disabled={!isEditing}
                  className={`mt-1 flex-1 border rounded-lg px-3 py-2 transition ${
                    isEditing
                      ? "focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      : "bg-gray-100 cursor-not-allowed"
                  }`}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Communication Details Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-700 border-b pb-2">
            <Phone size={20} /> Communication Details
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={communicationDetails.phone}
                onChange={handleCommunicationChange}
                disabled={!isEditing}
                className={`mt-1 w-full border rounded-lg px-3 py-2 transition ${
                  isEditing
                    ? "focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={communicationDetails.email}
                onChange={handleCommunicationChange}
                disabled={!isEditing}
                className={`mt-1 w-full border rounded-lg px-3 py-2 transition ${
                  isEditing
                    ? "focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <div className="flex items-start">
                <MapPin size={18} className="text-gray-400 mr-2 mt-2" />
                <textarea
                  name="address"
                  value={communicationDetails.address}
                  onChange={handleCommunicationChange}
                  disabled={!isEditing}
                  className={`mt-1 flex-1 border rounded-lg px-3 py-2 transition ${
                    isEditing
                      ? "focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      : "bg-gray-100 cursor-not-allowed"
                  }`}
                  rows={3}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
