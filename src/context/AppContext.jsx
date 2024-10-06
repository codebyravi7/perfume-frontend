import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("jwt")) || null
  );
  const token = authUser?.token;
  const [loading, setLoading] = useState(false);
  const [loadingposts, setLoadingPosts] = useState(false);
  const [reload, setReload] = useState(false);
  const [perfumes, setPerfumes] = useState([]);
  const [error, setError] = useState(false);
  // const [likes, setLikes] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      console.log("i m reloading");
      //   await showPosts();
    };
    fetchdata();
  }, [reload, token]);

  const url = `${import.meta.env.VITE_APP_URL}`;
  //   const url = "https://perfume-backend-ivo0.onrender.com";
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrorssignup({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${url}/api/auth/signup`,
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        },

        // Pass data directly as the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data; // Axios automatically parses JSON
      if (data?.error) {
        throw new Error(data.error);
      }

      // Save user data to local storage and update authentication state
      localStorage.setItem("jwt", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.error(error.message); // Display error message
    } finally {
      setLoading(false); // Always execute after request completion
    }
  };
  const login = async ({ username, password }) => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${url}/api/auth/login`,
        { username, password }, // Data to send in the body
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      if (data.error) {
        throw new Error(data.error);
      }

      // Save user data to local storage and update authentication state
      // console.log("data in login",data)
      localStorage.setItem("jwt", JSON.stringify(data));
      setAuthUser(data);

      return data;
    } catch (error) {
      console.error(error.message); // Show error message in the UI
    } finally {
      setLoading(false); // Always execute after request completion
    }
  };
  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/auth/logout`, {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      });
      const data = response.data; // Axios parses JSON automatically
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.success) localStorage.removeItem("jwt"); // Clear JWT from local storage
      setAuthUser(null);
    } catch (error) {
      console.error(error.message); // Display error
    } finally {
      setLoading(false); // Manage loading state
    }
  };

  const getOnePerfume = async (id) => {
    try {
      const perfume = await axios.get(`${url}/api/perfume/${id}`);
      return perfume;
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  const getPerfumes = async (key) => {
    try {
      const perfumes = await axios.get(`${url}/api/perfumes/${key}`);
      toast.success(perfumes?.data?.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return perfumes;
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  const searchPerfumes = async (keyword) => {
    try {
      console.log("req sent");
      const perfumes = await axios.get(`${url}/api/perfumes/search/${keyword}`);
      toast.success(perfumes?.data?.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return perfumes;
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        token,
        login,
        loading,
        signup,
        logout,
        perfumes,
        getPerfumes,
        searchPerfumes,
        getOnePerfume,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function handleInputErrorssignup({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    console.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    console.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
