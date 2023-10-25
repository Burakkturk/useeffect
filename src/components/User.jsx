import React, { useState } from "react";
const User = () => {
  //   let userData = "deneme";
  const [userData, setUserData] = useState("");
  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };
  console.log(userData);
  return (
    <div>
      <img src={userData?.picture?.large} className="rounded-circle" alt="" />
      <h4>Hi, My name is</h4>
      <h1>Name</h1>
      <h3>Email</h3>
      <h4>dob</h4>
      <h5>phone</h5>
      <h6>address</h6>
      <button className="btn btn-success" onClick={getUser}>
        Get Random User
      </button>
    </div>
  );
};
export default User;
