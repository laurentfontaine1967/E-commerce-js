import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const [auth, setAuth] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    var auth = window.localStorage.getItem("email");

    if (auth === null) {
      navigate("/login");
    }
    setAuth(auth);
  }, []);

  return <div>Welcome to home private page</div>;
};
export default Dashboard;
