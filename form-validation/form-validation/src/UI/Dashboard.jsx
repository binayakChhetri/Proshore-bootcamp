import React from "react";
import { AboutMe } from "./AboutMe";
import { Title } from "./Title";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "./Button";
import { restore, setIsAuthenticated } from "../features/UserSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const logout = () => {
    dispatch(setIsAuthenticated(false));
    localStorage.clear();
    dispatch(restore());
  };
  console.log(username);
  return (
    <div className="dashboard">
      <Title>{`Welcome to the dashboard ${username}`}</Title>
      <AboutMe />
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
