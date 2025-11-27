import "./styles.css";
// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./layout";
// @ts-ignore
import Trang1 from "./Tang1";
// @ts-ignore
import Trang2 from "./Trang2";
// @ts-ignore
import ListProduct from "./ListProduct";
// @ts-ignore
import ListProducts_SP from "./ListProducts_SP";
// @ts-ignore
import ProductDetail from "./ProductDetail";
// @ts-ignore
import Chitietsanpham from "./Chitietsanpham";
// @ts-ignore
import LoginPage from "./LoginPage";
// @ts-ignore
import LogoutPage from "./LogoutPage";
// @ts-ignore
import ProtectedRoute from "./ProtectedRoute";
// @ts-ignore
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
// @ts-ignore
import ChatPage from "./ChatPage"; // ✅ Import trang Chat
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext"; // Context vừa sửa ở Bước 1
import CartPage from "./CartPage"; // Trang hiển thị giỏ hàng (Xem bước 3)

const App = () => {
  //return <Layout />;
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListProducts_SP />} />
            <Route path="trang1" element={<Trang1 />} />
            <Route path="trang2" element={<Trang2 />} />
            <Route path="sanpham/:id" element={<Chitietsanpham />} />
            <Route path="detail/:id" element={<ProductDetail />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="chat" element={<ChatPage />} />

            <Route
              path="admin/products"
              element={
                <ProtectedRoute>
                  <ListProducts_SP_Admin />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
