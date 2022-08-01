import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn && <Profile />}
      {!isLoggedIn && <Login />}
    </div>
  );
}

export default App;
