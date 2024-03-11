import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Root</Link>
          </li>
          <li>
            <Link to="/layout1">Main-1</Link>
          </li>
          <li>
            <Link to="/layout2">Main-2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;