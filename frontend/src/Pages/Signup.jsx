import React, { useState } from "react";
import axios from "axios";
import DefaultAvatar from "../Images/default-avatar.png";
const Signup = () => {

    const [profilePic, setProfilePic] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
        }
        );
    const [error, setError] = useState("");
    const handleImage = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0]);
            setProfilePic(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setError("");
        if (formData.password !== formData.password_confirmation) {
            setError("Passwords do not match.");
            return;
        }
        try{
            const data=new FormData();
            data.append("name",formData.name);
            data.append("email",formData.email);
            data.append("password",formData.password);
            data.append("password_confirmation",formData.password_confirmation);
            if (imageFile) {
                data.append("profile_picture", imageFile);
            }
             const response = await axios.post(
            "http://127.0.0.1:8000/api/register",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        alert(response.data.message);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong.");
            }
        }
        };
        


    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12">

            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-10">

                <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
                    Create Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Profile Picture */}

                    <div className="flex flex-col items-center">

                        <img
                            src={
                                profilePic ||
                                DefaultAvatar
                            }
                            alt="Profile Preview"
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow"
                        />

                        <label className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                            Choose Profile Picture
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                className="hidden"
                            />
                        </label>

                        <p className="text-sm text-gray-500 mt-2">
                            Only if u want to 😉
                        </p>

                    </div>

                    <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            {error}
                        </p>
                    )}
                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Sign Up
                    </button>

                </form>

            </div>

        </section>
    );
};

export default Signup;