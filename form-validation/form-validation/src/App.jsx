import Login from "./components/Login";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>{" "}
    </section>
  );
}

export default App;
