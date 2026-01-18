import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
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
      // ✅ signup ke baad login mark
      localStorage.setItem("isLoggedIn", "true");
      setLoading(false);
      navigate("/dashboard", { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-['Plus_Jakarta_Sans']">
      <form
        onSubmit={handleSignup}
        className="bg-[#1a2223] p-8 rounded-2xl w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

        <div className="mb-3 flex items-center">
          <FaUser />
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full bg-transparent border-b outline-none ml-2"
          />
        </div>

        <div className="mb-3 flex items-center">
          <FaEnvelope />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full bg-transparent border-b outline-none ml-2"
          />
        </div>

        <div className="mb-3 flex items-center">
          <FaLock />
          <input
            type={showPass ? "text" : "password"}
            required
            placeholder="Password"
            className="w-full bg-transparent border-b outline-none ml-2"
          />
          <button type="button" onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="mb-6 flex items-center">
          <FaLock />
          <input
            type={showConfirmPass ? "text" : "password"}
            required
            placeholder="Confirm Password"
            className="w-full bg-transparent border-b outline-none ml-2"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
          >
            {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button className="w-full bg-green-500 py-3 rounded-xl font-bold">
          {loading ? "Creating..." : "Create Account"} <FaCheckCircle />
        </button>
      </form>
    </div>
  );
}

export default Signup;
