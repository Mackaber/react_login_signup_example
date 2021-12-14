import { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
import Alert from "./Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const NameSchema = yup.object().shape({
  first_name: yup.string().required()
});

export default function SignUp() {
  const [alert, setAlert] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(NameSchema)
  });

  const handleSignUp = ({ first_name, last_name, email, password }) => {
    const data = JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    });

    const config = {
      method: "post",
      url: "https://ecomerce-master.herokuapp.com/api/v1/signup",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setAlert("Te has registrado Satisfactoriamente, dirígete a Login");
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        setAlert(error.response.data.message);
      });
  };
  return (
    <div>
      <h1>SignUp</h1>
      <Alert message={alert} />
      <form className="signup" onSubmit={handleSubmit(handleSignUp)}>
        <input {...register("first_name")} placeholder="Nombre" />
        {errors.first_name && <p>{errors.first_name.message}</p>}
        <input {...register("last_name")} placeholder="Apellido" />
        <input {...register("email")} placeholder="email" />
        <input
          {...register("password")}
          type="password"
          placeholder="contraseña"
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Si ya tienes cuenta loggeate <Link to="/login">aquí</Link>{" "}
      </p>
    </div>
  );
};
