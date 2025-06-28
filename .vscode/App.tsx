
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n";

function App() {
  return (
    <Router>
      <div className="relative">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
