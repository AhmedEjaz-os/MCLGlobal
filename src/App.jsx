import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/login";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
