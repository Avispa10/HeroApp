import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {
  const { authState } = useContext(AuthContext);
  console.log(authState.user?.name);
  console.log("render Navigate");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark
    px-4
    "
    >
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={(args) => {
              //console.log("nav-item" + (args.isActive ? "estrue" : "nada"));
              return `nav-item nav-link  ${args.isActive ? "active" : ""}`;
            }}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={(args) => {
              //console.log(args);
              return `nav-item nav-link  ${args.isActive ? "active" : ""}`;
            }}
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={(args) => {
              //console.log(args);
              return `nav-item nav-link  ${args.isActive ? "active" : ""}`;
            }}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex  justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link ">{authState.user?.name}</span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
