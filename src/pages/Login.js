import React, { useState } from "react";
import { FaUser, FaLock, FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      setLoading(false);
      navigate("/dashboard", { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-['Plus_Jakarta_Sans']">
      <form
        onSubmit={handleLogin}
        className="bg-[#1a2223] p-8 rounded-2xl w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <FaUser />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full bg-transparent border-b outline-none ml-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6 flex items-center">
          <FaLock />
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            className="w-full bg-transparent border-b outline-none ml-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button className="w-full bg-green-500 py-3 rounded-xl font-bold">
          {loading ? "Verifying..." : "Login to Dashboard"} <FaArrowRight />
        </button>

        <p className="text-center mt-4">
          New user?
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-green-400 ml-2"
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
