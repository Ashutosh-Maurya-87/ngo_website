import React from "react";
import { Navigate } from "react-router-dom";
export const ProtectedRoutes = (props) => {
    const { Component } = props;
    const isAuthenticated = sessionStorage.getItem("isLogin");
    return isAuthenticated ? <Component {...props} /> : <Navigate to="/" />;
  };