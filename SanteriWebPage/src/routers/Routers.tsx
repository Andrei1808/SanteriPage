import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import ServicesPage from "../pages/Services/ServicesPage";


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="services" element={<ServicesPage />} />
      {/* <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="login" element={<Login />} />
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
      <Route path="signup" element={<Signup />} /> */}
    </Routes>
  );
}
