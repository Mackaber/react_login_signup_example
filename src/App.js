import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Authentication Example</h1>
      <Link to="/signup">SignUp</Link> | <Link to="/login">Login</Link>
    </div>
  );
}
