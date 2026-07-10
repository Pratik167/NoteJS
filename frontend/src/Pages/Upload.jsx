import React, { useState } from "react";
import axios from "../api/axios";
const Upload = () => {

    const [form, setForm] = useState({
        title: "",
        faculty: "",
        subject: "",
        semester: "",
        description: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleFile = (e) => {
        setForm({
            ...form,
            file: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("faculty", form.faculty);
        formData.append("subject", form.subject);
        formData.append("semester", form.semester);
        formData.append("description", form.description);
        formData.append("file", form.file);

        try {
            const res = await axios.post(
                "/api/notes",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(res.data);
            alert("Uploaded successfully!");

        } catch (err) {
            console.error("UPLOAD ERROR FULL:", err);

            if (err.response) {
                console.log("STATUS:", err.response.status);
                console.log("DATA:", err.response.data);
                console.log("HEADERS:", err.response.headers);
            } else if (err.request) {
                console.log("NO RESPONSE FROM SERVER");
            } else {
                console.log("ERROR:", err.message);
            }

            alert("Upload failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">

            <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">

                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    Upload Notes
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <input
                        type="text"
                        name="title"
                        placeholder="Note Title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />
                    <select
                        name="faculty"
                        value={form.faculty}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    >
                        <option value="">Select Faculty</option>
                        <option value="BIT">BIT</option>
                        <option value="BCA">BCA</option>
                        <option value="CSIT">CSIT</option>
                        <option value="BITM">BITM</option>
                        <option value="BBA">BBA</option>
                        <option value="BBS">BBS</option>
                    </select>
                    <select
                        name="semester"
                        value={form.semester}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    >
                        <option>Select Semester</option>
                        <option value="1">1st Semester</option>
                        <option value="2">2nd Semester</option>
                        <option value="3">3rd Semester</option>
                        <option value="4">4th Semester</option>
                        <option value="5">5th Semester</option>
                        <option value="6">6th Semester</option>
                        <option value="7">7th Semester</option>
                        <option value="8">8th Semester</option>
                    </select>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    

                    <textarea
                        rows="5"
                        name="description"
                        placeholder="Description..."
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />
                    <div>
                    <label className="cursor-pointer bg-blue-600 text-white px-2 py-3 rounded-lg hover:bg-blue-700 inline-block">
                📄 Choose PDF
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFile}
                        className="hidden"
                    />
                    </label>
                    {form.file && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-700 font-medium">
                                ✅ {form.file.name}
                            </p>
                        </div>
                    )}
                    </div>


                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Upload Note
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Upload;