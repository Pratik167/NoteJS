import React from "react";

const notes = [
  {
    id:1,
    title:"DSA Notes",
    faculty:"BIT",
    semester:3,
    uploader:"Pratik",
    subject:"DSA"
  },
  {
    id:2,
    title:"Java Complete",
    faculty:"BCA",
    semester:4,
    uploader:"Ram",
    subject:"Java"
  },
  {
    id:3,
    title:"DBMS Guide",
    faculty:"CSIT",
    semester:5,
    uploader:"Hari",
    subject:"DBMS"
  }
];

const AdminNotes = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Manage Notes
      </h1>

      <input
        type="text"
        placeholder="Search notes..."
        className="border px-4 py-3 rounded-lg mb-6 w-full"
      />

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-3">Title</th>
              <th>Faculty</th>
              <th>Semester</th>
              <th>Subject</th>
              <th>Uploader</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {notes.map(note=>(
              <tr key={note.id} className="border-b">

                <td className="p-4">{note.title}</td>
                <td>{note.faculty}</td>
                <td>{note.semester}</td>
                <td>{note.subject}</td>
                <td>{note.uploader}</td>

                <td className="space-x-2">

                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
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

export default AdminNotes;