import "./assets/css/layout.css";
import logo from "./assets/image/logo.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 3. Lấy cartItems từ Context
  const { cartItems } = useCart();

  // 4. Tính tổng số lượng sản phẩm (để hiển thị badge số nhỏ)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <html>
      <header>
        <link rel="stylesheet" href="assets/css/layout.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <div className="header">
          <div className="logo">
            <img src={logo} />
          </div>
          <ul className="menu">
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/trang1">SẢN PHẨM</Link>
            </li>
            <li>
              <Link to="/admin/products">QUẢN LÝ</Link>
            </li>
          </ul>
          <div className="search">
            <input type="text" placeholder="Tim kiem" />
            <button>Tìm</button>
          </div>
          <Link to="chat" className="chatAI">
            <i class="fa-solid fa-comment-dots"></i>
          </Link>
          <Link to="/cart" className="cart">
            <i class="fa-solid fa-cart-plus"></i>
            {totalQuantity > 0 ? <span>{totalQuantity}</span> : "0"}
          </Link>
          <div className="auth-right">
            {user ? (
              <>
                <span className="username">👤 {user.username}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <a href="/login" className="login-link">
                Đăng nhập
              </a>
            )}
          </div>
        </div>
      </header>
      <body>
        <Outlet />
      </body>
      <footer>
        <div className="footer">
          <div className="footer-left">
            <div className="l-title">Thông tin liên hệ</div>
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <p>11/15 Đường số 5 HCM</p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <p>0987654321</p>
              </li>
              <li>
                <i class="fa-brands fa-telegram"></i>
                <p>Nguyễn Văn Sĩ</p>
              </li>
              <li>
                <i class="fa-brands fa-facebook"></i>
                <p>Nguyễn Văn Sĩ</p>
              </li>
              <li>
                <i class="fa-brands fa-tiktok"></i>
                <p>Nguyễn Văn Sĩ</p>
              </li>
            </ul>
          </div>

          <div className="footer-center">
            <div className="c-title">Liên kết</div>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/trang1">Sản phẩm</Link>
              </li>
              <li>
                <Link to="/admin/products">Quản lý</Link>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <div className="r-title">Địa chỉ liên kết</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.063798375963!2d106.59807837512889!3d10.806425758639476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b9211123c6f%3A0xab901e14926551c!2zMTEgxJDGsOG7nW5nIHPhu5EgNSwgQsOsbmggSMawbmcgSG_DoCwgQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcxOTAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1763340661361!5m2!1svi!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </footer>
    </html>
  );
};
export default Layout;
