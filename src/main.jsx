import React from "react";
import { AuthProvider } from "@contexts/AuthContext";
import { FilterProvider } from "@contexts/FilterContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FilterProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<App />} />
          </Routes>
        </Router>
      </FilterProvider>
    </AuthProvider>
  </React.StrictMode>
);
