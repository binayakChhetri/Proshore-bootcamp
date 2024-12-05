import Login from "./components/Login";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router";
import Signup from "./components/Signup.jsx";
import Error from "./UI/Error.jsx";
import { AboutMe } from "./UI/AboutMe.jsx";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-me" element={<AboutMe />} />

          <Route path="*" element={<Error errorMessage="Page not found" />} />
        </Routes>
      </BrowserRouter>{" "}
    </section>
  );
}

export default App;
