import { useState } from "react";

const sampleNotes = [
  {
    id: 1,
    title: "Data Structures",
    faculty: "BIT",
    semester: 3,
    subject: "DSA",
    created_by: "Pratik",
    description: "Complete DSA notes with examples.",
    file: "data_structures.pdf",
  },
  {
    id: 2,
    title: "Java Programming",
    faculty: "BIT",
    semester: 2,
    subject: "Java",
    created_by: "Pratik",
    description: "Java handwritten notes.",
    file: "java_notes.pdf",
  },
  {
    id: 3,
    title: "Database Management",
    faculty: "BIT",
    semester: 4,
    subject: "DBMS",
    created_by: "Pratik",
    description: "Normalization and SQL.",
    file: "dbms_notes.pdf",
  },
];

export default function MyNotes() {
  const [search, setSearch] = useState("");

  const filteredNotes = sampleNotes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-5">

        <h1 className="text-4xl font-bold text-gray-800">
          My Notes
        </h1>

        <p className="text-gray-500 mt-2 mb-6">
          Manage all the notes you've uploaded.
        </p>

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full p-3 rounded-lg border border-gray-300 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid gap-6">

          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >

              <h2 className="text-2xl font-semibold text-gray-800">
                {note.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {note.faculty} • Semester {note.semester}
              </p>

              <p className="mt-2">
                <span className="font-semibold">Subject:</span>{" "}
                {note.subject}
              </p>

              <p>
                <span className="font-semibold">Uploaded By:</span>{" "}
                {note.created_by}
              </p>

              <p className="text-gray-600 mt-3">
                {note.description}
              </p>

              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                📄 {note.file}
              </div>

              <div className="flex gap-3 mt-6">

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  Download
                </button>

                <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600">
                  Edit
                </button>

                <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                  Delete
                </button>

              </div>

            </div>
          ))}

          {filteredNotes.length === 0 && (
            <div className="text-center text-gray-500 py-10">
              No notes found.
            </div>
          )}

        </div>

      </div>
    </div>
  );
}