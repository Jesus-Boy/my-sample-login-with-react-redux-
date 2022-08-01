import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      const userData = data.find(
        (user) => user.email === inputEmail && user.password === inputPassword
      );

      if (!userData) {
        throw new Error("invalid credentials");
      }

      dispatch(
        login({
          name: userData.name,
          age: userData.age,
          email: userData.email,
        })
      );
    } catch (error) {
      alert("User not found");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    getUser();
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div>
      <form>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setInputPassword(e.target.value)}
            value={inputPassword}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
