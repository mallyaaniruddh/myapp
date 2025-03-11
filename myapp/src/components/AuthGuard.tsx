import { Navigate } from "react-router-dom";
import React from "react";

import { jwtDecode } from "jwt-decode";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    // Grab only `exp` directly
    const { exp }: { exp: number } = jwtDecode(token);
    // Return children if token hasn’t expired, otherwise go to /login
    return exp * 1000 > Date.now() ? <>{children}</> : <Navigate to="/login" />;
  } catch {
    // Any decode error means the token is invalid
    return <Navigate to="/login" />;
  }
};

export default AuthGuard;
