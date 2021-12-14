import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import Alert from "./Alert";
import { useContext, useState } from "react";
import UserContext from "./Context";

export default function Login() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    var data = JSON.stringify({
      email: email,
      password: password
    });

    var config = {
      method: "post",
      url: "https://ecomerce-master.herokuapp.com/api/v1/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    // Se está haciendo la petición de tipo POST al API de ecommerce
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // Meterlo en nuestro state que esta dentro del UserContext
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
        // A través del hook useNavigate de react-router-dom, lo redirige a "/"
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
        setAlert(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <Alert message={alert} />
      <input id="email" placeholder="email" />
      <input id="password" placeholder="contraseña" />
      <button onClick={handleLogin}>Login</button>

      <p>
        Si no tienes cuenta registrate <Link to="/signup">aquí</Link>{" "}
      </p>
    </div>
  );
};
