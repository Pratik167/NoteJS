import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Admin Dashboard
      </h1>

      <p className="text-gray-500 mb-10">
        Welcome back, Administrator
      </p>

      {/* Stats */}

      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Total Notes</h2>
          <h1 className="text-4xl font-bold text-blue-600 mt-2">
            152
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Registered Users</h2>
          <h1 className="text-4xl font-bold text-green-600 mt-2">
            28
          </h1>
        </div>

      </div>

      {/* Menu */}

      <div className="grid md:grid-cols-2 gap-8">

        <Link
          to="/admin/notes"
          className="bg-white rounded-xl shadow hover:shadow-xl transition p-8"
        >
          <h2 className="text-2xl font-bold mb-3">
                📚 Manage Notes
          </h2>

          <p className="text-gray-500">
            View, edit and remove uploaded notes.
          </p>
        </Link>

        <Link
          to="/admin/users"
          className="bg-white rounded-xl shadow hover:shadow-xl transition p-8"
        >
          <h2 className="text-2xl font-bold mb-3">
                👥 Manage Users
          </h2>

          <p className="text-gray-500">
            View registered users and manage accounts.
          </p>
        </Link>

      </div>

    </div>
  );
};

export default Admin;