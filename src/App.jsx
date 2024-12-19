import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
/* import ProductDetailPage from "./pages/ProductDetailPage"; */
import CustomPage from "./pages/CustomPage";
import HelpPage from "./pages/HelpPage";
import SignUpPage from "./pages/SignUpPage";
import RegisterPage from "./pages/RegisterPage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage";
import CartPage from "./pages/CartPage";
import ResetPage from "./pages/ResetPasswordPage";
import AccountPage from "./pages/AccountPage";
import VerifiedEmailPage from "./pages/VerifiedEmailPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* <Route path="/products/:productId" element={<ProductDetailPage />} /> */}
            <Route path="/custom" element={<CustomPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recover" element={<RecoverPasswordPage />} />
            <Route path="/reset/:reset_token" element={<ResetPage />} />
            <Route path="/verify/:verificationToken" element={<VerifiedEmailPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
