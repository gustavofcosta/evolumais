import { BrowserRouter, Routes, Route } from "react-router-dom";
import Budget from "./pages/budget";
import Contact from "./pages/contact";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="budget" element={<Budget />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
