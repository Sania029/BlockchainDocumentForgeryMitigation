import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // ✅ Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify styles

import Dashboard from "./components/Dashboard";
import UploadDocument from "./components/UploadDocument";
import VerifyDocument from "./components/VerifyDocument";
import Home from "./components/MainInterface";
import Login from "./components/Login";
import Register from "./components/Register";
import IssueDocument from "./components/IssueDocument";

function App() {
  return (
    <Router>
      {/* ✅ Global Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadDocument />} />
        <Route path="/verify" element={<VerifyDocument />} />
        <Route path="/issue-document" element={<IssueDocument />} />
      </Routes>
    </Router>
  );
}

export default App;
