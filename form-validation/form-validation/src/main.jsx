import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { Routes, BrowserRouter, Route } from "react-router";
import Signup from "./components/Signup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/signUp" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
