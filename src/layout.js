import "./access/css/layout.css";
import logo from "./access/image/Ten-truong-do-1000x159.png";
import { Outlet, Link, useNavigate  } from "react-router-dom";
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
        <link rel="stylesheet" href="access/css/layout.css" />

        <div id="header" className="header">
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
        </div>
      </header>
      <body>
        <Outlet />
      </body>
      <footer></footer>
    </html>
  );
};
export default Layout;
