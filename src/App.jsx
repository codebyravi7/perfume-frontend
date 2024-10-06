import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar"; // Import your Navbar
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Search from "./Pages/Searchpage";
import ProductPage from "./Pages/ProductPage";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./Pages/Page404";
import Usercart from "./Pages/Usercart";
import { useAuthContext } from "./context/AppContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Loading from "./components/Smallcomps/Loading";
function App() {
  const { authUser, perfumes } = useAuthContext();
  console.log(authUser);
  return (
    <Router>
      <Navbar />
      <ToastContainer />

      <div className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              // authUser ? <h1 className="text-4xl pt-40">Hii</h1> : <Navigate to="/login" />
              authUser ? (
                <>
                  {!authUser ? (
                    <Loading title="Products" />
                  ) : (
                    <Home perfumes={perfumes} />
                  )}
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={authUser ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/:key" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/user/cart" element={<Usercart />} />
          <Route path={"*"} element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
