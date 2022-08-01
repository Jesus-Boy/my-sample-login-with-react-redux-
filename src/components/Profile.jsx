import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to my sample login page.</h1>
      <h2>Your Profile</h2>
      <h2>Name: {user.name}</h2>
      <h2>age: {user.age}</h2>
      <h2>email: {user.email}</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Profile;
