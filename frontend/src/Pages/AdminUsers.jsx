import React from "react";

const users = [
  {
    id:1,
    name:"Pratik",
    email:"pratik@gmail.com",
    faculty:"BIT"
  },
  {
    id:2,
    name:"Ram",
    email:"ram@gmail.com",
    faculty:"BCA"
  },
  {
    id:3,
    name:"Hari",
    email:"hari@gmail.com",
    faculty:"CSIT"
  }
];

const AdminUsers = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Manage Users
      </h1>

      <input
        type="text"
        placeholder="Search users..."
        className="border px-4 py-3 rounded-lg mb-6 w-full"
      />

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-600 text-white">

            <tr>

              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Faculty</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {users.map(user=>(
              <tr key={user.id} className="border-b">

                <td className="p-4">{user.name}</td>

                <td>{user.email}</td>

                <td>{user.faculty}</td>

                <td className="space-x-2">

                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-red-600 text-white px-3 py-1 rounded">
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AdminUsers;