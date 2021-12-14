import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./Signup";
import App from "./App";
import Welcome from "./Welcome";
import UserContext from "./Context";

export default function AppRoutes() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    // Pasar el state "user" a el context "UserContext" para que pueda ser usado
    // por todos los componentes (Global State)
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={user ? <Welcome /> : <App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </UserContext.Provider>
  );
};
