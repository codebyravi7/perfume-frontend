import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../public/logo.png";
import registerImage from "../../public/login1.png"; // Assuming a registration image
import { useAuthContext } from "../context/AppContext";

export default function Register() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useAuthContext();
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAccepted) {
      await signup(inputs);
    } else {
      alert("Please accept the terms and conditions");
    }
  };

  return (
    <div className="pt-20 bg-pink-50  min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Sidebar Section */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-r from-pink-700 to-pink-500 p-8 text-white md:w-1/3">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Create Your Account</h4>
            <p className="text-sm">
              Welcome to our Portfolio Manager! Start managing your coding
              profiles and showcase your skills effectively.
            </p>
            <h4 className="text-lg font-semibold">Join Us Today</h4>
            <p className="text-sm">
              Track your progress and streamline your development journey all in
              one place!
            </p>
          </div>
          {/* Placeholder Image */}
          <div className="mt-8">
            <img
              src={registerImage}
              alt="Register"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Form Section */}
        <form
          className="bg-pink-200 dark:text-white w-full md:w-2/3 p-8 md:px-16"
          onSubmit={handleSubmit}
        >
          <div className="mb-8 flex space-x-4 justify-center">
            <img src={logo} alt="BeLieve" className="h-8 w-auto" />
          </div>

          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="text-sm mb-2 block text-pink-600">Name</label>
              <div className="relative">
                <input
                  name="fullName"
                  type="text"
                  required
                  className="text-pink-600 w-full px-4 py-3 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Enter your name"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="text-sm mb-2 block text-pink-600">
                Username
              </label>
              <div className="relative">
                <input
                  name="username"
                  type="text"
                  required
                  className="text-pink-600 w-full px-4 py-3  border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Enter your username"
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
                  className="text-pink-600 w-full px-4 py-3  border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Enter your password"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="text-sm mb-2 block text-pink-600">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  className="text-pink-600 w-full px-4 py-3  border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Confirm your password"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Gender Selection */}
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={isAccepted}
                onChange={() => setIsAccepted(!isAccepted)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-pink-300 rounded"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I accept the{" "}
                <Link to="/terms" className="text-pink-600 font-semibold">
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-semibold rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Create Your Account
            </button>
          </div>

          <p className="text-gray-600 text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-pink-600 font-semibold hover:underline"
            >
              Log in here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control mr-10">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text mr-2 text-pink-600">Male</span>
          <input
            type="checkbox"
            className="checkbox border-pink-300"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer  ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text mr-2 text-pink-600">Female</span>
          <input
            type="checkbox"
            className="checkbox border-pink-300"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
