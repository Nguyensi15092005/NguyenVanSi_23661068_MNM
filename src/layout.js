import "./access/css/layout.css";
import logo from "./access/image/Ten-truong-do-1000x159.png";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
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
          <div id="menubar" className="menubar"></div>
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
