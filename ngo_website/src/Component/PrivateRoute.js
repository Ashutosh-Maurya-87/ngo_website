import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const PrivateRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate()
    const isAuthenticated = sessionStorage.getItem("isLogin");
    console.log('isLOgin',isAuthenticated)
    return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />;
  };