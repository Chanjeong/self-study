import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Digital from "../views/Digital";
import Accessory from "../views/Accessory";
import ProductView from "../components/products/ProductView";
import CartView from "../components/carts/CartView";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/accessory" element={<Accessory />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/product/:id" element={<ProductView />} />
    </Routes>
  );
};

export default memo(Router);
