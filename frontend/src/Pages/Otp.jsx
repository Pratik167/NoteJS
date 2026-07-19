import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Otp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(600);
    const inputs = useRef([]);
    const location = useLocation();
    const {email,type} = location.state;
    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);
    console.log(location.state);
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const resendOTP = async() => {
        const endpoint=type==="register"?"/register/resend-otp":"/forgot-password/verify-otp";
        setOtp(["", "", "", "", "", ""]);
        setTimer(60);
        inputs.current[0].focus();
        try{
            await axios.post(endpoint,{email});
            setOtp(["","","","","",""]);
        setTimer(60);
        inputs.current[0].focus();
        } catch (err) {
            alert(err.response?.data?.message);
        }
    };

    const verifyOTP = async() => {
        const code = otp.join("");
        const endpoint = type === "register"?"/register/verify-otp":"/forgot-password/verify-otp";
        try {
            const response = await axios.post(endpoint, {
            email,
            otp: code
        });

        alert(response.data.message);
        if (type === "register") {
            navigate("/login");
        } else {
            navigate("/newpassword", { state: { email } });
        }
        } catch (err) {
            alert(err.response?.data?.message || "Invalid OTP");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Verify OTP
                </h2>

                <p className="text-center text-gray-500 mt-3">
                    Enter the 6-digit verification code sent to
                </p>

                <p className="text-center font-semibold text-indigo-600 mb-8">
                    {email}
                </p>

                <div className="flex justify-center gap-3">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputs.current[index] = el)}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) =>
                                handleChange(e.target.value, index)
                            }
                            onKeyDown={(e) =>
                                handleKeyDown(e, index)
                            }
                            className="w-12 h-14 text-center text-2xl font-bold border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        OTP expires in
                    </p>

                    <p className="text-2xl font-bold text-indigo-600 mt-1">
                        {formatTime(timer)}
                    </p>
                </div>

                <div className="text-center mt-4">
                    {timer === 0 ? (
                        <button
                            onClick={resendOTP}
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Resend OTP
                        </button>
                    ) : (
                        <p className="text-gray-400 text-sm">
                            You can resend OTP after the timer ends.
                        </p>
                    )}
                </div>

                <button
                    onClick={verifyOTP}
                    className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
                >
                    Verify OTP
                </button>

            </div>
        </div>
    );
};

export default Otp;