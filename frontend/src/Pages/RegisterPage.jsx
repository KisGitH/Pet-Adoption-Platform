import React, { useState } from "react";
import { useAuthStore } from "../store/user.js"; 
import { assets } from "../assets/assets.js";

const RegisterPage = ({ onLogin, onBackToLogin }) => {
  const { register } = useAuthStore(); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate the form fields before sending the request
    if (!username || !email || !password || !confirmPassword) {
      setError("Name, email, password, and confirm password are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Prepare the user data object
    const userData = {
      name: username,
      email: email,
      password: password,
    };

    // Call the register function from the globalstate
    const success = await register(userData);

    // Handle success or failure
    if (success) {
      setError("");
      onBackToLogin(); // Navigate to login page after successful registration
    } else {
      setError("Email is already registered..");
    }
  };

  return (
    <div className="w-full h-screen bg-yellow-100 transition-all">
      <div className="flex w-full rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 hidden md:flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-center">
            <img
              src={assets.clogo} 
              alt="Logo"
              className="w-24 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register</h2>
            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                pattern="^[a-zA-Z0-9_]{3,}$" 
                title="Username should be atleast 3 characters long and can include letters, numbers, and underscores."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                pattern="^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Email pattern
                title="Please enter a valid email address."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" // Password pattern (minimum 8 characters, 1 uppercase, 1 number, 1 special character)
                title="Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Register
              </button>
            </form>
            <div className="mt-4 text-sm">
              <p>
                Already have an account?{" "}
                <button
                  onClick={onBackToLogin}
                  className="text-yellow-500 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>

       {/* Right Section */}
        <div className="w-1/2 h-screen bg-white hidden md:flex justify-center items-center">
          <img
            src={assets.registerimage} 
            alt="Register illustration"
            className="w-3/4 h-auto object-contain"
          />
        </div>

        {/* Mobile View */}
        <div className="w-full h-screen md:hidden flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm text-center">
            <img
              src={assets.clogo} 
              alt="Logo"
              className="w-24 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register</h2>
            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                pattern="^[a-zA-Z0-9_]{3,}$"
                title="Username should be atleast 3 characters long and can include letters, numbers, and underscores."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                pattern="^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
                title="Password must be at least 6 characters long, include at least one uppercase letter, one number, and one special character."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Register
              </button>
            </form>
            <div className="mt-4 text-sm">
              <p>
                Already have an account?{" "}
                <button
                  onClick={onBackToLogin}
                  className="text-yellow-500 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
