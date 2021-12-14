import { createContext } from "react";

const UserContext = createContext({
  user: JSON.parse(localStorage.getItem("user")),
  setUser: () => {}
});
export default UserContext;
