import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../public/logo.png";
import loginImage from "../../public/login1.png";
import { useAuthContext } from "../context/AppContext";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };
  const handleDemo = async (e) => {
    e.preventDefault();
    await login({ username: "qwesdgfhj", password: "123456" });
  };

  return (
    <div className="pt-20 bg-pink-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Sidebar Section */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-r from-pink-700 to-pink-500 p-8 text-white md:w-1/3">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Login to Your Account</h4>
            <p className="text-sm">
              Welcome to our Portfolio Manager! Showcase yourself like never
              before.
            </p>
            <h4 className="text-lg font-semibold">Demo Account Enabled</h4>
            <p className="text-sm">
              Streamline your coding profiles, track progress, all in one place!
            </p>
          </div>
          {/* Placeholder Image */}
          <div className="mt-8">
            <img
              src={loginImage}
              alt="Placeholder"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Form Section */}
        <form
          className="bg-pink-200 w-full md:w-2/3 p-8 md:px-16"
          onSubmit={handleSubmit}
        >
          <div className="mb-8 flex space-x-4 justify-center">
            <img src={logo} alt="BeLieve" className="h-8 w-auto" />
          </div>

          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="text-sm mb-2 block text-pink-600">
                Username
              </label>
              <div className="relative">
                <input
                  name="username"
                  type="text"
                  required
                  className="text-pink-600 w-full px-4 py-3 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Enter username"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="text-sm mb-2 block text-pink-600">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  required
                  className="text-pink-600 w-full px-4 py-3 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Enter password"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8">
            <button
              type="submit"
              className={`${loading?"cursor-progress":""} w-full py-3 px-4 text-sm font-semibold rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400`}
            >
              {loading ? "Logging-in" : "Log in to your Account"}
            </button>
          </div>

          <div className="mt-4">
            <button
              className="w-full py-3 px-4 text-sm font-semibold rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600"
              onClick={handleDemo}
            >
              Log in to Demo Account
            </button>
          </div>

          <p className="text-pink-600 text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <Link
              to={"/register"}
              className="text-pink-600 font-semibold hover:underline"
            >
              Signup here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
