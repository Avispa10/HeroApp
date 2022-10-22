import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login, authState } = useContext(AuthContext);

  console.log(login);
  console.log(authState);

  const onLogin = () => {
    login("Ignacio Martinez");

    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Button
      </button>
    </div>
  );
};
