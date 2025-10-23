import "./styles.css";
// @ts-ignore
// import Home from "./Home";
// @ts-ignore
import Layout from "./layout";
// @ts-ignore
import Trang1 from "./Tang1";
// @ts-ignore
import Trang2 from "./Trang2";
import ListProduct from "./ListProduct";
import Chitietsanpham from "./Chitietsanpham";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  //return <Layout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListProduct />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
