import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAdapter from "../adapters/AuthAdapter";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await AuthAdapter.login(email, password);
    if (success) {
      navigate("/dashboard");  // Redirect on successful login
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
