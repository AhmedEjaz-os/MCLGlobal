import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/login";
import RegisterPage from "./components/auth/register";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
