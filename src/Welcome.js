import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./Context";

export default function Welcome() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState("");

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://ecomerce-master.herokuapp.com/api/v1/user/me",
      headers: {
        Authorization: `JWT ${user.token}`
      }
    };

    axios(config)
      .then(function (response) {
        setName(
          response.data.user.first_name + " " + response.data.user.last_name
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <h1>Bienvenido {name}</h1>;
};
