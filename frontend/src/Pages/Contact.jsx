import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);

        alert("Message sent successfully!");

        setForm({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20">

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-14">

                    <h1 className="text-5xl font-bold text-gray-800">
                        Contact <span className="text-blue-600">US</span>
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        My soldiers do not buckle or yield when faced with the cruelty of this world!
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Information */}

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                            Get in Touch
                        </h2>

                        <div className="space-y-6">

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    📧 Email
                                </h3>
                                <p className="text-gray-600">
                                    parameter@notejs.com
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    📞 Phone
                                </h3>
                                <p className="text-gray-600">
                                    +977-98XXXXXXXX
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    📍 Address
                                </h3>
                                <p className="text-gray-600">
                                    Wall Maria, Paradis Island
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                            Send AOT Message
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            <input
                                type="text"
                                name="name"
                                placeholder="My Soldiers Push Forward!"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="My Soldiers scream out!"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <textarea
                                rows="6"
                                name="message"
                                placeholder="My Soldiers RAGE!!!!!!!!"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                            >
                                Send Scouts
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;