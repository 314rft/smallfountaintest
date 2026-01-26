import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import Future from "./pages/Future";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/future" element={<Future />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
