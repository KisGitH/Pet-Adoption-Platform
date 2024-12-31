import React, { useState } from "react";
import { useAuthStore } from "../store/user.js"; 
import { assets } from "../assets/assets";

const LoginPage = ({ onLogin, onRegister }) => {
  const { login, user } = useAuthStore(); // Access the login function and user state from the store
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login({ name: username, password });

    if (success) {
      onLogin(); // Navigate to app content after successful login
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen bg-yellow-100 transition-all">
      <div className="flex w-full rounded-lg shadow-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="w-1/2 h-screen bg-white hidden md:flex justify-center items-center">
          <img
            src={assets.loginimage}
            alt="Adopt pets illustration"
            className="w-3/4 h-auto object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 hidden md:flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-center">
            <img src={assets.clogo} alt="Logo" className="w-24 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                name="username"
                autoComplete="username"
                pattern="^[a-zA-Z0-9]{3,}$" 
                title="Username should be atleast 3 characters long and can include letters, numbers, and underscores."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                autoComplete="current-password"
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" 
                title="Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-sm">
              <p>
                Don’t have an account?{" "}
                <button
                  onClick={onRegister}
                  className="text-yellow-500 hover:underline"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="w-full h-screen md:hidden flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-center">
            <img src={assets.clogo} alt="Logo" className="w-24 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                name="username"
                autoComplete="username"
                pattern="^[a-zA-Z0-9_]{3,}$" 
                title="Username should be atleast 3 characters long and can include letters, numbers, and underscores."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                autoComplete="current-password"
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" 
                title="Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-sm">
              <p>
                Don’t have an account?{" "}
                <button
                  onClick={onRegister}
                  className="text-yellow-500 hover:underline"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
