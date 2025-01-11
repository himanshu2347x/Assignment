import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { email, password }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    console.log({ email, password });
    handleLogin();
  };

  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img
            className="w-20 mx-auto mb-5"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            alt="Logo"
          />
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        {error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        <footer>
          <a
            className="text-indigo-700 hover:text-pink-700 text-sm float-left"
            href="#"
          >
            Forgot Password?
          </a>
          <a
            className="text-indigo-700 hover:text-pink-700 text-sm float-right"
            href="#"
          >
            Create Account
          </a>
        </footer>
      </div>
    </div>
  );
};

export default LoginForm;
