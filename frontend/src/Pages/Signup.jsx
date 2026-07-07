import React, { useState } from "react";
import DefaultAvatar from "../Images/default-avatar.png";
const Signup = () => {

    const [profilePic, setProfilePic] = useState(null);

    const handleImage = (e) => {
        if (e.target.files[0]) {
            setProfilePic(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12">

            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-10">

                <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
                    Create Account
                </h1>

                <form className="space-y-5">

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
                        placeholder="Username"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

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