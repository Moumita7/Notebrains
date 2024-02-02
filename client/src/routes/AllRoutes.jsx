import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import ProductDetails from "../components/ProductDetails";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AddProduct />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AllRoutes;
