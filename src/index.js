import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import AuthContext from "./context/AuthContext";
import UserAccoutContext from "./context/UserAccoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserAccoutContext>
      <AuthContext>
        <App />
        <Toaster />
      </AuthContext>
    </UserAccoutContext>
  </React.StrictMode>
);
