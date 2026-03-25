"use client";
import { useState } from "react";
import { Lock, Key, CheckCircle, XCircle } from "lucide-react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setError("All fields are required.");
      setMessage("");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      setMessage("");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New password and confirm password do not match.");
      setMessage("");
      return;
    }

    try {
      // 🚀 Call your API here
      // await api.changePassword({ oldPassword, newPassword });

      setMessage("Password changed successfully!");
      setError("");
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err) {
      setError("Failed to change password. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Lock className="text-blue-600" size={26} /> Change Password
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Keep your account secure by updating your password regularly.
        </p>

        {/* Form */}
        <form onSubmit={handleChangePassword} className="space-y-5">
          {/* Old Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Old Password
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter your old password"
                className="pl-10 pr-3 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter a new password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">
              Must be at least 6 characters.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Re-enter new password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
            />
          </div>

          {/* Messages */}
          {message && (
            <p className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-50 border border-green-200 p-2 rounded-lg">
              <CheckCircle size={16} /> {message}
            </p>
          )}
          {error && (
            <p className="flex items-center gap-2 text-red-600 text-sm font-medium bg-red-50 border border-red-200 p-2 rounded-lg">
              <XCircle size={16} /> {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
