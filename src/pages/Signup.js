import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

       
      localStorage.setItem("isLoggedIn", "true");

      
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 font-['Plus_Jakarta_Sans']"
      style={{
        background:
          "linear-gradient(circle at 80% 20%, rgba(4, 58, 37, 1) 20%, rgba(6, 43, 43, 1) 50%, rgb(2, 11, 44) 100%)",
      }}
    >
      <div className="bg-[#1a2223] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] px-8 py-7 w-full max-w-md border border-white/10 relative">

        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="absolute top-5 left-5 text-gray-500 hover:text-[#22c55e]"
        >
          <FaArrowLeft />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black text-white">
            <span className="text-[#22c55e]">Re</span>gister
          </h2>
          <p className="text-gray-300">Set up your manager account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-400 font-bold">Full Name</label>
            <div className="flex items-center bg-[#252d2e] rounded-xl px-4 py-2">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-transparent text-white ml-3 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400 font-bold">Email</label>
            <div className="flex items-center bg-[#252d2e] rounded-xl px-4 py-2">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                required
                placeholder="manager@company.com"
                className="w-full bg-transparent text-white ml-3 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-400 font-bold">Password</label>
            <div className="flex items-center bg-[#252d2e] rounded-xl px-4 py-2">
              <FaLock className="text-gray-500" />
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full bg-transparent text-white ml-3 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="text-gray-400 ml-2"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-400 font-bold">
              Confirm Password
            </label>
            <div className="flex items-center bg-[#252d2e] rounded-xl px-4 py-2">
              <FaLock className="text-gray-500" />
              <input
                type={showConfirmPass ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full bg-transparent text-white ml-3 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="text-gray-400 ml-2"
              >
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#22c55e] py-3 rounded-xl font-bold text-black mt-4 flex justify-center gap-2"
          >
            {loading ? "Creating Account..." : "Create Account"} <FaCheckCircle />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
