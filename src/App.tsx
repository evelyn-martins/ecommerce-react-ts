import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AfterPayment from "./pages/AfterPayment";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Promotion />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listing" element={<Listing />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="successful-order" element={<AfterPayment />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
