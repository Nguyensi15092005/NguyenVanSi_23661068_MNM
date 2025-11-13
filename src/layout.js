import "./assets/css/layout.css";
import logo from "./access/image/logo.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

        {/* <div id="header" className="header">
          <div id="banner" className="banner">
            <div id="divmenutrai">
              <nav id="menutrai">
                <ul className="menutrai" style={{ width: "250px" }}>
                  <li>
                    <Link to="/" class="menutrai">
                      TRANG CHU
                    </Link>
                  </li>
                  <li>
                    <Link className="menutrai" to="/trang1">
                      {" "}
                      EGOV
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/products" class="menutrai">
                      QUẢN TRỊ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div style={{ width: "1000px" }}>
              <img src={logo} width="500" height="80" />
            </div>
            <div>Tim kiem</div>
          </div>

          <div id="menubar" className="menubar">
            <div className="menubar-left">
              <a href="/menu1" className="menu-item">
                Menu 1
              </a>
              <a href="/menu2" className="menu-item">
                Menu 2
              </a>
              <a href="/menu3" className="menu-item">
                Menu 3
              </a>
            </div>

            <div className="menubar-right">
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
        </div> */}
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
        <Outlet/>
      </body>
      <footer></footer>
    </html>
  );
};
export default Layout;
