import Login from "./features/Login.jsx";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router";
import Signup from "./features/Signup.jsx";
import Error from "./UI/Error.jsx";
import { Dashboard } from "./UI/Dashboard.jsx";
import ProtectedRoute from "./utlis/ProtectedRoute.jsx";
import { Card } from "./UI/Card.jsx";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Card />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error errorMessage="Page not found" />} />
        </Routes>
      </BrowserRouter>{" "}
    </section>
  );
}

export default App;
